import React from 'react';
import "./Books.css"
import Book from "./Book/Book"
import { Button, Card, Row, Col} from 'react-materialize';
import ReactStars from 'react-stars';
class Books extends React.Component{
	render(){
		const {data}=this.props
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
							actions={this.props.delOption ? <Button
							onClick={this.props.deleteHandler.bind(this,elem)}
						 	className='blue cardd' waves='light' icon='delete'
							tooltip="Usun Wybrana ksiazke"
						/>:null}
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
									<div>
										<h5>Category</h5>
										<b>{elem.category}</b>
									</div>
									<span
										className="rating"
										>{elem.rating}</span>
										<ReactStars
											className="stars"
											edit={false}
										  count={5}
											value={elem.rating*1}
										  size={37}
										  color2={'#ffd700'} />
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
