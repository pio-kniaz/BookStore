import React from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Books from '../../components/Books/Books';
import { Button, Card, Row, Col } from 'react-materialize';
class Builder extends React.Component {
	constructor(props){
		super(props)
		this.state={
			books:[]
		}
	}
	componentDidMount(){
		axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
	.then(response => {
		console.log(response.data.books);
		this.setState({
			books:response.data.books
		})
	})
	}
	deleteHandler =(itemToDelete) =>{
		axios.delete(`http://localhost/BookStore/BackEnd/index.php/Books/delete/${itemToDelete.id}`)
	.then(response => {
		console.log(response.data.books);
		let newsBooks = this.state.books.filter((elem)=>{
			return elem!==itemToDelete;
		})
		this.setState({
			books:newsBooks
		})
	})

	}
	render(){
		return(
			<div>
				<Header/>
				<Books
					 data={this.state.books}
					 deleteHandler={this.deleteHandler}

				/>
			</div>
		)
	}
}
export default Builder;
