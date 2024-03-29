import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import Sidebar from './components/Sidebar';
import API from './utils/API';
import Search from './pages/Search';
import Collection from './pages/Collection';
import Modal from 'react-modal';
import BookCard from './components/BookCard';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            results: [],
            showModal: false,
            modalContents: null,
            collection: null
        }
        this.getCollection()
    }
    getCollection = () => {
        API.getCollection().then(response => {
            const results = response.data.map(book => {
                return (
                    <BookCard inCollection={true} alterModal={this.alterModal} handleOpenModal={this.handleOpenModal} handleCloseModal={this.handleCloseModal} book={book} key={book._id} />
                )
            });
            this.setState({ collection: results })
        }).catch(error => {
            console.log(error);
        });
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = () => {
        API.getBooksExternal(this.state.search).then(results => {
            results = results.data.items
            this.setState({
                results: results
            })
        }).catch(error => {
            console.log(error)
        })
    }
    handleOpenModal = () => {
        this.setState({ showModal: true });
    }
    handleCloseModal = () => {
        this.setState({
            showModal: false,
            modalContents: null
        });
    }
    alterModal = jsx => {
        this.setState({ modalContents: jsx });
    }
    render() {
        const style = {
            display: "flex",
            justifyContent: "flex-start"
        }
        const modalStyle = {
            content: {
                width: "500px",
                maxWidth: "90%",
                height: "max-content",
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
                backgroundColor: '#5DC3C7',
                border: "1px #bbbbbb solid",
                boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)",
            }
        }
        return (
            <Router>
                <MediaQuery minWidth={768}>
                    <div style={style}>
                        <Sidebar isDesktop={true} search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handleCollectionClick={this.getCollection} />
                        <Route exact path="/" component={() => { return <Search isDesktop={true} results={this.state.results} handleOpenModal={this.handleOpenModal} alterModal={this.alterModal} handleCloseModal={this.handleCloseModal} /> }} />
                        <Route exact path="/collection" component={() => { return <Collection isDesktop={true} collection={this.state.collection} /> }} />
                    </div>
                </MediaQuery>
                <MediaQuery maxWidth={767}>
                    <div>
                        <Sidebar isDesktop={false} search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} handleCollectionClick={this.getCollection} />
                        <Route exact path="/" component={() => { return <Search isDesktop={false} results={this.state.results} handleOpenModal={this.handleOpenModal} alterModal={this.alterModal} handleCloseModal={this.handleCloseModal} /> }} />
                        <Route exact path="/collection" component={() => { return <Collection isDesktop={false} collection={this.state.collection} /> }} />
                    </div>
                </MediaQuery>
                <Modal style={modalStyle} isOpen={this.state.showModal}>
                    {this.state.modalContents}
                    <button onClick={this.handleCloseModal}>Close</button>
                </Modal>
            </Router>
        )
    }
}

export default App;