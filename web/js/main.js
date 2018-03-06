$(document).ready(function(){

    $( "#video" ).hide();
    $( ".overlay" ).hide();

    $("#my-btn").click(function(){
        $( "#video" ).show();
        $( ".overlay" ).show();
        $( ".Page").hide();
        $( ".cols7" ).hide();
        $( ".cols5" ).hide();
        $( h1 ).hide();

    });

    $("#my-btn2").click(function(){
        $(".hidden" ).removeClass();
    });

    $("#cross-close").click(function(){
        $( "#video" ).hide();
        $( ".overlay" ).hide();
        $( ".Page" ).show();
        $( ".cols7" ).show();
        $( ".cols5" ).show();
        $( h1 ).show();

    });

});


    var x = document.getElementById("bgvid");

    function getCurTime() {
    alert(x.currentTime);
}

    function setCurTime() {
    x.currentTime = 0;
}
