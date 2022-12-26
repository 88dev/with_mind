import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Detail(props){

    let [count, setCount] = useState(0)
    let [alert, setAlert] = useState(true)

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
        </div> 
    )
}

export default Detail;