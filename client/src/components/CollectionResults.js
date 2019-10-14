import React from 'react';


class CollectionResults extends React.Component {
    render() {
        const style = {
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start"
        }
        const mobileStyle = {
            ...style,
            justifyContent: "space-around"
        }
        return (
            <div style={this.props.isDesktop ? style : mobileStyle}>
                {this.props.collection}
            </div>
        )
    }
}

export default CollectionResults;