import React, { Component } from 'react';

class CounterClass extends Component {
    state={
        count:0
    }
    Decrement=()=>{
        this.setState({count:this.state.count-1})
    }
    Increment=()=>{
        this.setState({count:this.state.count+1})
    }
    componentDidMount(){
        setInterval(()=>this.Increment(),1000)
    }
    render() {
        return (
            <div>
                <button onClick={this.Decrement}>-</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.Increment}>+</button>
            </div>
        );
    }
}

export default CounterClass;
