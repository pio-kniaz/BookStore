import React from 'react';
import "./Book.css"
class Book extends React.Component{
	render(){
		// const {data}=this.props
		console.log('[Book Component-->]',this.props.data);
		return(
			<div className="Book Book-container">
				{this.props.data}
			</div>
		)
	}
}
export default Book;
