//$('.land-page').hide();
$('#sec3').hide();
$('table').hide();
$('#timer').hide();
$('span').hide();

var i = 0;
var user_click = 0;
var a;
var b;
var total_click =0; 
var notMatchcount = 0;
var matchCount = 0;
var firstSelectedCard;
var secondSelectedCard;

$('button').click(function () {
    $('h1,h2,button').hide();
    $('#sec3').fadeIn(2000);
    setTimeout(function () {
        $('#sec3').fadeOut(2000);

    }, 2000);

    setTimeout(function () {
        $('table').fadeIn(1000);
        $('.cards').show().css({"transform":"rotateY(180deg)","background-color":"white"});
        setInterval(three_seconds_timer, 1000);
    }, 4000);

    setTimeout(function () {
        $('.cards').css({"transform":"rotateY(360deg)","background-color":"yellow"});
    }, 8000);

    
})
    

$('.cards').click(function(){
    total_click++;
    console.log(total_click);
    if(user_click == 0){
        a = $(this);
        a.css({"transform":"rotateY(180deg)","background-color":"white"});
        firstSelectedCard = a.attr('card');
        user_click++;
    }else{
        b = $(this);
        b.css({"transform":"rotateY(180deg)","background-color":"white"});
        secondSelectedCard = b.attr('card');
        if(firstSelectedCard === secondSelectedCard){
                matchCount++;
                console.log("matched")
                console.log("match count" + matchCount);
                setTimeout(function(){
                    b.css("transform","rotateY(3600deg)");
                    a.hide();
                    b.hide();
                },500);
                $('span').show().html("MATCHED!");
                notMatchcount = 0;
             if(matchCount == 6){
                     $('span').show().html("Horay!.You Have Good Memory!");
             }
        }else {
                notMatchcount++;
                console.log(notMatchcount);
                console.log("not matched")
                $('span').show().html("NOT MATCHED!");
                if(notMatchcount <= 1){
                    setTimeout(function(){
                        a.css({"transform":"rotateY(360deg)","background-color":"yellow"});
                        b.css({"transform":"rotateY(360deg)","background-color":"yellow"});
                        $('span').show().html("Try Again!");
                    },500);
                }else {
                    setTimeout(function(){
                        a.css({"transform":"rotateY(360deg)","background-color":"yellow"});
                        b.css({"transform":"rotateY(360deg)","background-color":"yellow"});
                        $('span').show().html("Better Luck Next Time!");
                        
                    },500);

                    setTimeout(function(){
                        location.reload();
                    },1000);
                }
        }
        user_click = 0;
        
    }
})

    
function three_seconds_timer() {
        i++;
        $('#timer').show();
        if (i <= 3) {
            console.log(i);
            $('#timer').html(i);
        } else {
            $('#timer').hide();
        }
    }

