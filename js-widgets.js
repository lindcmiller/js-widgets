
//text box with maximum character entry and countdown


jQuery(document).ready(function($) {
    updateCountdown();
    $('.message').change(updateCountdown);
    $('.message').keyup(updateCountdown);
});

function limitText(field, maxChar){
    $(field).attr('maxlength',maxChar);
}

function updateCountdown() {
    var remaining = 100 - jQuery('.message').val().length;
    jQuery('.countdown').text(remaining + ' characters remaining');
};
