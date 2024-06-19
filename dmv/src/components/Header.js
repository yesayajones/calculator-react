import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Header.css';

const Header = ({ isLoggedIn, setIsLoggedIn }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showFloatingMenu, setShowFloatingMenu] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowFloatingMenu(true);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleChangePassword = () => {
    navigate('/change-password');
    setShowDropdown(false);
    setShowFloatingMenu(false);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
    setShowDropdown(false);
    setShowFloatingMenu(false);
  };

  return (
    <header className="header">
      <header style={{ backgroundColor: '#F2F9F9', boxShadow: 'none' }} className="anonimHeaderBookingContainer">
      <div className="innerContainer">
          <div className="logoContainer">
            <Link to="/" className="logo">
              dmv
            </Link>
          </div>
          <div className="burgerMenuButton"></div>
          
          <div className="tabs">
            <Link to="/tests" className={`tab ${currentPath === '/' ? 'selectedTab' : ''}`}>
              PRACTICE TESTS
            </Link>
            <Link to="/statistics" className={`tab ${currentPath === '/statistics' ? 'selectedTab' : ''}`}>
              STATISTICS
            </Link>
            <Link to="/hand-book" className={`tab ${currentPath === '/hand-book' ? 'selectedTab' : ''}`}>
              HANDBOOK
            </Link>
          </div>
          <div className="buttons">
            <Link to="/login" className="loginButton">
              LOG IN
            </Link>
            <Link to="/signup" className="signUpButton">
              SIGN UP
            </Link>
          </div>
        </div>

      </header>
      {isLoggedIn ? (
        <LoggedInHeader
          showDropdown={showDropdown}
          handleDropdownToggle={handleDropdownToggle}
          handleChangePassword={handleChangePassword}
          handleLogout={handleLogout}
        />
      ) : null}
      {showFloatingMenu && isLoggedIn && (
        <div className="floating-menu">
          <div className="dropdown-item pointer" onClick={handleChangePassword}>
            Change Password
          </div>
          <div className="dropdown-item pointer" onClick={handleLogout}>
            Log Out
          </div>
        </div>
      )}
    </header>
  );
};

const LoggedInHeader = ({
  showDropdown,
  handleDropdownToggle,
  handleChangePassword,
  handleLogout,
}) => {
  return (
    <div className="right-content">
      <div className="stats-container">
        <div className="stats-block">
          <span className="block-title">Level</span>
          <span className="block-value">1</span>
        </div>
        <div className="stats-block">
          <span className="block-title">Points</span>
          <span className="block-value">0</span>
        </div>
        <div className="stats-block stats-block-borders">
          <span className="block-title">Lessons</span>
          <span className="block-value">0/47</span>
        </div>
      </div>
      <div className="settings-container">
        <img
          className="avatar"
          src="https://lh3.googleusercontent.com/a/ACg8ocLU-vI50ws-O_0kzrLSWuoig9pr25e5dR8OxZlcrCyPWH9oCqIH=s96-c"
          alt="Avatar"
          onMouseEnter={handleDropdownToggle}
          onMouseLeave={handleDropdownToggle}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="8"
          className="arrow-down"
        >
          <path d="M5.61562402,7.753367 L0.211099239,1.43686869 C-0.0703664131,1.10830527 -0.0703664131,0.575476992 0.211099239,0.246632997 C0.492564892,-0.0822109989 0.948385547,-0.0822109989 1.2298512,0.246632997 L6.125,5.96801347 L11.0201488,0.246632997 C11.3016145,-0.0822109989 11.7574351,-0.0822109989 12.0389008,0.246632997 C12.3203664,0.575476992 12.3203664,1.10830527 12.0389008,1.43686869 L6.63437598,7.753367 C6.49940696,7.91133558 6.31640625,8 6.125,8 C5.93359375,8 5.75059304,7.91133558 5.61562402,7.753367 Z" />
        </svg>
        {showDropdown && (
          <div className="dropdown-menu">
            <div className="dropdown-item" onClick={handleChangePassword}>
              Change Password
            </div>
            <div className="dropdown-item" onClick={handleLogout}>
              Log Out
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
