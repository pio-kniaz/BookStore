import React from 'react';
import "./Books.css"
import Book from "./Book/Book"
import { Button, Card,CardTitle, Row, Col,Modal,Icon , T} from 'react-materialize';
class Books extends React.Component{
	constructor(props) {
		super(props)
	}
	render(){
		const {data}=this.props
		console.log('[Books Component-->]',data);
		const booksList = data.map((elem,index)=>{
			return(
				<Col
					l={4}
					m={6}
					s={12}
					 className='grid-example'
					>
						<Card
							actions={	<Button	onClick={this.props.deleteHandler.bind(this,elem)}
						 	className='blue cardd' waves='light' icon='delete'
							tooltip="Usun Wybrana ksiazke"
						 />}
							key={index}
							header={<CardTitle reveal
							image={elem.image}
							waves='light'/>}
							title={elem.title}
							reveal={<b>{elem.description}</b>}
							>

								 {/* <p><a href="#">This is a link</a></p> */}
							</Card>
				</Col>
				//
				// <div
				// 	key={index}
				// 	 className="card col-lg-4 sm-12">
				// 	 <div className="card">
				// 			<div className="card-image waves-effect waves-block waves-light">
				// 				<img className="activator" src={elem.image}/>
				// 			</div>
				// 			<div className="card-content">
				// 				<span className="card-title activator grey-text text-darken-4">{elem.title} <i className="material-icons right">more_vert</i></span>
				// 				{/* <p><a href="#">This is a link</a></p> */}
				// 				{elem.name}
				// 			</div>
				// 			<div className="card-reveal">
				// 				<span className="card-title grey-text text-darken-4">Card Title <i className="material-icons right">close</i></span>
				// 				<p>{elem.description}</p>
				// 					<button onClick={this.props.deleteHandler.bind(this,elem)}>Usun</button>
				// 			</div>
				// 		</div>
				// 	</div>
			)
		})
		return(
			<div className="container">
				<Row>
					<Book data={booksList}/>
			</Row>
			</div>
		)
	}
}
export default Books;
