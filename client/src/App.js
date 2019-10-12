import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import API from './utils/API';
import Search from './pages/Search';
import Collection from './pages/Collection';
import Modal from 'react-modal';

class App extends React.Component {
    state = {
        search: "",
        results: [],
        showModal: false,
        modalContents: null
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleFormSubmit = event => {
        event.preventDefault();
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
                width: "70vw",
                height: "max-content",
                top: '50%',
                left: '50%',
                right: 'auto',
                bottom: 'auto',
                marginRight: '-50%',
                transform: 'translate(-50%, -50%)'
            }
        }
        return (
            <Router>
                <div style={style}>
                    <Sidebar search={this.state.search} handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                    <Route exact path="/" component={() => { return <Search results={this.state.results} handleOpenModal={this.handleOpenModal} alterModal={this.alterModal} /> }} />
                    <Route exact path="/collection" component={Collection} />
                    <Modal style={modalStyle} isOpen={this.state.showModal}>
                        {this.state.modalContents}
                        <button onClick={this.handleCloseModal}>Close</button>
                    </Modal>
                </div>
            </Router>
        )
    }
}

export default App;