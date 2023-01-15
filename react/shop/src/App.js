import { useEffect, useState } from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';
import './App.css';
import data from './data.js';
import { Routes, Route, Link, useNavigate, Outlet, json } from 'react-router-dom';
import Detail from './routes/Detail.js'
import axios from 'axios'
import Cart from './routes/Cart.js'
import { useQuery } from "react-query"


function App() {

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  }, [])
  
  
  let [shoes, setShoes] = useState(data)
  let [재고] = useState([10,11,12])
  let navigate = useNavigate();

  let result = useQuery('작명',()=>
    axios.get('http://codingapple1.github.io/userdata.json').then((a)=>{
      console.log('요청됨')
      return a.data
    }),
  )


  return (
    <div className="App">

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{ navigate('/') }}>Home</Nav.Link>
            <Nav.Link onClick={()=>{ navigate('/detail') }}>Detail</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            { result.isLoading ? '로딩중' : result.data.name }
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
            <div className="container">
              <div className="row">
                { shoes.map((a, i)=>{
                  return <Card shoes={shoes[i]} i={i}></Card>
                })}
              </div>
            </div>
            <button onClick={()=>{
              axios.get('https://codingapple1.github.io/shop/data2.json')
              .then((결과)=>{ 
                let copy = [...shoes, ...결과.data];
                setShoes(copy);
              })
              .catch(()=>{
                console.log('실패함')
              })
            }}>버튼</button>
          </>
        } />
        <Route path="/detail/:id" element={
            <Detail shoes={shoes} />
        } />

        <Route path="/cart" element={ <Cart /> } />

      </Routes>


      
    </div>
  );
}

function Event(){
  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}

function About(){
  return(
    <div>
      <h4>회사정보임</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Card(props){

  return (
    <div className="col-md-4">
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i+1) + '.jpg'} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}

export default App;