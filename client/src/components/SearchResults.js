import React from 'react';
import BookCard from './BookCard';

class SearchResults extends React.Component {
    render() {
        const results = this.props.results.map(book => {
            book = {
                title: book.volumeInfo.title,
                authors: book.volumeInfo.authors.join(", "),
                description: book.volumeInfo.description,
                url: book.volumeInfo.infoLink,
                img: book.volumeInfo.imageLinks.thumbnail
            }
            return (
                <BookCard inCollection={false} alterModal={this.props.alterModal} handleOpenModal={this.props.handleOpenModal} book={book} key={book.id} />
            )
        });
        const style = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }
        return (
            <div style={style}>
                {results}
            </div>
        )
    }
}

export default SearchResults;