import React from "react";
import BooksBuilder from "./BooksBuilder/BooksBuilder";
import FilmsBuilder from "./FilmsBuilder/FilmsBuilder";
import Header from "../../components/Header/Header";
import { Route } from "react-router-dom";
class Builder extends React.Component {
  render() {
    return (
      <div>
        <Header />
				<Route
				path="/" exact component={BooksBuilder}
				/>
				<Route
				path="/films" exact component={FilmsBuilder}
				/>
      </div>
    );
  }
}
export default Builder;
