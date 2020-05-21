import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
//--------------------------------------------------------

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

    // handlecart = (e) =>{
    //  //<Link to={`/product/${product.id}`}>  </Link>
    //     console.log(this.element);


    //  }


    render() {

        const handlecart = (product) => {
            console.log(product.id);
        }

        if (!this.state.loading) {
            return (

        <div className="container">
            {/* heading */}
            <h2>Available Products : {this.state.products.length}</h2>

            {this.state.products.map((product, index) => {
                return (

        
                        <div className="row">
                            <div className="col">

                                {/* Product card */}
                                <Card className="card">

                                    <div className="card-body">

                                        <Title className="card-title">{product.title}</Title>

                                        <img src={product.img} alt="Image" height="50" width="500" />

                                        <Description className="card-text"> Price: Rs {product.price}</Description>

                                        <ActionButton onClick={() => { handlecart(product) }}>Add to Cart </ActionButton>

                                    </div>

                                </Card>

                            </div>

                        </div>
                    
                );
            })};

        </div>
            ); // END OF IF STATEMENT 
        }
        return (<h2 className="container">Loading : Waiting for API</h2>)

    }
}
const Heading = styled.h4`
align-items:center;
padding-right:20rem;
`
const Card = styled.div`
width: 18rem;
margin-top:3rem;
margin-right:1rem;
border:none;

:hover {
    border:2px solid #e5e5e5;
    background: lightblue;
    transition: all 0.2s ease-out 0s;
    display: block;
    object-fit: cover;
    border-color: rgb(229, 235, 237);
  }
  
color: #333;
  display: flex;
  align-items: center;
  svg {
    transform: translateY(2px);
    margin-right: 5px;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    & button {
      width: 100%;
      margin-bottom: 4px;
      font-size: 0.65rem;
    }
  }
`
//------------------------------------------------------------------


//-----------Title CSS------------------------------------------------
const Title = styled.h2`
  color: 000000;
  font-weight: 300;
`
//------------------------------------------------------------------

const Description = styled.p`
  color: 000000;
  font-weight: 500;
`
const ActionButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: lightblue;
  color: blue;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`
