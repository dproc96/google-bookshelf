import React from 'react';
import CollectionResults from '../components/CollectionResults'


class Collection extends React.Component {
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
                <CollectionResults {...this.props} />
            </div>
        )
    }
}

export default Collection;