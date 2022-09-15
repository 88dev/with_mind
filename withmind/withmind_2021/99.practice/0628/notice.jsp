<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/notice_board.css">
	<div id="container">
		<div class="common_zone">
			<div class="common_top clear">
				<h2>공지사항</h2>
				<p>
					<span>홈 > MY IM ></span>
					<em>공지사항</em>
				</p>
			
			</div>
			<div class="comInterview_contents">
				<div id="tab1" class="demoTab">
					<ul class="tab_lst">
							<li class="on"><a href=""><p class="new_point">공지</p></a></li>
							<li><a href="">이벤트</a></li>
					</ul>
					<div class="group">
						<div class="on">
							<table>
								
							</table>
						
						</div>
						<div class="tab_2">
							<div class="event_lst">
								<table>
								
								</table>
							</div>
						</div>
					</div>					
				</div>
			</div>
		</div>
	</div>
	
<script type="text/javascript">
      
	$(document).ready(function(){
		
		$('table').eq(0).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getNotices",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(1).addClass("none");
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
					   list += '<div><span>[공지]</span><span><p class="new_post">'+data.wrSubject+'</p></span></div>';  
					   list += '<div><span>'+data.wrDatetime+'</span><button class="toggle_a"></button></div>';
					   list += '</section>';
					   list += '<div class="slideToggle_p none">';
					   list += '<h4>'+data.wrSubject+'</h4>';
					   list += '<p>'
					   if(data.wrContent != ""){
						  list += data.wrContent;
					   }					   
					   if(data.wrImgUrl != "" && data.wrImgUrl != null){
					     list += '<img src="'+data.wrImgUrl+'">';
				       }
				       list += '</p>';
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
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"><p><span>결제 내역이 없습니다. 지금 바로 모의면접을 경험해보세요.</span><a href="${pageContext.request.contextPath}/ticket/products">이용권 구매하기</a></p></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }      
		 }); 
		
		$('table').eq(1).DataTable({
			 "pageLength": 10,
		     ajax: {
		    	url: "${pageContext.request.contextPath}/board/getEvents",
				type: "post",	    
				dataType: "json",	 
		        dataSrc: function (data) {
		        	console.log(data.length);
		        	$(".totalRow").text(data.length);
	                if (data.length == 0) {
	                	$(".dataTables_paginate").eq(1).addClass("none");
	                	data = "";
	                	
				    }	              
	                return data;    
	            }
		     },
		     bSort : false,
		     columns: [
				{"data": function (data, type, dataToSet) { 
					   var list = '<section>';
					   list += '<a href="${pageContext.request.contextPath}/board/eventInfo">';
					   list += '<img src="'+data.evThumImgUrl+'">';
					   list += '<p>';
					   list += '<strong>[진행중]</strong>';
					   list += '<span> ' + data.evSubject + '</span>';
					   list += '<em> ' + data.startDate + ' ~</em>';
					   list += '</p>';
					   list += '</a>';
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
				 emptyTable: '<span class="noresult"> <img src="${pageContext.request.contextPath}/resources/images/pic/noresult.png" alt="이미지"></span>',
				 loadingRecords: "<img class='loading' src='${pageContext.request.contextPath}/resources/img/IM_2-2.gif'>"
			 }    
		 }); 
		
		
		var tabType = "${tabType}";
		var tabNum = parseInt(tabType);
		/* console.log(tabType); */
		$(".tab_lst").children("li").not(tabNum).removeClass("on");
		$(".tab_lst").children("li").eq(tabNum).addClass("on");
		
		$(".group").children("div").not(tabNum).removeClass("on");
		$(".group").children("div").eq(tabNum).addClass("on");
		  
	});  
	 
</script>	