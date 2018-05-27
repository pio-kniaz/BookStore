import React from "react";
import { Navbar, Modal, Button } from "react-materialize";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = props => {
  return (
    <Navbar className="navbar" href="/" brand="Book Store App" left fixed>
      <li className="navbar__aboutt">
        <Modal
          header="Book Store Application"
          bottomSheet
          trigger={
            <Button className="navbar__btn btn__action">
              About Application
            </Button>
          }
        >
          An application, which would help me to manage all the books,that i
          have already read.
        </Modal>
      </li>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/films">Films</Link>
      </li>
    </Navbar>
  );
};

export default Header;
