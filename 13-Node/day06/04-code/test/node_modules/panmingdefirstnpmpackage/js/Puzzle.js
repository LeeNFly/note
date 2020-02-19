/**
 * Created by Ryan on 8/11/16.
 */
$(function () {
    initGame();
    $("#btnStart").click(startGame);
});

var picOptions = [];
var posOptions = [];
var indexArr = [];

//单步移动
function stepMove(){
    var $div = $(this);
    var index = indexArr[$div.index()];
    var x = Math.floor(index / 3);
    var y = index % 3;
    var $emptyDiv = $($div.parent().children(".empty"));
    for (var i = x-1; i <= x + 1; i++){
        for (var j = y-1; j <= y + 1; j++){
            //处理越界
            if(i < 0 || i >= 3 || j < 0 || j >= 3) continue;
            //跳过自身
            if (i == x && j == y) continue;
            //跳过对角
            if (
                ((i == x - 1) && (j == y - 1)) ||
                ((i == x + 1) && (j == y - 1)) ||
                ((i == x + 1) && (j == y + 1)) ||
                ((i == x - 1) && (j == y + 1))
            ) continue;
            var currIndex = i * 3 + j;
            var emptyIndex = indexArr[$emptyDiv.index()];
            if( emptyIndex== currIndex){
                if(!($emptyDiv.is(":animated"))){
                    indexArr[$emptyDiv.index()]=index;
                    indexArr[$div.index()]=emptyIndex;
                    $emptyDiv.animate(posOptions[index],200);
                    $div.animate(posOptions[emptyIndex],200,function () {
                        if(completeDetect()){
                            $emptyDiv.css(picOptions[8]);
                            $("#btnStart").prop("disabled",false);
                            alert("Congratulations");
                        }
                    });
                }
            }
        }
    }

}

//初始化游戏
function initGame() {
    var $divs = $(".box>div");
    for (var i = 0; i < $divs.length; i++) {
        var div = $divs[i];
        var picPositionX = -i % 3 * 111;
        var picPositionY = -Math.floor(i / 3) * 111;
        var divPositionX = i % 3 * (111 + 1);
        var divPositionY = Math.floor(i / 3) * (111 + 1);
        picOptions.push({
            backgroundImage:"url(images/1.png)",
            backgroundRepeat:"no-repeat",
            backgroundSize:"333px 333px",
            backgroundPosition:picPositionX + "px " + picPositionY + "px"
        });

        posOptions.push({
            top:divPositionY + "px",
            left:divPositionX + "px"
        });

        $(div)
            .css(picOptions[i])
            .css(posOptions[i])
            .attr("data-puzzle", i);
    }
    $divs.click(stepMove);
}

function startGame() {
    var $divs = $(".box>div");
    $divs.last().css("backgroundImage","").addClass("empty");
    randomUpset();
    $(this).prop("disabled",true);
}

//随机打乱
function randomUpset() {
    var $divs = $(".box>div");
    indexArr = [];
    while(true){
        var randomIndex =Math.round(Math.random()*8);
        if(indexArr.indexOf(randomIndex) != -1){
            continue;
        }else{
            indexArr.push(randomIndex);
        }
        if(indexArr.length == $divs.length){
            break;
        }
    }

    for (var i = 0; i < indexArr.length; i++) {
        var index = indexArr[i];
        var $div = $($divs[i]);
        $div.animate(posOptions[index],200);
    }
}

//完成检测
function completeDetect(){
    var result = true;
    for (var i = 1; i < indexArr.length; i++) {
        if(indexArr[i]<indexArr[i-1]){
            result = false;
            break;
        }
    }
    return result;
}
