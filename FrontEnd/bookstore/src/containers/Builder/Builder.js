import React from 'react';
import axios from 'axios';
import Header from "../../components/Header/Header";
import Books from '../../components/Books/Books';
import Form from "../../components/Form/Form";
import { Button, Card, Row, Col,Icon,Modal} from 'react-materialize';
import "./Builder.css"
class Builder extends React.Component {
	constructor(props){
		super(props)
		this.state={
			books:[],
			title:'',
			image:'',
			rating:'',
			description:'',
			modalOpen:""
		}
	}
	componentDidMount(){
		axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
	.then(response => {
		// console.log(response.data.books);
		this.setState({
			books:response.data.books
		})
	})
	}
	handeSubmit =()=>{
		// alert(this.state.title)
		alert('test')
	}

	onChange = (e) =>{
		this.setState({
			modalOpen:true,
			[e.target.name]:e.target.value}	)
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
							 title:'',
							 image:'',
							 rating:'',
							 description:'',
			 			 })
			 	 }, 2000)
				 .then(()=>{
					 this.setState({
						 modalOpen:false
					 })
				 })
			 })
		 })
   }

	deleteHandler =(itemToDelete) =>{
		axios.delete(`http://localhost/BookStore/BackEnd/index.php/Books/delete/${itemToDelete.id}`)
	.then(response => {
		// console.log(response.data.books);
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
				<Modal
					open={this.state.modalOpen}
				  header='Add Book'
				  trigger={<Button
						className="btn__add"
						style={{
							marginTop:'10px',
							marginBottom:'15px'
						}}
						onClick={this.handeSubmit}
						waves='light'>ADD Book<Icon right>add_box</Icon></Button>}>
					<form onSubmit={this.handleSubmit}>
						<input type="text" name="title" placeholder="Title" required value={this.state.title} onChange={this.onChange}/>
						<input type="text" name="description" placeholder="Description" required value={this.state.description} onChange={this.onChange}/>
						<input type="text" name="image" placeholder="Put Your Image src here" required value={this.state.image} onChange={this.onChange}/>
						<input type="text" name="rating" placeholder="rating" required value={this.state.rating} onChange={this.onChange}/>
						<button>Send data!</button>
					</form>
				</Modal>
				<Books
					 data={this.state.books}
					 deleteHandler={this.deleteHandler}
				/>
				<div style={{
					width:'400px',
					margin:'auto'
				}}>
			</div>

			</div>
		)
	}
}
export default Builder;
