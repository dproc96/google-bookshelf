import React from 'react';
import CollectionResults from '../components/CollectionResults'


class Collection extends React.Component {
    render() {
        const style = {
            width: 'Calc(100vw - 200px)',
            overflow: "scroll",
            height: '100vh'
        }
        return (
            <div style={style}>
                <CollectionResults collection={this.props.collection} />
            </div>
        )
    }
}

export default Collection;