var index = (function(){
    var api = {
        helloWorld: helloWorld
    };

    function helloWorld() {
        alert("Hello World!");
    }


    return api;

}());