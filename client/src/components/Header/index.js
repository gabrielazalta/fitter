import React from 'react';
import Auth from '../../utils/auth';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
} from './HeaderElements';

const Header = () => {

  const logout = event => {
    //overriding the <a> element's default nature of having the browser load a different resource.
    event.preventDefault();
    Auth.logout();
  };

  return (
    <>
      <Nav>
        <NavLink to="/" style={{backgroundColor: "#91c788"}}>
          <img className="ml-3 mt-3 pt-3" src={require('../../../src/assets/logo.svg')} alt="FITTER" height="80px" />
        </NavLink>
        <Bars />
          <NavMenu>
              <div>
                {Auth.loggedIn() ? (
                  <>
                    <NavLink className="nav-link mr-3" to="/profile" activeStyle>Profile</NavLink>
                      <a className="nav-link mr-3" href="/"  onClick={logout} activeStyle>Logout</a>
                    <NavLink className="nav-link mr-3 pb-3" to="/quiz" activeStyle>Weekely Goal Quiz</NavLink>
                  </>
                ) : (
                  <>
                    <NavLink className="nav-link mr-3" to="/login" activeStyle>Login</NavLink>
                    <NavLink className="nav-link mr-3" to="/signup" activeStyle>Signup</NavLink>
                  </>
                )}
              </div>
          </NavMenu>
      </Nav>
    </>
  );
};


export default Header;
