import React,{useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function ProCard(props) {
    const [cartItem,setCartItem]=useState([])
    const addToCart=(itm)=>{
  //  setCartItem(itm);
    //props.addToCa(cartItem);
    //setCartItem(" ");
    console.log(itm)
    
}
  return (
<ProductPage>
            
{   
props.prod.map(items=>{
const itemTocart = [items.id, items.title, items.price];

    return(
     <Container key={items.id}>
       
        <img src={`${items.image}`}/>
        
        <RichInfo>
             <h5>{items.title}<span>$ {items.price}</span></h5>
            <button onClick={addToCart(itemTocart)}>Add to Cart <img src="/Icons/arrow.right.filled.svg"/></button>
        </RichInfo>
    </Container>
    )
})
}
 </ProductPage>
  )
}
export default ProCard
const Container =styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;
align-items:center;
box-shadow: 0 0 0 #888888;
margin:2rem;
h5{
    margin: 0 auto;
    color: #123bcd;
    font-weight:400;
    font-size:16px;
}
img{
    width: 250px;
    height: 150px;
    object-fit:contain;
}
`
const RichInfo = styled.div`
width: 250px;
h5{
    span{
        color:#c2c3c3;
    }
}
button{
    width:200px;
    border-radius: 50px;
    background:black;
    color:white;
    margin: 5px auto;

    img{
        width:10px;
        height:2px;
        color:white;
        background:white;
    }
}
`

const ProductPage = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
justify-content:start;
  @media (max-width: 768px) {
    overflow: hidden;
    display:flex;
    flex-direction: column;
   justify-content:space-between;
    transition: max-height 0.3s ease-in;
    width: 100%;
  }


` 