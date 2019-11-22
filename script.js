$("#submit").click(function()
{
    var $name = $('#name').val();
    var $contact = $('#contact').val();
    var $mealswipes = $('#mealswipes').val();
    var $starttime = $('#starttime').val();
    var $endtime = $('#endtime').val();
    var $startaorp = $('#startaorp').val();
    var $endaorp = $('#endaorp').val();

    console.log($name);
    $('#postsTable').append("<tr><td>" + $name + "</td><td>" + $contact + "</td><td style='text-align:center'>" + $mealswipes + "</td><td>" + $starttime + $startaorp + "-" + $endtime + $endaorp + "</td></tr>");
})