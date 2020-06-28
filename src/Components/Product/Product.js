import React, { Component } from 'react'
// import Link from "react-router-dom";
// import styled from "styled-components";
import "./Product.css";

//----------------------------------------------------------------------------//

export default class Product extends Component {
    state = {
        loading: true,
        products: {}
        // product: storeProduct
    }

    async componentDidMount() {
        let response = await fetch(`http://localhost:1337/products/${this.props.match.params.id}`)
        
        let data = await response.json()
        
        this.setState({
            loading: false,
            product : data
        })

    }

    render() {
        
        if (!this.state.loading) {
            return (
                
                <div className="container">
                    <div className="container-fluid">
                    <div className="wrapper row">
                        <div className="preview col-md-6">
                            {/* //----------------Image Tab------------------------------------------------------------------- */}
                            <div className="preview-pic tab-content">
                                <div className="tab-pane active" id="pic-1"><img src={`http://localhost:1337${this.state.product.image[0].formats.small.url}`} alt="pic1" href="0"/></div>
                                <div className="tab-pane" id="pic-2"><img src={`http://localhost:1337${this.state.product.image[1].formats.small.url}`} alt="pic2" /></div>
                                <div className="tab-pane" id="pic-3"><img src={`http://localhost:1337${this.state.product.image[2].formats.small.url}`} alt="pic3" /></div>
                            </div>
                            <ul className="preview-thumbnail nav nav-tabs">
                                <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={`http://localhost:1337${this.state.product.image[0].formats.small.url}`} alt="pic1"/></a></li>
                                <li><a data-target="#pic-2" data-toggle="tab"><img src={`http://localhost:1337${this.state.product.image[1].formats.small.url}`} alt="pic1"/></a></li>
                                <li><a data-target="#pic-3" data-toggle="tab"><img src={`http://localhost:1337${this.state.product.image[2].formats.small.url}`} alt="pic1"/></a></li>
                            </ul>
                        </div>
                        {/* //----------------Product Details------------------------------------------------------------ */}
                <div className="details col-md-6">
                 <h3 className="product-title">{this.state.product.title}</h3>
                    <div className="rating">
                        <div className="stars">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                        </div>
                        <span className="review-no">41 reviews</span>
                    </div>
                    <p className="product-description">{this.state.product.description}</p>
                    <h4 className="price">current price: <span>Rs {this.state.product.price}</span></h4>
                    <p className="vote"><strong>91%</strong> of buyers loved this product! <strong>(87 votes)</strong></p>
                    {/* <h5 className="sizes">sizes:
            <span className="size" data-toggle="tooltip" title="small">s</span>
                        <span className="size" data-toggle="tooltip" title="medium">m</span>
                        <span className="size" data-toggle="tooltip" title="large">l</span>
                        <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                    </h5> */}
                    <h5 className="colors">colors:
            <span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
                        <span className="color green"></span>
                        <span className="color blue"></span>
                    </h5>
                    <div className="action">
                        <button className="add-to-cart btn btn-default" type="button">add to cart</button>
                        <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                    </div>
                    </div>
                        </div>
                    </div>
                    

                </div>
            )
        }
        return (<h2 className="container">Product Details loading</h2>)


    }
}
