import React, { Component } from 'react';

class Counter extends Component {

/*    handleDecrement = () => {
        this.setState({value : this.state.value - 1});
    };
*/
    render() { 
        return (
            <React.Fragment>
                
                <p> </p>
                <span className = { this.getBadgeClass() }> { this.formatCount() } </span>
                              
                <button onClick =  { () => this.props.onIncrement(this.props.counter) }
                        className = "btn btn-secondary btn-sm"> Increment </button>

                <button onClick =  { () => this.props.onDecrement(this.props.counter) }
                        className = "btn btn-danger btn-sm m-2"> Decrement </button>

                <button onClick =  { () => this.props.onDelete(this.props.counter.id) }
                        className = "btn btn-danger btn-sm m-2"> Delete </button>
            
            </React.Fragment>
        );
    };
    

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }
};
 
export default Counter;