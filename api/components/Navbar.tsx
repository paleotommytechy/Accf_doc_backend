import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const menuStyle: React.CSSProperties = {
    backgroundColor: hover || sidebarOpen ? 'orange' : 'violet',
    borderRadius: '50%',
    width: '45px',
    height: '45px',
    padding: '10px',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-transparent position-absolute top-0 w-100 z-3 py-3 px-3">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link className="navbar-brand text-white logo-jilem" to="/">JILEM</Link>
          
          <button
            style={menuStyle}
            className="d-lg-none"
            onClick={toggleSidebar}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
          >
            <i className="bi bi-list fs-4"></i>
          </button>

          <div className="d-none d-lg-flex">
            <ul className="navbar-nav ms-auto d-flex flex-row align-items-center gap-3">
              <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/pages">Pages</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sermons">Sermons</Link></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
              <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-instagram"></i></a></li>
              <li className="nav-item"><button className="btn btn-outline-warning ms-2">Give!</button></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar for Mobile */}
      {sidebarOpen && (
        <div className="mobile-sidebar position-fixed top-0 end-0 bg-white vh-100 p-4 shadow z-3" style={{ width: '260px' }}>
          <button className="btn btn-link text-dark position-absolute top-0 end-0 m-3" onClick={toggleSidebar}>
            <i className="bi bi-x-circle-fill fs-4"></i>
          </button>
          <ul className="navbar-nav mt-5">
            <li className="nav-item"><Link className="nav-link" to="/" onClick={toggleSidebar}>Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/pages" onClick={toggleSidebar}>Pages</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sermons" onClick={toggleSidebar}>Sermons</Link></li>
            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-facebook"></i></a></li>
            <li className="nav-item"><a className="nav-link" href="#"><i className="bi bi-instagram"></i></a></li>
            <li className="nav-item"><button className="btn btn-outline-warning mt-3">Give!</button></li>
          </ul>
        </div>
      )}

      {/* Banner Section */}
      <header
        className="d-flex align-items-center text-white"
        style={{
          backgroundImage: `url('/src/assets/banner.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '75vh',
          maxHeight: '400px',
          position: 'relative',
          borderBottomLeftRadius: '20px',
          borderBottomRightRadius: '20px',
        }}
      >
        <div className="container mymt">
          <h1 className="display-4 fw-bold mt-6">Latest Sermons</h1>
          <p>
            <Link to="/" className="text-white fw-bold text-decoration-none fs-6">HOME </Link>&nbsp;&nbsp;|&nbsp;&nbsp; <span className="fw-bold"> SERMONS</span>
          </p>
        </div>
      </header>
    </>
  );
};

export default Navbar;