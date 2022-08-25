/** eslint-disable */

import './App.css';
import { useState } from 'react';


function App() {

  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      <button onClick={ ()=> {
        let 가나다 = [...글제목];
        가나다.sort();
        글제목변경(가나다);
      }}>가나다순 정렬</button>
      <button onClick={ () => {
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);
      }
      }>글 변경</button>

      {/* <div className="list">
        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={ () => setModal(!modal) }>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div> */}

      {
        글제목.map(function(a, i){
          return (
              <div className="list" key={i}>
                <h4 onClick={ () => {setModal(!modal); setTitle(i)}}>{ 글제목[i] } <span onClick={ () => { 
                  let 따봉copy = [...따봉];
                  따봉copy[i] = 따봉copy[i] + 1;
                  따봉변경(따봉copy) 
                  } }>👍</span> { 따봉[i] } </h4>
                <p>2월 17일 발행</p>
              </div>
            )
        })
      }
      <input type="text"  />
      {
        modal == true ? <Modal title={title} 글제목={ 글제목 } 글제목변경={ 글제목변경 } color={'skyblue'}></Modal> : null
      }

    </div>
  );

}
function Modal(props) {
  return (
    <>
      <div className="modal" style={{background : props.color}}>
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <button>글수정</button>
      </div>
    </>
  )
}

export default App;
