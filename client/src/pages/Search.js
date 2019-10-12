import React from 'react';
import SearchResults from '../components/SearchResults';

class Search extends React.Component {
    render() {
        const style = {
            width: 'Calc(100vw - 200px)',
            overflow: "scroll",
            height: '100vh'
        }
        return (
            <div style={style}>
                <SearchResults {...this.props} />
            </div>
        )
    }
}

export default Search;