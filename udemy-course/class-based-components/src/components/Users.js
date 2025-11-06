import { Component } from "react";

import User from "./User";
import classes from "./Users.module.css";

class Users extends Component {
  constructor() {
    super();
    this.state = {
      showUsers: true,
    };
  }

  componentDidUpdate() {
    if (this.props.users.length === 0) {
      throw new Error("No users provided!");
    }
  }

  toggleUsersHandler() {
    this.setState((currentState) => {
      return { showUsers: !currentState.showUsers };
    }); // this object now contains the new state, but it WON'T override the old state,
    // but insted React will, behind the scenes, merge the object with the existing state.
  }

  render() {
    const usersList = (
      <ul>
        {this.props.users.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
      </ul>
    );

    return (
      <div className={classes.users}>
        {/* Need to make sure, that the this keyword, inside the method, refers to the surrounding class
            It wouldnt by default 
            One fix to this is the .bind(this) 
            With the bind, the this is now set to have the same context or the same value*/}
        <button onClick={this.toggleUsersHandler.bind(this)}>
          {this.state.showUsers ? "Hide" : "Show"} Users
        </button>
        {this.state.showUsers && usersList}
      </div>
    );
  }
}

/* const Users = () => {
  const [showUsers, setShowUsers] = useState(true); //useState is always overrideing the old state

  const toggleUsersHandler = () => {
    setShowUsers((curState) => !curState);
  };

  const usersList = (
    <ul>
      {DUMMY_USERS.map((user) => (
        <User key={user.id} name={user.name} />
      ))}
    </ul>
  );

  return (
    <div className={classes.users}>
      <button onClick={toggleUsersHandler}>
        {showUsers ? "Hide" : "Show"} Users
      </button>
      {showUsers && usersList}
    </div>
  );
}; */

export default Users;
