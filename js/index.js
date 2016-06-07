$(document).ready(function(){

    $('#stopButton').click(switchRed);
    $('#slowButton').click(switchYellow);
    $('#goButton').click(switchGreen);


    function switchRed() {
        turnOff();
        $('#stopLight').addClass('red');
    }

    function switchYellow() {
        turnOff();
        $('#slowLight').addClass('yellow');
    }

    function switchGreen() {
        turnOff();
        $('#goLight').addClass('green');
    }

    function turnOff() {
        $('.bulb').removeClass('red');
        $('.bulb').removeClass('yellow'); 
        $('.bulb').removeClass('green');        
        $('.bulb').addClass('off');
    }


});
