document.addEventListener("DOMContentLoaded",
    function () {
        document.querySelector("#button").addEventListener("click",
            function (e) {
                $ajaxUtils.sendGetRequset("./data.txt",function(request){
                    console.log("name",request.responseText)
                })
            })
    })