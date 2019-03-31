var v, t, r, s;
v = Number(prompt("What is the velocity v of the car? (km/h)"));
t = Number(prompt("What is the reaction time t of the driver? (minute)"));
r = v * t / 3.6;
s = v * v / 233;
document.getElementById("result").innerHTML = "The reaction distance is " + r.toFixed(0) +
    " meter<br> The stopping distance is " + s.toFixed(0) + " meter<br> The total distance is " + (r + s).toFixed(0) + " m";
console.log("Total distance is " + (r + s).toFixed(0) + " m");