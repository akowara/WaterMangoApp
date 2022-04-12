// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var timeout;
var min = new Array();
for(let i = 1; i<=5; i++){
    $( "#plant"+i+"-btn" ).click(function() {
        $("#plant"+i+"-btn").hide();
        $("#plant"+i+"-stop").show();
        $("#status"+i).html("Watering...");
        timeout = window.setTimeout(function(){
            $("#plant"+i+"-stop").hide();
            $("#status"+i).html("Time since last watering: <30 seconds");
            min[i] = 0;
            window.setTimeout(function(){
                min[i]++;
                $("#plant"+i+"-btn").show();
                $("#status"+i).html("Time since last watering: 1 minute");
              }, 30000);
            window.setInterval(function(){
                if(min[i]/60==6){
                    alert("Plant " + i + " has not been watered for 6 hours");
                }
                $("#plant"+i+"-btn").show();
                if(min[i]<60){
                    $("#status"+i).html("Time since last watering: "+min[i]+" minutes");
                }else{
                    let hours = min[i]/60;
                    $("#status"+i).html("Time since last watering: "+Math.floor(hours)+" hours," +min[i]-(60*hours)+" minutes");
                }
                min[i]++;
              }, 60000);
          }, 10000);
      });
}

for(let i = 1; i<=5; i++){
    $( "#plant"+i+"-stop" ).click(function() {
        clearTimeout(timeout);
        $("#plant"+i+"-btn").show();
        $("#plant"+i+"-stop").hide();
      });
}


