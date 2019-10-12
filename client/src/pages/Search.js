import React from 'react';
import SearchResults from '../components/SearchResults';

class Search extends React.Component {
    render() {
        const style = {
            width: 'Calc(100vw - 200px)'
        }
        return (
            <div style={style}>
                <SearchResults {...this.props} />
            </div>
        )
    }
}

export default Search;