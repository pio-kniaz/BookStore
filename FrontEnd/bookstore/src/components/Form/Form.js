import React from 'react';

class Form extends React.Component {
	// constructor(props) {
	// 	super(props)
	// }
	render(){
		return(
			<div>
				<form onSubmit={this.props.handleSubmit}>
					<input type="text" name="title" placeholder="Title" required value={this.state.title} onChange={this.onChange}/>
					<input type="text" name="description" placeholder="Description" required value={this.state.description} onChange={this.onChange}/>
					<input type="text" name="image" placeholder="Put Your Image src here" required value={this.state.image} onChange={this.onChange}/>
					<input type="number" min='1' max='5' name="rating" placeholder="rating" required value={this.state.rating} onChange={this.onChange}/>
					<button className="add__book">Add Book</button>
				</form>
			</div>
		)
	}
}
export default Form;
