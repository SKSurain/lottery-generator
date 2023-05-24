import React from 'react'
import Balls from './Balls'
import './Lottery.css'

class Lottery extends React.Component {

    static defaultProps = {
        title: 'Lottery',
        numBalls: 8,
        maxNumber: 40
    }
    constructor(props) {
        super(props)
        this.state = {
            lottoNumbers: Array.from({ length: this.props.numBalls })
        }
        this.randomNumber = this.randomNumber.bind(this);
    }

    generate() {
        this.setState(currentState => ({
            lottoNumbers: currentState.lottoNumbers.map(
                n => Math.floor(Math.random() * this.props.maxNumber) + 1
            )
        }))
    }

    randomNumber() {
        this.generate()
    }

    render() {
        return (
            <section>
                <h1 className='Lottery-header'>LOTTERY</h1>
                <div className='Lottery-numbers'>
                    {this.state.lottoNumbers.map(
                        lotto => <Balls lotto={lotto} />
                    )}

                </div>
                <button className='Lottery-button' onClick={this.randomNumber}>GENERATE</button>
            </section>

        )
    }
}

export default Lottery; 