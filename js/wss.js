/**
 * Created by youngrivers on 2016/7/5.
 */
/*
 Theme Name: u-hey
 Author: 吴思诗
 Author URL: http://www.u-hey.com
 Description: 最近不少扒我代码抄袭我简历不跟我说的无耻之徒，你抄袭你瞎改可以，但请你附上原作者链接，尊重我的劳动成果，否则你将发现这里有填不完的坑出现不完的逼u鸡，反正我是不会告诉你的，哼。
 */
//文章归档下拉
$(function($){
    (function() {
        $('span.al_mon').css({
            cursor: "pointer"
        });
        $('span.al_mon').each(function() {
            var num = $(this).next().children('li').size();
            var text = $(this).text();
            $(this).html(text + '<span class=\'pull-right-\'>（' + num + '）<span>');
        });
        var $al_post_list = $(' ul.al_post_list'),
            $al_post_list_f = $('ul.al_post_list:first');
        $al_post_list.hide(1, function() {
            $al_post_list_f.show();
        });
        $('span.al_mon').click(function() {
            $(this).next().slideToggle();
            return false;
        });
        $('.al_post_list').toggle(function() {
            $al_post_list.show();
        }, function() {
            $al_post_list.hide();
        });
    })();
})

$(function($){
    (function(){
        $(".u-quality li").click(function(){
            $(this).addClass("active");
        })
    })();
})

//打字效果
var charIndex = -1;
var stringLength = 0;
var inputText;
function writeContent(init){
    if(init){
        inputText = document.getElementById('contentToWrite').innerHTML;
    }
    if(charIndex==-1){
        charIndex = 0;
        stringLength = inputText.length;
    }
    var initString = document.getElementById('myContent').innerHTML;
    initString = initString.replace(/<SPAN.*$/gi,"");

    var theChar = inputText.charAt(charIndex);
    var nextFourChars = inputText.substr(charIndex,4);
    if(nextFourChars=='<BR>' || nextFourChars=='<br>'){
        theChar  = '<BR>';
        charIndex+=3;
    }
    initString = initString + theChar + "<SPAN id='blink'>_</SPAN>";
    document.getElementById('myContent').innerHTML = initString;
    charIndex = charIndex/1 +1;
    if(charIndex%2==1){
        document.getElementById('blink').style.display='none';
    }else{
        document.getElementById('blink').style.display='inline';
    }

    if(charIndex<=stringLength){
        setTimeout('writeContent(false)',60);
    }else{
        blinkSpan();
    }
}
var currentStyle = 'inline';
function blinkSpan(){
    if(currentStyle=='inline'){
        currentStyle='none';
    }else{
        currentStyle='inline';
    }
    document.getElementById('blink').style.display = currentStyle;
    setTimeout('blinkSpan()',500);
}

//about-cv
$(function(){
    $('#dowebok').pagepiling({
        sectionsColor: ['#2b2b2b', '#EFE1E1', '#FC9', '#2b2b2b','#22C3AA'],
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
        menu: '#menu',
        loopBottom: true,
        loopTop: true,
        navigation: {
            position: 'left',
            tooltips: ['Hello word', '专业技能', '项目经验','教育背景','更多',]
        }
    });
});
//图片轮播
var n = 0;
$(document).ready(function() {
    count = $(".cont a").length; //显示区域的内容长度
    $(".item a").click(function() {
        $(this).addClass("seld").siblings().removeClass("seld");
        var _index = $(this).index(); //分屏的数字索引
        $(".cont>a").eq(_index).fadeIn(300).siblings().hide();
    });
    t = setInterval("showAuto()", 2000); //执行定义好的函数
    $(".box").hover(function() {
        clearInterval(t)
    }, function() {
        t = setInterval("showAuto()", 2000);
    }); /*当鼠标划向图片时终止定时器，离开时再调用定时器*/
})

function showAuto() {
    n = n >= (count - 1) ? 0 : ++n;
    $(".item a").eq(n).trigger('click'); //触发.item a的click事件
}

//console信息
console.log("%c", "padding:50px 300px;line-height:120px;background:url('http://u-hey.com/wp-content/uploads/2016/04/comehere.gif') no-repeat;");
console.log("如果你是睿智的hr，猎头，互联网技术从业者,那么快快招我到碗里去吧   ╭(′▽`)╭(′▽`)╯%c uheyhome@163.com","color:red;");
console.log("如果你是与我同样的前端爱好者，那么欢迎跟我%c交盆友(QQ 178159981)","color:red;font-size:18px");
console.log("如果你是瞎逛的 …… 呐，扒我儿(code)时轻！点！ˋωˊ ˋωˊ");
