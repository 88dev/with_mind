<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> 
    <link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/customer_serv.css">
</head>
<body>
	<div id="container">
		<div class="common_zone">
			<div class="common_top clear">
				<h2>고객지원</h2>
				<p>
					<span>홈 > MY IM ></span>
					<em>고객지원</em>
				</p>
			</div>
			<div class="super_tab">
				<input id="t1" type="radio" name="tabs" checked>
				<label for="t1" >FAQ</label>

				<input id="t2" type="radio" name="tabs">
				<label for="t2">1:1 문의</label>

				<section id="con1">
					<div class="comInterview_contents">
						<div id="tab1" class="demoTab">
							<ul class="tab_lst">
								<li class="on"><a href="#">베스트</a></li>
								<li><a href="#">이용방법</a></li>
								<li><a href="#">회원정보</a></li>
								<li><a href="#">결제</a></li>
								<li><a href="#">기타</a></li>
							</ul>
							<div class="group">
								<div class="on">
									<table>
										
									</table>
								</div>
								<div class="tab_2">	
									<table>
									
									</table>				
								</div>
								<div class="tab_3">					
									<table>
									
									</table>
								</div>
								<div class="tab_4">					
									<table>
									
									</table>
								</div>
								<div class="tab_5">					
									<table>
									
									</table>
								</div>
							</div>	
						</div>
					</div>
				</section>
				<section id="con2">
					<div class="comInterview_contents">
						<div id="tab2" class="demoTab">
							<ul class="tab_lst">
								<li class="on"><a href="#">1:1 문의하기</a></li>
								<li><a href="#">1:1 문의내역</a></li>
							</ul>
							<div class="group">
								
								<div class="on custom_que">
									<form id="inqueryForm" enctype="multipart/form-data">
										<section>
											<select name="inqueryType" id="selectFsname">
												<option selected disabled hidden>문의유형</option>
												<c:forEach var="tmp" items="${FscodeList}" varStatus="status">					
											  	   <option value="${tmp.fsCode}">${tmp.fsName}</option>	
												</c:forEach>
												<!-- <option value="">이용방법</option>
												<option value="">회원정보</option>
												<option value="">결제</option>
												<option value="">기타</option> -->
											</select>
											<!-- <span style="display: block; color: #DF0000; font-size: 15px; line-height: 24px;">* 문의유형을 선택해주세요.</span> -->
										</section>
										
										<section>
											<input type="text" name="inSubject" id="inquerySubject" placeholder="문의 제목을 입력해주세요.">
										</section>
										<section>
											<section class="que_text">
												<textarea id="inqueryContent" name="inContent" rows="12" placeholder="이용방법 선택시 : FAQ를 통해 도움을 받아보세요. 좀 더 빠른 답변을 확인 하실 수 있으실 거에요.&#13;&#10;회원정보 : 아이디 / 비밀번호의 경우 개인정보로 도움안내에 제한이 있을 수 있습니다.&#13;&#10;우선 사이트 내 아이디, 비밀번호 찾기를 시도해주세요.&#13;&#10;결제 : 결제 이용권 문의의 경우 결제 이용권의 이용권명, 결제 일자, 결제자명 등의 결제정보를 작성해주세요.&#13;&#10;기타 : 문의하실 때는 문의하시고자하는 서비스의 정확한 경로와 문의 내용을 상세 작성해주세요."></textarea>
												<div id="inqueryContent_cnt">0 / 1,000 자</div>
											</section>
										</section>
										<p>
											<span>* 1:1 문의를 통해 회원님의 문의사항을 답변해드립니다.</span>
											<span>* 고객지원의 'FAQ'을 이용하시면 자세한 답변을 보다 빠르게 확인하실 수 있습니다.</span>
											<span>* 문의하신 내용은 운영시간을 기준으로 확인 후 답변해 드립니다.</span>
											<span>* 주말과 공휴일 접수건은 답변이 다소 늦어질 수 있는 점 양해부탁드립니다.</span>
										</p>
										<input type="hidden" name="userKey" value="${userKey}">
									</form>
									<div class="inquery-error">
										<span class="im-input-validation-error"></span> 
										<span class="im-input-validation-error"></span> 
										<span class="im-input-validation-error"></span> 
										<span class="im-input-validation-error"></span> 
									</div>
									
									<button type="button" id="insertBtn" class="inqueryBtn">문의 등록</button>
								</div>
								
								<div class="tab_2">			
									<section>
										<table>
										
										</table>
									</section>
								</div>
							</div>	
						</div>
					</div>
				</section>
			</div>
			
		</div>
	</div>
	
	<script type="text/javascript">
	
	var userId = "${userId}";
	
	$(document).ready(function() {
		
		ajaxFscode();
		
		$('table').eq(0).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getFaqBest",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(0).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     bSort : false,
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<section class="div_wrapper">';
					   list += '<div><span>[공지]</span><span>'+data.faSubject+'</span></div>';
					   list += '<div><span>'+data.faDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.faSubject+'</h4>';
					   list += '<p>'+data.faContent+'</p>';
					   list += '</div>';
					   list += '</section>';
					 
					   return list; 
                   } 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>등록된 질문이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
		
		$('table').eq(1).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getFaqWay",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(0).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     bSort : false, 
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<section class="div_wrapper">';
					   list += '<div><span>[공지]</span><span>'+data.faSubject+'</span></div>';
					   list += '<div><span>'+data.faDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.faSubject+'</h4>';
					   list += '<p>'+data.faContent+'</p>';
					   list += '</div>';
					   list += '</section>';
					 
					   return list; 
                  } 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>등록된 질문이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
		
		$('table').eq(2).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getFaqUser",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(0).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     bSort : false,
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<section class="div_wrapper">';
					   list += '<div><span>[공지]</span><span>'+data.faSubject+'</span></div>';
					   list += '<div><span>'+data.faDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.faSubject+'</h4>';
					   list += '<p>'+data.faContent+'</p>';
					   list += '</div>';
					   list += '</section>';
					 
					   return list; 
                  } 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>등록된 질문이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
		
		$('table').eq(3).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getFaqPay",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(0).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<section class="div_wrapper">';
					   list += '<div><span>[공지]</span><span>'+data.faSubject+'</span></div>';
					   list += '<div><span>'+data.faDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.faSubject+'</h4>';
					   list += '<p>'+data.faContent+'</p>';
					   list += '</div>';
					   list += '</section>';
					 
					   return list; 
                  } 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>등록된 질문이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
		
		$('table').eq(4).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getFaqEtc",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(0).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     bSort : false,
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<section class="div_wrapper">';
					   list += '<div><span>[공지]</span><span>'+data.faSubject+'</span></div>';
					   list += '<div><span>'+data.faDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.faSubject+'</h4>';
					   list += '<p>'+data.faContent+'</p>';
					   list += '</div>';
					   list += '</section>';
					 
					   return list; 
                  } 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>등록된 질문이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
				
		  		
		
		/* 문의 */
		
		
		$("#selectFsname").change(function(){
			if(userId == ""){
			   	/* alert("로그인이 필요합니다."); */
				$(".im-input-validation-error").eq(0).text("로그인이 필요합니다.");
			}
		});
		
		$("#insertBtn").click(function(){		
			$(".im-input-validation-error").empty();
			var form = new FormData(document.getElementById('inqueryForm'));	
			/* var formData = new FormData($('#inqueryForm')[0]); */
			var fsCode = $("#selectFsname option:selected").val();
			
			/* if(userId == ""){
				alert("로그인이 필요합니다.");
			} else */ 
				
			if(userId == ""){
				/* alert("로그인이 필요합니다."); */
				$(".im-input-validation-error").eq(0).text("로그인이 필요합니다.");
			} else if(fsCode == ""){
				$(".im-input-validation-error").eq(1).text("문의유형을 선택해주세요.");
			} else if($("#inquerySubject").val() == ""){
				$(".im-input-validation-error").eq(2).text("문의 제목을 입력해주세요.");
			} else if($("#inqueryContent").val() == ""){
				$(".im-input-validation-error").eq(3).text("문의 내용을 입력해주세요.");
			} else {
				form.append('fsCode',fsCode);		
				$.ajax({
			        url:"${pageContext.request.contextPath}/board/insertInquery",
			        type:'POST',
			        data: form,       
			        dataType: 'json',
			   	    processData: false,
			   	    contentType: false,
			        success:function(data){  
			        	alert("등록이 완료되었습니다.");
			        	location.href = "${pageContext.request.contextPath}/board/help";	 
			        },
					error: function(xhr, status, err) {				
						if (xhr.status == 403) {
				            alert("세션이 만료되었습니다. 다시 로그인하세요.");
				            location.reload();
				        } else if (xhr.status == 500) {
			                alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
			            }
			        }
			    });	
			}
		});
		
		
		
		
		/* $("#insertBtn").click(function(){		
			$(".im-input-validation-error").empty();
			if(validator() == true){			
			    var delConfirm = confirm('등록 하시겠습니까?');
			    if(delConfirm){
			    	ajaxInsertForm();
			    }else{
				   alert("취소 되었습니다.");
				   return false;  
				}
			}
		});  */
		
		/* function ajaxInsertForm() {
		    var form = new FormData(document.getElementById('inqueryForm'));	
		    var fsCode = $("#selectFsname option:selected").val();
		    
		    form.append('fsCode',fsCode);		
			$.ajax({
		        url:"${pageContext.request.contextPath}/board/insertInquery",
		        type:'POST',
		        data: form,       
		        dataType: 'json',
		   	    processData: false,
		   	    contentType: false,
		        success:function(data){  
		        	alert("등록이 완료되었습니다.");
		        	location.href = "${pageContext.request.contextPath}/board/help";	 
		        },
				error: function(xhr, status, err) {				
					if (xhr.status == 403) {
			            alert("세션이 만료되었습니다. 다시 로그인하세요.");
			            location.reload();
			        } else if (xhr.status == 500) {
		                alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
		            }
		        }
		    });	
		} */
		
		/* function validator() { 
			var isValid = true;  
		 	var fsCode = $("#selectFsname option:selected").val();
			if(fsCode == ""){
				$(".im-input-validation-error").eq(0).text("문의유형을 선택해주세요.");
			}
			else if($("input[name=inSubject]").val() == ""){
			   alert("문의하실 제목을 입력하세요.");
			   isValid = false;    
			}else if($("input[name=inContent]").val() == ""){
			   alert("문의하실 내용을 입력하세요.");
			   isValid = false;       
			}
		 	return isValid;
		} */
		
		
		
		
		
		function ajaxFscode(){ 
			$.ajax({
			  	url : "${pageContext.request.contextPath}/board/getFsCode",
			  	method : "post",		  	
			  	success : function(data) {		
			  		console.log(data);
			  	   var list ="<option value='' selected disabled hidden>문의유형</option>";
			  	   
		  		   for(var i=0; i<data.list.length; i++){    				  
		  			   list += "<option value="+data.list[i].fsCode+">"+data.list[i].fsName+"</option>";	  			  	  				 		 
			  	   }		  
			  	   $("#selectFsname").html(list);		  		
			  	},  
				error: function(xhr, status, err) {				
				   if (xhr.status == 403) {
				      alert("세션이 만료되었습니다. 다시 로그인하세요.");
				      location.reload();
				   } else if (xhr.status == 500) {
			          alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
			       }
			    }
			});	 
		}
		
		
	    $('#inqueryContent').on('keyup', function() {
	        $('#inqueryContent_cnt').html(""+$(this).val().length+" / 1,000"+"자");
	 
	        if($(this).val().length > 1000) {
	            $(this).val($(this).val().substring(0, 1000));
	            $('#inqueryContent_cnt').html("1,000 / 1,000"+" 자");
	        }
	    });
		
	    
	    
		/* 1:1 문의 내역 */
		
	    $('table').eq(5).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getInqueryList",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	console.log("data>>>"+data);
	                	/* $(".dataTables_paginate").eq(0).addClass("none"); */
	                	data = "";
				    }	              
	                return data;    
	            }
		     },
		     bSort : false,
		     columns: [
				{
					"data": function (data, type, dataToSet) { 
						var list = '<section>';
						list += '<section class="div_wrapper">';
						list += '<div><span>[FAQ]</span><span>'+data.inSubject+'</span></div>';
							if(data.adminKey == null){
							    list += '<div><span>'+data.inDatetime+'</span><span class="que_history_ing">문의 접수</span><button class="toggle_a"></button></div>';
							}else{
								list += '<div><span>'+data.inDatetime+'</span><span class="que_history_ing">답변 완료</span><button class="toggle_a"></button></div>';
							}
						list += '</section>';
						list += '<div class="slideToggle_p none">';
						list += '<section>';
						list += '<div>';
						list += '<h4>Q.<span>'+data.inSubject+'</span></h4>';
						list += '<p><span>'+data.inContent+'</span></p>';
						list += '</div>';
						list += '<div>';
						if(data.reSubject != null){
						   list += '<h4>A.<span>'+data.reSubject+'</span></h4>';
						   list += '<p><span>'+data.reContent+'</span></p>';
						}
						list += '</div>';
						list += '</section>';
						list += '</div>';
						list += '</section>';
					 
					   return list; 
                	} 
				} 
		     ], 
			 language: {
				 paginate: {
				    previous: '<',
				    next: '>'  
				 },
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>문의하신 내역이 없습니다.</span></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 });
	    
	});
	
	</script>
</body>
</html>