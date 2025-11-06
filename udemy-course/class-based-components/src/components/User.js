import { Component } from 'react';

import classes from './User.module.css';

// class-based component version
// class-based components CAN work together with functional components
class User extends Component {
  componentWillUnmount(){
    console.log('User will unmount!');
  }

  render(){
    return <li className={classes.user}>{this.props.name}</li>;
  } //render is a specific method expected by React, which React will call when it finds a component being used in JSX.
}

// functional component version
/* const User = (props) => {
  return <li className={classes.user}>{props.name}</li>;
}; */

export default User;
