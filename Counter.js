import React, {Component} from 'react'
import {connect} from 'react-redux'

class Counter extends Component{

    constructor() {
        super()
    }




render() {
    return (

        <div>
            <h1></h1>
            <button onClick= {() => this.props.onIncrementCounter()}> Increment</button>
            <button onClick= { () => this.props.onDecrementCounter()}> Decrement</button>
            <button onClick= { () => this.props.onAddCounter()}> +5 </button>
        </div>

    )
}

}

//map global state to props

const mapStateToProps = (state) => {
    return{
        ctr:state.counter //this.props.ctr
    }
}


const mapDispatchToProps = (dispatch) => {
    return{

        onIncrementCounter: () => dispatch({type:'INC-COUNTER'}),
        onDecrementCounter:() => dispatch({type: 'DEC_COUNTER'}),
        onAddCounter: () => dispatch({type:'ADD_COUNTER', value:5})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)