import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
    handleInputChange = this.props.handleInputChange.bind(this);
    handleFormSubmit = this.props.handleFormSubmit.bind(this);
    render() {
        return (
            <div>
                <input value={this.props.search} name="search" type="text" onChange={this.handleInputChange} />
                <Link to="/" onClick={this.handleFormSubmit}>Submit</Link>
            </div>
        )
    }
}

export default SearchBar;