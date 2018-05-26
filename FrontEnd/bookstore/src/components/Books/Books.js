import React from 'react';
import "./Books.css"
import Book from "./Book/Book"
import { Button, Card, Row, Col} from 'react-materialize';
class Books extends React.Component{
	render(){
		const {data}=this.props
		console.log('[Books Component-->]',data);
		const booksList = data.map((elem,index)=>{
			return(
				<Col
					key={index}
					l={6}
					m={6}
					s={12}
					 className='grid-example'
					>
						<Card
							actions={	<Button
							onClick={this.props.deleteHandler.bind(this,elem)}
						 	className='blue cardd' waves='light' icon='delete'
							tooltip="Usun Wybrana ksiazke"
						 />}
						 	style={{
								backgroundImage: `url(${elem.image})`
							}}
							key={index}
							header={<div
							waves='light'/>}
							title={elem.title}
							reveal={
								<div>
									<b>{elem.description}</b>
									<span
										className="rating"
										>{elem.rating}</span>
								</div>
							}
							>
							</Card>
				</Col>
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
