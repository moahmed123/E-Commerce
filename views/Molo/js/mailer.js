/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */
// Get the form
'use strict';
var form             = $('#ajax-contact'),
    formMessages     = $('#form-messages'), // Get the messages div.
    formData,
    nameMessageEmail = $('#name, #email, #message'),
    formMessagesDone = $('#form-messages');

// Set up an event listener for the contact form
$(form).on('submit', function (event) {
    // Stop the browser from submitting the form.
    event.preventDefault();
    // Serialize the form data.
    formData = $(form).serialize();
    // Submit the form using AJAX.
    $.ajax({
        type: 'POST',
        url: '../mailer.php', // Email For Send It .
        data: formData,
        success: function (response) {
            // you will get response from your php page (what you echo or print)                 
            // Hidden Form 
            form.fadeOut(100);
            // Show Message
            formMessagesDone.append('<strong>Success!</strong> Thank You! Your message has been sent.').delay(100).queue(function (ex) {
                $(this).fadeIn(100);
                ex();
            });
            
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
        }
    });
});