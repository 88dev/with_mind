

  /* edit by buck : 모달 내 닫기 버튼 -> 모달 닫기*/
  document.querySelector('.mall-modal button.btn-close-modal').addEventListener('click' , () =>{
    openMallAlertModal(false);
  });

  /* edit by buck : 모달 열기 */
  document.querySelector('a.link-to-mall').addEventListener('click' , () =>{
    openMallAlertModal(true);
  });




/* edit by buck */
function openMallAlertModal( show ){
  let body =  document.querySelector('body');
  let targetModal =  document.querySelector('.mall-modal');
  
  if(show){ // 모달 오픈
    targetModal.classList.add('show');
    body.classList.add('locked'); // 바디 스크롤 잠금
  } else { // 모달 닫힘
    targetModal.classList.remove('show');
    body.classList.remove('locked'); // 바디 스크롤 잠금 해제
  }
}