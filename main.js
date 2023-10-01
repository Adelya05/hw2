///
const redButton = document.getElementById('redButton');
redButton.addEventListener('click', function() {
    setTimeout(function() {
        document.body.style.backgroundColor = 'red';
    }, );
    
    setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 5000);
});

////
const greenButton = document.getElementById('greenButton');
greenButton.addEventListener('click', function() {
    setTimeout(function() {
        document.body.style.backgroundColor = 'green';
    }, 500);

    setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 5000);
});

////
const blueButton = document.getElementById('blueButton');
blueButton.addEventListener('click', function(){
    setTimeout(function() {
        document.body.style.backgroundColor = 'blue';
    } );

    setTimeout(function() {
        document.body.style.backgroundColor = '';
    }, 5000);
});





