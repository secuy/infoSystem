$(function() {
    // 相关话题点击事件
    for(var i=1;i<=$('.innerTopic').length;i++) {
        $('#innerTopic'+i).children('a').click(function () {
            // 子内容
            $(this).siblings('ul').slideToggle("fast");
            // 箭头
            if($(this).children("span").hasClass("beforeRotateArrow")) {
                $(this).children("span").stop().removeClass("beforeRotateArrow").addClass("afterRotateArrow");  //箭头
            } else {
                $(this).children("span").stop().addClass("beforeRotateArrow").removeClass("afterRotateArrow");
            }
        })
    }
    //搜索框
    $("#searchText").on({  //选中搜索框
        focus: function() {
            $("#searchText").addClass("TextBorderFocus").removeClass("TextBorder").prop("placeholder","");
        },
        blur: function() {
            $("#searchText").removeClass("TextBorderFocus").addClass("TextBorder").prop("placeholder","输入您想搜索的内容...");
        }
    })
    // 知识图谱加载
    initKnow();
});