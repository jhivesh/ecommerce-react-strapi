import React, { Component } from 'react'
import ProductCard from "./ProductCard";
import styled from "styled-components";
import { storeProduct } from "./../../assets/Data";
import { Link } from "react-router-dom";

export default class ProductList extends Component {
    state = {
        loading: true,
        products: []
        // product: storeProduct
    }
    async componentDidMount() {
        let response = await fetch("http://localhost:1337/product")
        if (!response.ok) {
            return
        }
        let products = await response.json()
        this.setState({
            loading: false,
            products: products
        })
    }
    render() {

        if (!this.state.loading) {
            return (
                <div className="container">
                    <h2>Available Products : {this.state.products.length}</h2>
                    <img src={this.state.products.image} alt="" />
                    {this.state.products.map((product, index) => {
                        return (
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        <Link to={`/product/${product.id}`}>
                                            <ProductCard title={product.title} price={product.price} img={product.img} />
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        )
                    })}

                </div>














                // <div classNameName="container">

                //     {/* row1 */}
                //     <div className="row">
                //         <Heading >Our Products</Heading>
                //     </div>

                //     <div className="row">
                //         <div className="col">
                //             <ProductCard />
                //         </div>

                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //     </div>

                //     <div className="row">
                //         <div className="col">
                //             <ProductCard  />
                //         </div>

                //         <div className="col">
                //             <ProductCard  />
                //         </div>
                //         <div className="col">
                //             <ProductCard/>
                //         </div>
                //     </div>


                //     <div className="row">
                //         <div className="col">
                //             <ProductCard />
                //         </div>

                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //     </div>

                //     <div className="row">
                //         <div className="col">
                //             <ProductCard />
                //         </div>

                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //         <div className="col">
                //             <ProductCard />
                //         </div>
                //     </div>

                // </div>
            );
        }
        return (<h2>Loading : Waiting for API</h2>)

    }
}
const Heading = styled.h4`
align-items:center;
padding-right:20rem;
`