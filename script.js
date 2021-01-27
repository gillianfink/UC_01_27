$(window).scroll(function () {
    if ($(document).scrollTop() == 0) {
        $('#header_nav').removeClass('small');
        $('#header_nav').removeClass('fade');
        // $('body').removeClass('green');
        // $(‘body’).removeClass(‘changeColor’)

    } else {
        $('#header_nav').addClass('small');
        $('#header_nav').addClass('fade');
        // $('body').addClass('green');
        // $(‘body’).addClass(‘changeColor’)
    }
});




$(document) .ready(function() {


var a= true;
    $("#madisontxt").hover(function(){
        if (a==true) {
          
            $( "#madisonimg" ).css("display", "inherit");
            
            a=false;
        }
        else {

            $( "#madisonimg" ).css("display", "none");

            a=true;
            
        }   
    });



var b= true;
    $("#allisontxt").hover(function(){
        if (b==true) {
          
            $( "#allisonimg" ).css("display", "inherit");
            
            b=false;
        }
        else {

            $( "#allisonimg" ).css("display", "none");

            b=true;
            
        }   
    });


var c= true;
    $("#zoetxt").hover(function(){
        if (c==true) {
          
            $( "#zoeimg" ).css("display", "inherit");
            
            c=false;
        }
        else {

            $( "#zoeimg" ).css("display", "none");

            c=true;
            
        }   
    });

 var d= true;
    $("#toritxt").hover(function(){
        if (d==true) {
          
            $( "#toriimg" ).css("display", "inherit");
            
            d=false;
        }
        else {

            $( "#toriimg" ).css("display", "none");

            d=true;
            
        }   
    });


 var e= true;
    $("#gracetxt").hover(function(){
        if (e==true) {
          
            $( "#graceimg" ).css("display", "inherit");
            
            e=false;
        }
        else {

            $( "#graceimg" ).css("display", "none");

            e=true;
            
        }   
    });

var f= true;
    $("#gilliantxt").hover(function(){
        if (f==true) {
          
            $( "#gillianimg" ).css("display", "inherit");
            
            f=false;
        }
        else {

            $( "#gillianimg" ).css("display", "none");

            f=true;
            
        }   
    });

var g= true;
    $("#hawatxt").hover(function(){
        if (g==true) {
          
            $( "#hawaimg" ).css("display", "inherit");
            
            g=false;
        }
        else {

            $( "#hawaimg" ).css("display", "none");

            g=true;
            
        }   
    });

	
}); 