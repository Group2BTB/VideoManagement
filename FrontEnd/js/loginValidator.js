// When HTML document load already, it will do all the follow statement	 	
$(document).ready(function() {
    $('#loginForm').bootstrapValidator({
//        live: 'disabled',
        message: 'This value is not valid',//use to display message
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',// show correct symbol when condition is valid
            invalid: 'glyphicon glyphicon-remove',// show incorrect symbol when condition is invalid
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            
            username: {
                message: 'The username is not valid',
                validators: {// check username is exist or not
                    notEmpty: {
                        message: 'The username is required and cannot be empty'
                    }
                }
            },
            password: {
                validators: {// check password is exist or not
                    notEmpty: {
                        message: 'The password is required and cannot be empty'
                    }
                }
            },
            
        }
    });

    // Validate the form manually
    $('#btnLogin').click(function() {
        $('#loginForm').bootstrapValidator('validate');
    });

});