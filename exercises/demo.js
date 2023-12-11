/* function tester() {
    alert("Hello! I am an alert box!");
}
tester();
*/
// Functions that perform browser interaction are not compatible with Node.js. You can try out other functions as well and observe the output.

function tester() {
    var message;
    if (confirm("Press a button!")) {
        message = "You pressed OK!";
    } else {
        message = "You pressed Cancel!";
    }
    console.log(message);
}
tester();