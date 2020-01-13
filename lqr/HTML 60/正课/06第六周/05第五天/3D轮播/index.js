// 样式数组
var states = [
    {
        '$zIndex': 1,
        width: 120,
        height: 150,
        top: 71,
        left: 134,
        $opacity: 0.5
    }
    ,
    {
        '$zIndex': 2,
        width: 130,
        height: 170,
        top: 61,
        left: 0,
        $opacity: 0.6
    }
    ,
    {
        '$zIndex': 3,
        width: 170,
        height: 218,
        top: 37,
        left: 110,
        $opacity: 0.7
    }
    ,
    {
        '$zIndex': 4,
        width: 224,
        height: 288,
        top: 0,
        left: 262,
        $opacity: 0.7
    }
    ,
    {
        '$zIndex': 3,
        width: 170,
        height: 218,
        top: 37,
        left: 468,
        $opacity: 0.7
    }
    ,
    {
        '$zIndex': 2,
        width: 130,
        height: 170,
        top: 61,
        left: 620,
        $opacity: 0.6
    }
    ,
    {
        '$zIndex': 1,
        width: 120,
        height: 150,
        top: 71,
        left: 496,
        $opacity: 0.5
    }
];
console.log(states);
function show() {
    states.forEach(function (item, index) {
        $('li').eq(index).css('z-index', item['$zIndex']).children().css('opacity', item['$opacity']).parent().animate(item, 500);
    });
}
show();
    $('.next').click(function (e) { 
        // 在数组的开始位置添加一个元素
        // 先执行states.pop()
        // states.pop();最后一个元素会返回 
        states.unshift(states.pop());
        show();
    });
    $('.pre').click(function (e) { 
        states.push(states.shift());
        show();
    });
