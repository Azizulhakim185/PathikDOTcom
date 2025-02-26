import React, { useRef, useEffect } from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./header.css";

const nav_links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/tours",
    display: "Tours",
  },
];

const Header = () => {
  const headerRef = useRef(null);

  const stickyHeaderFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add("sticky_header");
    } else {
      headerRef.current.classList.remove("sticky_header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", stickyHeaderFunc);

    return () => {
      window.removeEventListener("scroll", stickyHeaderFunc);
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/*========== Logo ==========*/}
            <div className="logo">
              <img src={logo} alt="Logo" />
            </div>
            {/*========== Menu ==========*/}
            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5">
                {nav_links.map((NavItem, index) => (
                  <li className="nav_item" key={index}>
                    <NavLink
                      to={NavItem.path}
                      className={(navClass) => (navClass.isActive ? "active_link" : "")}
                    >
                      {NavItem.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
            {/*========== Right Section ==========*/}
            <div className="nav_right d-flex align-items-center gap-4">
              <div className="nav_btns d-flex align-items-center gap-4">
                <Button className="btn secondary_btn login_btn">
                  <Link to="/login">Login</Link>
                </Button>
                <Button className="btn yellow_btn">
                  <Link to="/register">Register</Link>
                </Button>
              </div>
              <span className="mobile_menu"></span>
              <i className="ri-menu-line"></i>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
