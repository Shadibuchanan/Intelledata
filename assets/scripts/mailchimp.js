$(document).ready(function() {
    $('#mc-embedded-subscribe-form').submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        var postData = $(this).serialize(); // Serialize the form data
        var formUrl = $(this).attr('action').replace('/post?', '/post-json?').concat('&c=?'); // Modify the URL for JSONP

        $.ajax({
            type: 'GET', // Using GET for JSONP
            url: formUrl,
            data: postData,
            cache: false,
            dataType: 'jsonp', // Important for cross-domain request
            contentType: "application/json; charset=utf-8",
            error: function(err) {
                // Display error message
                $('#message-container').html('<div class="message-error">Connection error. Please try again later.</div>');
            },
            success: function(data) {
                // Display success or error message from Mailchimp
                if (data.result === "success") {
                    $('#message-container').html('<div class="message-success">Thank you for subscribing!</div>');
                } else {
                    // Mailchimp error messages can be parsed here
                    $('#message-container').html('<div class="message-error">' + data.msg + '</div>');
                }
            }
        });
    });
});