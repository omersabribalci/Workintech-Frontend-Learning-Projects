import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

function Header() {
  const { isLoggedIn, logOut } = useContext(AuthContext);

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {isLoggedIn ? (
            <>
              <Link to="/friends">
                <button>FRIENDS LIST</button>
              </Link>
              <Link to="/friends/add">
                <button>ADD FRIEND</button>
              </Link>
              <button
                onClick={() => {
                  logOut();
                }}
              >
                LOGOUT
              </button>
            </>
          ) : (
            <Link to="/login">
              <button>LOGIN</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
