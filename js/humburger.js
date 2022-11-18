$(".openbtn1").click(function () {
    $(this).toggleClass('active');
});
$(document).ready(function(){
    $(".openbtn1").on("click", function(){
        $(".sp-nav").toggle();
    });
});