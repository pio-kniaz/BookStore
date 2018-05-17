import React from 'react';
import axios from 'axios'
class Builder extends React.Component {
	state={
		persons:[1,2,3]
	}
	componentDidMount(){
		axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
	.then(response => {
		console.log(response);
	})
	}
	render(){
		return(
			<div>
				<h1>Cos z Buildera</h1>
			</div>
		)
	}
}
export default Builder;
