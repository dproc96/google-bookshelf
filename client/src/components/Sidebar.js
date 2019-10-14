import React from 'react';
import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    render() {
        const style = {
            width: '300px',
            backgroundColor: '#0F3738',
            height: '100vh',
            color: '#eeeeee',
            textAlign: 'center',
            borderRight: "1px #333333 solid",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)",
        }
        const mobileStyle = {
            ...style,
            width: '100%',
            height: 'max content',
            display: 'block',
            padding: '20px 0px'
        }
        return (
            <div style={this.props.isDesktop ? style : mobileStyle}>
                <h1>Google Bookshelf</h1>
                <p>Start searching books to add them to the collection or take a look at what's already in the collection!</p>
                <SearchBar {...this.props} />
                <Link onClick={this.props.handleCollectionClick} to="/collection">View Collection</Link>
            </div>
        )
    }
}

export default Sidebar;