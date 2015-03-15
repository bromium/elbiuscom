//Contact Form

$('#submit').click(function(){

$.post("//formspree.io/m17021963@gmail.com", $(".contact-form").serialize(),  function(response) {   
 $('#success').html("Thank you! Your message was sent!");
});
return false;

});
