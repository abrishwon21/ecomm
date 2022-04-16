import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import ProCard from './ProCard'
import Cart from './Cart'
function Product(props) {
    const [product, setProduct]=useState([]);
    const [category, setCategory] = useState([]);
    const [subCateg, setSubCateg]=useState('jewelery');
    const [SideMenu, setSideMenu] = useState([])

    const [cart, setCart]= useState([1,3,4])

    const handleCart=(e)=>{
       // setCart(...cart, e.target.value)
        //props.ctNumber(cart.length);
    }
        useEffect(()=>{
        
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProduct(json))
        },[])
    useEffect(()=>{
 
    fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategory(json))
    },
            [])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/category/'+subCateg)
            .then(res=>res.json())
            .then(json=>setSideMenu(json))
    })
console.log(cart)
  return (
    <Container>   
            <CatContainer>
            <Menu>
            {category.map(ct=>{
                
                return <Lnk onClick={()=>setSubCateg(ct)}>{ct}</Lnk>
                })}
                
            </Menu>
     
        </CatContainer>
        <MainPage>
            <SubCategory>
               {SideMenu.map(sm=>{
                   return(
                       
                        <div key={sm.id}>
                           <input type="checkbox" value={sm.id} col="3"/>
                           <span>{sm.title}</span>
                        </div>

                   )
               })}
            </SubCategory>
            
                <ProCard prod={product} addToCa={handleCart}/>
           
        </MainPage>
        
    </Container>
  )
}

export default Product

const Container = styled.div`
width: 100%;
height: calc(100vh - 80px);
top: 12rem;

`
const MainPage = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

`
const SubCategory = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
flex-direction: column;
width:300px !important;
left:0;
bottom:0;
background:white;
height:100vh;
position:sticky;

`


const CatContainer = styled.div`
width: 80%;
height:50px;
border-bottom:2px solid #ccc;

margin: 100px auto;
position: relative;
top:17vh;
`
const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items:center;

`
const Lnk = styled.button`
  font-weight: 400;
  font-size: 18px;
  background:white;
  border: 0;
  cursor:pointer;
  position:relative;
  &:hover{
      &:after{
          content:"";
          position: absolute;
          width: 100%;
          height: 2px;
          background:#12a3a2;
          transform:translate(-100%,20px);
      }
  }
`