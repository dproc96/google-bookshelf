import React from 'react';

class SearchBar extends React.Component {
    handleInputChange = this.props.handleInputChange.bind(this);
    handleFormSubmit = this.props.handleFormSubmit.bind(this);
    render() {
        return (
            <div>
                <input value={this.props.search} name="search" type="text" onChange={this.handleInputChange} />
                <a href="/" onClick={this.handleFormSubmit}>Submit</a>
            </div>
        )
    }
}

export default SearchBar;