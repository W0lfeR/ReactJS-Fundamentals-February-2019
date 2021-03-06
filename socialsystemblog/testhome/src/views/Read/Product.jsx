import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { Redirect } from "react-router-dom";
import { remove } from "../../data/crud";
import "./Products.css";

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      isProductDeleted: false
    };

    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteConfirmation = () => {
    confirmAlert({
      title: "Confirm to submit",
      message: "Are you sure you want to permanently delete this product?",
      buttons: [
        {
          label: "Yes",
          onClick: () => this.deleteProduct()
        },
        {
          label: "No",
          onClick: () => { }
        }
      ]
    });
  };

  async deleteProduct() {
    const productId = this.props.id;
    if (this.props.isAdmin) {
      await remove(`product/${productId}`)
      this.setState({
        isProductDeleted: true
      });
      toast.success("Product deleted successfuly");
    }
  }

  render() {
    if (this.state.isProductDeleted) {
      return <Redirect to="/products" />;
    }

    return (
      <section className="products-display">
        <div className="brand-logo-url">
          <img src={this.props.logoUrl} alt="logo" />
        </div>
        <div className="description">
          {this.props.description.split("\n").map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
        <div className="btn-div">
          {this.props.isAdmin && (
            <Fragment><Link className="button-user" id="edit-btn" to={`/product/edit/${this.props.id}`}>
                Edit Product
              </Link>
              <button onClick={this.deleteConfirmation} className="button-user" id="delete-btn" >
                Delete Product
              </button>
            </Fragment>
          )}
        </div>
      </section>
    );
  }
}

export default Product;
