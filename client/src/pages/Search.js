import React from 'react';
import SearchResults from '../components/SearchResults';

class Search extends React.Component {
    render() {
        const style = {
            width: 'Calc(100vw - 200px)',
            overflow: "scroll",
            height: '100vh'
        }
        const mobileStyle = {
            width: '100vw',
            height: 'max content',
            overflow: 'visible'
        }
        return (
            <div style={this.props.isDesktop ? style : mobileStyle}>
                <SearchResults {...this.props} />
            </div>
        )
    }
}

export default Search;