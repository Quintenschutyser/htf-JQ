console.log('Client-side code running');
var number = 0;
var text = "Loading button click data."

const button = document.getElementById('myButton');
document.getElementById('myButton').addEventListener('click', function(e) {
    document.getElementById("demo").innerHTML = "Hello World";  
    document.getElementById("counter").innerHTML = `Button was clicked ${number} times`;  
    number++;
    console.log('button was clicked');
});

document.getElementById('HostGame').addEventListener('click', function(e) {
    console.log('Host Button was pressed');
    window.location="/hostsession"
});
document.getElementById('JoinGame').addEventListener('click', function(e) {
    console.log('Join button was pressed');
    window.location="/joinsession"
});