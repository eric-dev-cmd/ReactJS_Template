import "./App.css";
import "./Product.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Product from "./components/Product";
import Math from "./components/Math";
import { Component } from "react";

class App extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: "1. Điện thoại iPhone 12 Pro Max 128GB",
        price_new: 2000000,
        price_old: 1890000,
        sold: 2938,
        discount: 10,
        status: true ? "Active" : "Pending",
      },
      {
        id: 2,
        name: "2. Điện thoại iPhone 12 Pro Max 128GB",
        price_new: 3000000,
        price_old: 2890000,
        sold: 1138,
        discount: 50,
        status: true ? "Active" : "Pending",
      },
      {
        id: 3,
        name: "3. Điện thoại iPhone 12 Pro Max 128GB",
        price_new: 4000000,
        price_old: 5890000,
        sold: 7738,
        discount: 20,
        status: false ? "Active" : "Pending",
      },
    ];
    var elements = products.map((product, index) => {
      return (
        <div key="id">
          <h3>Name: {product.name}</h3>
          <h4>Price: {product.price_new}</h4>
          <h5>Status: {product.status}</h5>
        </div>
      );
    });
    return (
      <div>
        <Header></Header>
        <div className="container">
          {elements}
          <Math />
          <Product />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
