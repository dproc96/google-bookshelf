import React from 'react';


class Collection extends React.Component {
    render() {
        const style = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around"
        }
        return (
            <div style={style}>
                {this.props.collection}
            </div>
        )
    }
}

export default Collection;