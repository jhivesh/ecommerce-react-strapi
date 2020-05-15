import React from 'react'
import styled from "styled-components";




const ProductCard = (props) => {
 
    return (
    
    <Card className="card">
        <div className="card-body">
          <Title className="card-title">{props.title}</Title>
            <img src={props.img} alt="Image" height="200"/>
            <Description className="card-text">
                Price: Rs {props.price} 
           </Description>
            <ActionButton href="#">Add to Cart</ActionButton>
        </div>
    </Card>

    )
}

// -------------Card CSS---------------------------
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
export default ProductCard;