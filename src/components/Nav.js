import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    const { user, myUser } = this.props;
    const avatar = user ? user.avatarURL : "placeholder.png";
    const name = user ? user.name : "";
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/dashboard" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/add" exact activeClassName="active">
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard" exact activeClassName="active">
              Leader Board
            </NavLink>
          </li>
          {myUser && (
            <li className="user-info">
              <NavLink to="/" exact activeClassName="active">
                <div className="nav-user">
                  <span>Hello {name}</span>
                  <img
                    src={avatar}
                    alt={`Avatar of ${myUser}`}
                    className="nav-avatar"
                  />
                  <span>Logout</span>
                </div>
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ myUser, users }, props) {
  return {
    myUser,
    users,
    user: users[myUser]
  };
}
export default connect(mapStateToProps)(Nav);
