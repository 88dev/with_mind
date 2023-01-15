import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from 'react-bootstrap';


function Detail(props){

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)
    let [탭, 탭변경] = useState(0)


    // useEffect(()=>{
        
    // }, [])


    useEffect(()=>{
        let a = setTimeout(()=>{ setAlert(false)}, 2000);
        return()=>{
            // 기존타이머는 제거
            clearTimeout(a)
        }
    })

    let {id} = useParams();

    return (
        <div className="container">
            {
                alert == true
                ? <div className="alert alert-warning">
                    2초 이내 구매시 할인
                </div>
                : null
            }
            <button onClick={()=>{ setCount(count+1) }}>버튼</button>
            <div className="row">
                <div className="col-md-6">
                    <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}원</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=>{탭변경(0)}}>버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=>{탭변경(1)}}>버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=>{탭변경(2)}}>버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            
            <TabContent 탭={탭}/>
        </div> 
    )
}

function TabContent({탭}){

    let [ fade, setFade ] = useState('') 

    useEffect(()=>{
        let a = setTimeout(()=>{ setFade('end') }, 10)
        return()=>{
            clearTimeout(a)
            setFade('')
        }
    },[탭])

    return (<div className={'start ' + fade}>
        { [<div>내용0</div>,<div>내용1</div>,<div>내용2</div>][탭] }
    </div>)
}

export default Detail; 