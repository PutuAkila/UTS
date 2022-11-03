$(document).ready(function(){
    $.ajax({
      url: "API/stats.json",
      method: "GET",
      success: function (result) {
        var infected = result.numbers.infected
        var recovered = result.numbers.recovered
        var fatal = result.numbers.fatal 
        // input to html
        $("#infected").append("<h1>"+infected+" </h1>");
        $("#recovered").append("<h1>"+recovered+" </h1>");
        $("#fatal").append("<h1>"+fatal+" </h1>");
        console.log(result)
      },
    });
})