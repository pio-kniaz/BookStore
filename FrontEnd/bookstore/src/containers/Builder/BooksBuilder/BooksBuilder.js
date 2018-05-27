import React from 'react';
import axios from 'axios';
// import Header from "../../../components/Header/Header";
import Books from '../../../components/Books/Books';
import Form from "../../../components/Form/Form";
import { Button, Icon,Modal} from 'react-materialize';
import "./BooksBuilder.css"
class BooksBuilder extends React.Component {
	constructor(props){
		super(props)
		this.state={
			books:[],
			title:'',
			image:'',
			rating:'',
			description:'',
			modalOpen:false
		}
	}
	componentDidMount(){
		axios.get(`http://book-store.sknkonsultinguit.pl/backend/index.php/Books/books_api`)
		// axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
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
     fetch('http://book-store.sknkonsultinguit.pl/backend/index.php/Books/create', {
       method: 'POST',
       body: data,
     }).then(()=>{

			 	 setTimeout( ()=> {
			 		 axios.get(`http://book-store.sknkonsultinguit.pl/backend/index.php/Books/books_api`)
			 		 .then(response => {
			 			 console.log(response.data.books);
			 			 this.setState({
			 				 books:response.data.books,
							 title:'',
							 description:'',
							 image:'',
							 rating:'',
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
		axios.delete(`http://book-store.sknkonsultinguit.pl/backend/index.php/Books/delete/${itemToDelete.id}`)
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
				{/* <Header/> */}
					<Modal
						// open={true}
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
						<Form handleSubmit={this.handleSubmit}
							title={this.state.title}
							description={this.state.description}
							image={this.state.image}
							rating={this.state.rating}
							changeValue ={this.onChange}
						/>
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
export default BooksBuilder;
