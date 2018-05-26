import React from 'react';
import { Navbar, NavItem,Modal,Button } from 'react-materialize';
import "./Header.css"
const Header = (props)=>{
	return(
		<Navbar
			className="navbar"
			href='false'
			brand='Book Store App' left fixed>
		  <NavItem
				className="navbar__about"
				href="false"
				>
				<Modal
				  header='Book Store Application'
				  bottomSheet
				  trigger={<Button
						className="navbar__btn btn__action"
						>About Application</Button>}>
						An application, which would help me to manage all the books,that i have already read.
				</Modal>
			</NavItem>
		</Navbar>
	)
}

export default Header;
