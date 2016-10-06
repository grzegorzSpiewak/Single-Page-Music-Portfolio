/*Equalizer animation */

$.fn.equalizerAnimation = function(speed){
    var $equalizer = $(this);
    setInterval(function(){
        $equalizer.find('span').eq(0).css({height:randomBetween(20,80)+'px'});
        $equalizer.find('span').eq(1).css({height:randomBetween(30,100)+'px'});
        $equalizer.find('span').eq(2).css({height:randomBetween(40,100)+'px'});
        $equalizer.find('span').eq(3).css({height:randomBetween(30,90)+'px'});
        $equalizer.find('span').eq(4).css({height:randomBetween(30,70)+'px'});
    },speed);
    $equalizer.on('click',function(){
        $equalizer.toggleClass('paused');
    });
}
$('.equalizer').equalizerAnimation(180);

function randomBetween(min, max) {
    if (min < 0) {
        return min + Math.random() * (Math.abs(min)+max);
    } else {
        return min + Math.random() * max;
    }
}

/*Mobile navigation*/

$(".mobile").on("click",function(){
  console.log("ok");
  $("nav ul").toggleClass("showing");  //pokazuje menu
  $('.bar').toggleClass('animate');   //animacja hamburger-menu
});

/*Contact Form*/
// Input Lock
