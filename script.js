$("#submission").click(function()
{
    var $name = $('#name').val();
    var $contact = $('#contact').val();
    var $mealswipes = $('#mealswipes').val();
    var $starttime = $('#starttime').val();
    var $endtime = $('#endtime').val();
    var $startaorp = $('#startaorp').val();
    var $endaorp = $('#endaorp').val();
    var start, end;
    if($name && $contact && $mealswipes && $starttime && $endtime && $startaorp && $endaorp){
        if($startaorp == "pm")
            start = parseInt($starttime) + 12;
        else{
            start = parseInt($starttime);
        }
        
        if($endaorp == "pm")
            end = parseInt($endtime) + 12;
        else{
            end = parseInt($endtime);
        }
        console.log(start);
        console.log(end);
        console.log($startaorp);
        console.log($endaorp);
        if(start < end){
            $('#postsTable').append("<tr><td>" + $name + "</td><td>" + $contact + "</td><td style='text-align:center'>" + $mealswipes + "</td><td>" + $starttime + $startaorp + "-" + $endtime + $endaorp + "</td></tr>");
            document.getElementById("myForm").reset();
            scrollTo(0,0);
            document.getElementById("errorMessage").innerHTML=""
        }
        else{
            document.getElementById("errorMessage").innerHTML="Timings are not valid."           
        }
    }
    else{
        console.log("Field not filled")
        document.getElementById("errorMessage").innerHTML="Please fill all fields."   
    }
                    
})

window.onload = function() {
 setTimeout (function () {
  scrollTo(0,0);
 }, 100); //100ms for example
}

