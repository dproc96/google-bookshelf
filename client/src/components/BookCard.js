import React from 'react';

class BookCard extends React.Component {
    state = {
        hovered: false
    }
    onHover = () => {
        this.setState({ hovered: true });
    }
    onHoverEnd = () => {
        this.setState({ hovered: false });
    }
    handleClick = () => {
        // this.props.handleClick(this.props.id)
        const contents = this.generateJSX();
        this.props.alterModal(contents)
        this.props.handleOpenModal();
    }
    generateJSX = () => {
        const book = this.props.book;
        return (
            <div>
                <h2>{book.title}</h2>
                <h3>By {book.authors}</h3>
                <p>{book.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={book.url}>See More</a>
                {this.props.inCollection ? <button>Remove from Collection</button> : <button>Add to Collection</button>}
            </div>
        )
    }
    render() {
        const style = {
            width: this.state.hovered ? "150px" : "140px",
            height: this.state.hovered ? "225px" : "210px",
            margin: this.state.hovered ? "2.5px 5px" : "10px",
            border: "1px #bbbbbb solid",
            boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.4)",
            borderRadius: "3px",
            cursor: this.state.hovered ? "pointer" : "auto",
            overflow: "hidden"
        }
        const book = this.props.book;
        return (
            <div style={style} onClick={this.handleClick} onMouseOver={this.onHover} onMouseOut={this.onHoverEnd}>
                <img style={{ width: '100%' }} alt={book.title} src={book.img} />
            </div>
        )
    }
}

export default BookCard;