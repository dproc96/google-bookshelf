import React from 'react';
import BookCard from './BookCard';

class SearchResults extends React.Component {
    render() {
        const results = this.props.results.sort((a, b) => { return b.volumeInfo.ratingsCount - a.volumeInfo.ratingsCount }).map(bookObj => {
            let book = {
                title: bookObj.volumeInfo.title,
                authors: bookObj.volumeInfo.authors,
                description: bookObj.volumeInfo.description,
                url: bookObj.volumeInfo.infoLink,
            }
            if (book.description) {
                if (book.description.length > 500) {
                    book.description = book.description.slice(0, 501) + "..."
                }
            }
            try {
                book.img = bookObj.volumeInfo.imageLinks.thumbnail
            }
            catch {
                book.img = `https://via.placeholder.com/100x150?text=${book.title}`
            }
            return (
                <BookCard inCollection={false} alterModal={this.props.alterModal} handleOpenModal={this.props.handleOpenModal} handleCloseModal={this.props.handleCloseModal} book={book} key={book.id} />
            )
        });
        const style = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
        }
        return (
            <div style={style}>
                {results}
            </div>
        )
    }
}

export default SearchResults;