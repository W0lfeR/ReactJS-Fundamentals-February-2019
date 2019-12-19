import React, { Component } from "react";
import { get } from "../../data/crud"
import Product from "./Product";
import "./Products.css";


class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      category: "",
      products: []
    };

    this.handleClick = this.handleClick.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.preferredLocale !== prevState.language) {
      return { language: nextProps.preferredLocale };
    } else return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.preferredLocale !== this.props.preferredLocale) {
      this.setState({ language: this.props.preferredLocale });
    }
  }

  async handleClick(e) {
    let chosenCategory = e.target.name;
    let products = await get(`product/${chosenCategory}/${this.state.language}`);
    this.setState({
      products: products,
      category: chosenCategory
    })

  }

  render() {
    return (
        <section className="products-section">
          <section className="product-selector">
            <ul>
              <li>
                <button name="cars" onClick={this.handleClick}>
               cars
                </button>
              </li>
              <li>
                <button name="food" onClick={this.handleClick}>
                   food
                </button>
              </li>
              <li>
                <button name="politics" onClick={this.handleClick}>
                politics
                </button>
              </li>
            </ul>
          </section>
          <section>
            {this.state.products.map(product => (
              <Product
                key={product._id}
                logoUrl={product.logoUrl}
                manufacturer={product.manufacturer}
                description={product.description}
                catalogueUrl={product.catalogueUrl}
                brandWebSite={product.brandWebSite}
                id={product._id}
                isAdmin={this.props.isAdmin}
              />
            ))}
          </section>
        </section>
      );
    }
  }

  export default Products;

