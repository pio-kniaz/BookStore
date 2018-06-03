import React from "react";
import axios from "axios";
import Books from "../../../components/Books/Books";
import Spinner from "../../../components/Spinner/Spinner";
import { Button, Icon, Modal } from "react-materialize";
class Biography extends React.Component {
  state = {
    books: [],
		loading: true
  };

  componentDidMount() {
    axios
      .get(
        `http://book-store.sknkonsultinguit.pl/backend/index.php/Books/books_api`
      )
      // axios.get(`http://localhost/BookStore/BackEnd/index.php/Books/books_api`)
      .then(response => {
        // console.log(response.data.books);
        this.setState({
          books: response.data.books.filter((elem)=>{
						return elem.category == "biography"
					}),
          loading: false
        });
      })
			.then(()=>{
				console.log(this.state);
			})
  }

  render() {
    return <div>
			<h1>Biography</h1>
			{this.state.loading? <Spinner/> :<Books data={this.state.books}
			/>}
		</div>;
  }
}

export default Biography;
