console.log(window.innerWidth);

var thumbnail = $(".thumbnailz");

function thumbnailClicked() {
//    console.log(this);
    var newHeight = $(this).height();
    console.log(newHeight);
    newHeight = newHeight + 20;
    $(this).height(newHeight);
}

thumbnail.click(thumbnailClicked);

thumbnail.click(function() {
    $(this).animate(
        {
        height: "+=50",
        width: "+=50"
    },
    1000
    );
})


<?php
	if (isset($_POST["submit"])) {
		$name = $_POST['name'];
		$email = $_POST['email'];
		$message = $_POST['message'];
		$human = intval($_POST['human']);
		$from = 'Website Contact Form'; 
		$to = 'beckymarshalldesign@gmail.com'; 
		$subject = 'E-mail from website ';
		
		$body = "From: $name\n E-Mail: $email\n Message:\n $message";
 
		// Check if name has been entered
		if (!$_POST['name']) {
			$errName = 'Please enter your name';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['message']) {
			$errMessage = 'Please enter your message';
		}
		//Check if simple anti-bot test is correct
		if ($human !== 5) {
			$errHuman = 'Your anti-spam is incorrect';
		}
 
// If there are no errors, send the email
if (!$errName && !$errEmail && !$errMessage && !$errHuman) {
	if (mail ($to, $subject, $body, $from)) {
		$result='<div class="alert alert-success">Thank You! I will be in touch</div>';
	} else {
		$result='<div class="alert alert-danger">Sorry there was an error sending your message. Please try again later</div>';
	}
}
	}
?>