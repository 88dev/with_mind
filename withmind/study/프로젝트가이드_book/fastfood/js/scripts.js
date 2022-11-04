const API_URL = 'https://floating-harbor-78336.herokuapp.com/fastfood';

$(function(){

    $('.btn-search').click(function(){
        const searchKeyword = $('#txt-search').val();

        search(1, 10, searchKeyword);
    });

    $('#txt-search').on('keypress', function(e){
        if(e.keyCode === 13) {
            $('.btn-search').trigger('click');
        }
    });

});

function search(page, perPage, searchKeyword) {

    if(typeof page !== 'number' || page < 1) {
        page = 1;
    }

    if(typeof perPage !== 'number' || perPage <= 0) {
        perPage = 0;
    }
    
    $.get(API_URL, {
        page: page,
        perPage: perPage,
        searchKeyword: searchKeyword
    }, function(data){
        const list = data.list;
        const total = data.total;

        $('.total').html('총 '+total+'개의 패스트푸드점을 찾았습니다.');

        const $list = $('.list');

        for(let i = 0; i < list.length; i++){
            let item = list[i];

            // 1. 템플릿을 복제한다.
            // 2. 복제한 템플릿에 데이터를 세팅한다.
            // 3. 목록에 복제한 템플릿을 추가한다.

            const $elem = $('#item-template')
            .clone()
            .removeAttr('id');
            $elem.find('.item-no').html(i+1);
            $elem.find('.item-name').html(item.name);
            $elem.find('.item-addr').html(item.addr);

            $list.append($elem);
        }

        showPaging(page);
    }); 

}

function showPaging(page) {
    let $paging = $('.paging').empty();

    for (let i = 1; i <= 5; i++) {
        let $elem = $('<a href="javascript:search(' + i + ')">' + i + '</a>');

        if(i === page) {
            $elem.addClass('current');
        }

        $paging.append($elem);
    }
}