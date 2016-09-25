$(document).ready(function() {

    $("#redcircle").click(function () {

        // Set the effect type
        var effect = 'slide';

        // Set the options for the effect type chosen
        var options = { direction: 'left' };

        // Set the duration (default: 400 milliseconds)
        var duration = 700;

        $('#contact').toggle(effect, options, duration);
    });

    $("#yellowcircle").click(function () {

        // Set the effect type
        var effect = 'slide';

        // Set the options for the effect type chosen
        var options = { direction: 'left' };

        // Set the duration (default: 400 milliseconds)
        var duration = 700;

        $('#about').toggle(effect, options, duration);
    });
});