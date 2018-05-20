import React from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Books from '../../components/Books/Books';
import Form from "../../components/Form/Form";
import { Button, Card, Row, Col } from 'react-materialize';
class Builder extends React.Component {
	constructor(props){
		super(props)
		this.state={
			books:[],
			title:'',
			image:'',
			rating:'',
			description:'',
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
	handeSubmit =()=>{
		alert(this.state.title)
	}

	onChange = (e) =>{
		this.setState({
			[e.target.name]:e.target.value})
	}

	//
	handleSubmit=(event) =>{
     event.preventDefault();
     const data = new FormData(event.target);
     fetch('http://localhost/BookStore/BackEnd/index.php/Books/create', {
       method: 'POST',
       body: data,
     }).then(()=>{

			 	 setTimeout( ()=> {
			 		 axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
			 		 .then(response => {
			 			 console.log(response.data.books);
			 			 this.setState({
			 				 books:response.data.books,
			 			 })
			 	 }, 2000);
			 })
		 })
   }
	//

	// addHandler=(e)=>{
	// 	e.preventDefault();
	// 	axios.post('http://localhost/BookStore/BackEnd/index.php/Books/create', {
  //   headers: { title: "Bearer " }})
	// 	.then((response)=>{
	// 		console.log(response);
	// 	})
	// 	.catch(error => console.log(error))
	// }

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
				<div style={{
					width:'400px',
					margin:'auto'
				}}>

				<form onSubmit={this.handleSubmit}>
					<input type="text" name="title" value={this.state.title} onChange={this.onChange}/>
					<input type="text" name="description" value={this.state.description} onChange={this.onChange}/>
					<input type="text" name="image" value={this.state.image} onChange={this.onChange}/>
					<input type="text" name="rating" value={this.state.rating} onChange={this.onChange}/>
					<button>Send data!</button>
				</form>
			</div>

			</div>
		)
	}
}
export default Builder;
