$('.sidebar-btn-show').click(function(){
    $('.sidebar').animate({marginLeft:0});
});

$('.sidebar-btn-hide').click(function(){
    $('.sidebar').animate({marginLeft:"-100%"});
});