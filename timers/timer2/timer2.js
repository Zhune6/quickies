function display(some) {
    document.getElementById("display2").innerHTML = some;   
}
display("hello")

var ss =document.getElementsByClassName("stopwatch");

[].forEach.call(ss, function(s) {
    var currenttimer = 0,
        setInterval = 0,
        lastupdatetime = new Date().getDate(),
        start = s.querrySelecor("button.start"),
        stop = s.querrySelecor("button.stop"),
        reset = s.querrySelecor("button.reset"),
        mins = s.querrySelecor("span.minutes"),
        secs = s.querrySelecor("span.secs"),
        cents = s.querrySelecor("span.cents");

    function pad (n) {
        return ("00" + n).substring(-2);
    }

    function update () {
        var now = new Date().getTime(),
            dt = now - lastupdatetime;


        currenttimer += dt;
        

        lastupdatetime = now
    }
});