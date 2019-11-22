$("#submit").click(function()
{
    var $name = $('#name').val();
    var $contact = $('#contact').val();
    var $mealswipes = $('#mealswipes').val();
    var $starttime = $('#starttime').val();
    var $endtime = $('#endtime').val();
    var $startaorp = $('#startaorp').val();
    var $endaorp = $('#endaorp').val();

    $('#postsTable').append("<tr><td>" + $name + "</td><td>" + $contact + "</td><td style='text-align:center'>" + $mealswipes + "</td><td>" + $starttime + $startaorp + "-" + $endtime + $endaorp + "</td></tr>");
 
    document.getElementById("myForm").reset();
    document.scrollTop(0);
})

window.onload = function() {
 setTimeout (function () {
  scrollTo(0,0);
 }, 100); //100ms for example
}

