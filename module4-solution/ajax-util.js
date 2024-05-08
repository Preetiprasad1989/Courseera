(function(global){
    var ajaxUtils={}
    function getRequestObject(){
        return new XMLHttpRequest()
    }
    ajaxUtils.sendGetRequset=function(requestURL,responseHandler){
        var req=getRequestObject()
        req.onreadystatechange=function(){
            handleResponse(req,responseHandler)
      }
      req.open("GET", requestURL, true)
      req.send(null)
    }
    function handleResponse(req,responseHandler){
        if(req.readyState==4 && req.status==200){
            responseHandler(req)
        }
    }
    global.$ajaxUtils=ajaxUtils
})(window)