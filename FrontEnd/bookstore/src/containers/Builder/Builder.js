import React from "react";
import BooksBuilder from "./BooksBuilder/BooksBuilder";
import SelfDev from "./SelfDev/SelfDev";
import Thriller from "./Thriller/Thriller";
import Biography from "./Biography/Biography";
import Header from "../../components/Header/Header";
import { Route } from "react-router-dom";
class Builder extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={BooksBuilder} />
        <Route path="/thriller" exact component={Thriller} />
        <Route path="/selfDev" exact component={SelfDev} />
        <Route path="/biography" exact component={Biography} />
      </div>
    );
  }
}
export default Builder;
