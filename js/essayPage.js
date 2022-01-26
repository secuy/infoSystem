$(function () {
    // PDF嵌入设置
    PDFObject.embed("pdf/test01.pdf", "#pageEssay");

    // 修改标签位置
    $('.bodyTag').css('top', '150px');
    $('.bodyTag').css('right', '20px');
    //当页面宽度减小时对标签、评价列表、评价提交进行隐藏
    $(window).resize(function () { 
        if($(window).width()>=1500) {
            $('.userEval').css('display', 'block');
            $('.evalList').css('display', 'block');
            $('.bodyTag').css('display', 'block');
        } else {
            $('.userEval').css('display', 'none');
            $('.evalList').css('display', 'none');
            $('.bodyTag').css('display', 'none');
        }
    });
})