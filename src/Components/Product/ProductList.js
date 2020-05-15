import React, { Component } from 'react'
import ProductCard from "./ProductCard";
import styled from "styled-components";
import {storeProduct} from "./../../assets/Data";

export default class ProductList extends Component {
    state = {
        product: storeProduct
    }
    render() {
        console.log(this.state.product);
        return (
            <div className="container">
                
                {/* row1 */}
                <div class="row">
                    <Heading >Our Products</Heading>
                </div>

                <div class="row">
                    <div class="col">
                        <ProductCard title={this.state.product[0].title} price={this.state.product[0].price} img={this.state.product[0].img}/>
                    </div>

                    <div class="col">
                        <ProductCard title={this.state.product[1].title} price={this.state.product[1].price} img={this.state.product[1].img}/>
                    </div>
                    <div class="col">
                        <ProductCard title={this.state.product[2].title} price={this.state.product[2].price} img={this.state.product[2].img} />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <ProductCard title={this.state.product[3].title} price={this.state.product[3].price} img={this.state.product[3].img}/>
                    </div>

                    <div class="col">
                        <ProductCard title={this.state.product[4].title} price={this.state.product[4].price} img={this.state.product[4].img}/>
                    </div>
                    <div class="col">
                        <ProductCard title={this.state.product[5].title} price={this.state.product[5].price} img={this.state.product[5].img}/>
                    </div>
                </div>


                <div class="row">
                    <div class="col">
                        <ProductCard title={this.state.product[6].title} price={this.state.product[6].price} img={this.state.product[6].img}/>
                    </div>

                    <div class="col">
                        <ProductCard title={this.state.product[7].title} price={this.state.product[7].price} img={this.state.product[7].img}/>
                    </div>
                    <div class="col">
                        <ProductCard />
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <ProductCard />
                    </div>

                    <div class="col">
                        <ProductCard />
                    </div>
                    <div class="col">
                        <ProductCard />
                    </div>
                </div>
                
            </div>
        )
    }
}
const Heading = styled.h4`
align-items:center;
padding-right:20rem;
`