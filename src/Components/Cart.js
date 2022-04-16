import React from 'react'
import styled from 'styled-components'
function Cart(props) {
  return (
    <Container>
        {
            props.items.map((itm)=>{
                return(
                <Card>
                    <span>{itm.title}</span>
                    <span>{itm.price}</span>
                    <span>1</span>
                    
                </Card>)
            })
        }
    </Container>
  )
}

export default Cart
const Container=styled.div`
background:white;
width: 400px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const Card = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
box-shadow:0 2px 4px rgba(0,0,0,0.6);
span{
    margin: 5px;
    font-size:14px;

}
`