<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<link rel="stylesheet" href="${pageContext.request.contextPath}/resources/css/modal.css">
	<div class="body_box width_box">
		
		<div class="contents_box width_box">
			<div class="pri_create_page company_input_page">
				<section class="page_top">
					<h3>Pri 등록관리</h3>
					<div class="site_map">
						기업 관리(B2B) > Pri등록관리 > Pri 계약등록
					</div>
				</section>
				<section class="page_contents">
					<!-- 본문 -->
					<h4>Pri계약등록</h4>
					
					<div class="m_t_30 m_b_10">
						<h5>기본정보</h5>
						<table class="normal">
							<tr>
								<th>사업자번호<em class="red">*</em><br>(법인고유번호)</th>
								<td>
									<input type="text" placeholder="- 없이 입력" /> 
									<button type="button" class="black_btn">조회</button>
								</td>
								<th>분류</th>
								<td>
									<input type="radio" id="school" name="use_for" value="school" />
									<label for="school">학교</label>
									<input type="radio" id="business" name="use_for" value="business" />
									<label for="business">기업</label>
								</td>
							</tr>
							<tr>
								<th>기업명<em class="red">*</em></th>
								<td><input type="text" class="co_input" /></td>
								<th>대표자명</th>
								<td><input type="text" class="co_input" /></td>  
							</tr>
							<tr>
								<th>계약기간<em class="red">*</em></th>  
								<td>
									<input name="regdate" id="regdate" class="date_format" value="" type="text" data-daterange="true" autocomplete="off" placeholder="날짜"/>
								</td>
								<th>계약쿠폰수</th>
								<td><input type="text" class="co_input" /></td>
							</tr>
						</table>
					</div>
					<div class="m_t_30">
						<h5>추가정보</h5>
						<table class="normal">
							<tr>
								<th>기업관리자명</th>
								<td ><input type="text" class="co_input" /></td>
								<th>Pri 어드민 관리자 ID</th>
								<td ><input type="text" class="co_input" /></td>
							</tr>
							<tr>
								<th>대표번호</th>
								<td><input type="text" class="co_input" placeholder="- 없이 입력" /></td>
								<th>연락처</th>
								<td><input type="text" class="co_input" placeholder="- 없이 입력" /></td>
							</tr>
							<tr>
								<th>키오스크 로고</th>
								<td colspan="3">  
							       <div class="file-div-wrapper" data-activity-template="true" data-activity="1">
										<div class="filebox fileUpload-padding"> 
										    <label class="btn-file">파일 선택
											    <input type="file" name="file" id="customFile" class="file-input-custom">
											</label>  
											<div class="delBox d_i m_l_20"></div>
											<input class="upload-name file-label-wrapper" disabled="disabled" id="printFile">
									    </div>
									    
									</div>
								</td>
							</tr>
						</table>
					</div>
					<div class="m_t_30">
						<table class="normal">
							<tr>
								<th>관리자 메모</th>
								<td><textarea class="" placeholder="관리자 메모" ></textarea></td>
							</tr>
						</table>
					</div>
					<div class="btn_box">
						<button type="button" class="white_btn">취소</button>
						<button type="button" class="black_btn">등록</button>
					</div>
				</section>
			</div>
				
		</div>
	</div>
	<script>
	
	var _URL = window.URL || window.webkitURL;
	var maxSize = 700 * 1024;
	var deleteBtn = '<img src="${pageContext.request.contextPath}/resources/images/btn/btn-delete.svg" />';
	
	$(document).on('change', '#customFile', function () {
        var $this = $(this);
        var fileName = this.files[0] ? this.files[0].name : '';
        var fileSize = this.files[0].size;
        var fileLabelWrapper = $('.file-label-wrapper');	
        if ((file = this.files[0])) {
            var ext = fileName.slice(fileName.lastIndexOf(".") + 1).toLowerCase();	   
            if (!(ext == "gif" || ext == "jpg" || ext == "png" || ext == "jpeg")) {
                $this.val("");
                alert("이미지파일 (.jpg, .jpeg, .png, .gif ) 만 업로드 가능합니다.");		  
            }else if(fileSize > maxSize){		
                $this.val("");
                alert("첨부파일 사이즈는 700kbyte 이내로 등록 가능합니다. ");
            }else{
            	$(".delBox").empty();
                fileLabelWrapper.val(fileName);
                $(".delBox").prepend(deleteBtn);
            }
        }
    });
	
	</script>
