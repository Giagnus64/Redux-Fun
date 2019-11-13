import React, { Component } from 'react';
import { connect } from 'react-redux';


class Counter extends Component{

    render(){
        return(
        <div>
            <button onClick={this.props.deposit}>Deposit $10</button>
            <button onClick={this.props.withdraw}>Withdraw $10</button>
            <p>Balance:{this.props.balance}</p>
        </div>
        )
    }
}

//---------------REACT----------------
//---------------REDUX----------------

const mapStateToProps = (state, props) => {
  return {
    balance: state.balance
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    withdraw: () => dispatch({type:'WITHDRAW', amount: 10}),
    deposit: () => dispatch({type: 'DEPOSIT', amount: 10}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);