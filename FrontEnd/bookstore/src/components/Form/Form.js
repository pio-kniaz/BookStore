import React from "react";
import { Button, Icon, Modal, Input } from "react-materialize";
import "./Form.css";
class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      changeValue,
      handleSubmit,
      title,
      description,
      image,
      rating,
      category
    } = this.props;
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            required="required"
            value={title}
            onChange={changeValue}
          />
          <Input s={12} name="category" type="select" label="Category"
             required>
            <option  value="thriller">thriller</option>
            <option value="self-development">self-development</option>
            <option value="biography">biography</option>
          </Input>
          <input
            type="text"
            name="description"
            placeholder="Description"
            required="required"
            value={description}
            onChange={changeValue}
          />
          <input
            type="text"
            name="image"
            placeholder="Put Your Image src here"
            required="required"
            value={image}
            onChange={changeValue}
          />
          <input
            type="number"
            min="1"
            max="5"
            name="rating"
            placeholder="rating (Only Number)"
            required="required"
            value={rating}
            onChange={changeValue}
          />
          <button className="add__book">Add Book</button>
        </form>
      </div>
    );
  }
}
export default Form;
