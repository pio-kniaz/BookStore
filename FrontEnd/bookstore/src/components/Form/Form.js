import React from 'react';

class Form extends React.Component {
	constructor(props) {
		super(props)
	}
	render() {
		const {
			changeValue,
			handleSubmit,
			title,
			description,
			image,
			rating
		} = this.props
		return (<div>
			<form onSubmit={handleSubmit}>
				<input type="text" name="title" placeholder="Title" required="required" value={title} onChange={changeValue}/>
				<input type="text" name="description" placeholder="Description" required="required" value={description} onChange={changeValue}/>
				<input type="text" name="image" placeholder="Put Your Image src here" required="required" value={image} onChange={changeValue}/>
				<input type="number" min='1' max='5' name="rating" placeholder="rating" required="required" value={rating} onChange={changeValue}/>
				<button className="add__book">Add Book</button>
			</form>
		</div>)
	}
}
export default Form;
