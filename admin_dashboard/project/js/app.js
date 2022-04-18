//side menu
$('.sidebar-btn-show').click(function(){
    $('.sidebar').animate({marginLeft:0});
});

$('.sidebar-btn-hide').click(function(){
    $('.sidebar').animate({marginLeft:"-100%"});
});

//click url
function go(url) {
    setTimeout(function () {
        location.href = `${url}`;
    },500);
}

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
});

//maximize btn
$('.full-btn').click(function(){
    let fullBtn =  $('.full-btn').closest('.card');
   fullBtn.toggleClass('full-screen-btn');
   if(fullBtn.hasClass('full-screen-btn')){
        $(this).html(`<i class="feather-minimize-2"></i>`)
   }else{
        $(this).html(`<i class="feather-maximize-2"></i>`)
   }
});

//scroll
let screenHeight = $(window).height();
let currentMenuHeight = $('.sidebar-list .activeCustom').offset().top;

if(currentMenuHeight > screenHeight*0.8 ){
    $(".sidebar").animate({
        scrollTop:currentMenuHeight-100
    },1000)
}