$(function(){
    $(".navbar-toggler").blur(function(event){
        var screenWidth=window.innerWidth;
        if(screenWidth<768)
             {
                $(".navbar-collapse").collapse("hide")
                console.log("XXX")
             }
             else{
                console.log("XXX1",screenWidth)
             }
    })
})