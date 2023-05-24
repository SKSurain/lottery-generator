import React from 'react'
import './Balls.css'

class Balls extends React.Component {
    static defaultProps = {
        lotto: 0
    }
    render() {
        return (
            <div className='Balls'>
                {this.props.lotto}
            </div>
        )
    }
}

export default Balls; 