import React from 'react';
import SearchBar from './SearchBar';

class Sidebar extends React.Component {
    render() {
        const style = {
            width: '300px',
            maxWidth: '100vw'
        }
        return (
            <div style={style}>
                <h1>Google Bookshelf</h1>
                <p>Start searching books to add them to the collection or take a look at what's already in the collection!</p>
                <SearchBar {...this.props} />
                <a href="/collection">View Collection</a>
            </div>
        )
    }
}

export default Sidebar;