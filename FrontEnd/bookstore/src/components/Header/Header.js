import React from 'react';
import { Navbar, NavItem,Modal,Button } from 'react-materialize';
import "./Header.css"
const Header = (props)=>{
	return(
		<Navbar
			className="navbar"
			href='/'
			brand='Book Store App' left fixed>
		  <li
				className="navbar__about"
				// href="/"
				>
				<Modal
				  header='Book Store Application'
				  bottomSheet
				  trigger={<Button
						className="navbar__btn btn__action"
						>About Application</Button>}>
						An application, which would help me to manage all the books,that i have already read.
				</Modal>
			</li>
		</Navbar>
	)
}

export default Header;
