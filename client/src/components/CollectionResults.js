import React from 'react';


class CollectionResults extends React.Component {
    render() {
        const style = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
        }
        return (
            <div style={style}>
                {this.props.collection}
            </div>
        )
    }
}

export default CollectionResults;