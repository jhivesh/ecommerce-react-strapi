import React, { Component } from 'react'
import Link from "react-router-dom"; 

export default class Product extends Component {
    state = {
        loading: true,
        products: {}
        // product: storeProduct
    }

    async componentDidMount() {
        let response = await fetch(`http://localhost:1337/product/${this.props.match.params.id}`)
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
    
        return (
            <div className="container">
                if (this.state.loading) {
                    <h1>pending</h1>
                }
            </div>
        )
    }
}
