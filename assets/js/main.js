//Contact Form

$('#submit').click(function(){

//$.post("//formspree.io/m17021963@gmail.com", $(".contact-form").serialize(),  function() {   
// $('#success').html("Thank you! Your message was sent!");
//});
$.ajax({
    url: "//formspree.io/m17021963@gmail.com", 
    method: "POST",
    data: $(".contact-form").serialize(),
    dataType: "json",
	success: function() {
	 $('#success').html("Thank you! Your message was sent!");
	}
});
$(".contact-form")[0].reset();
return false;

});
