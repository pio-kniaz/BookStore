import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props)
	}
	render(){
		return(
			<div style={{
					width:'400px',
					margin:'auto'
				}}>
						<form onSubmit={this.props.addHandler.bind(this)}>
							<input type="text" name="title" value="vadsd"/>
							<input type="text" name="description" value="description"/>
							<input type="text" name="image" value="dasdas"/>
							<input type="text" name="rating" value="dasdas"/>
							<button type="submit">Dodaj</button>
						</form>

			</div>
		)
	}
}
export default Form;
