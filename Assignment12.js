var timeFirstLessonHour, timeFirstLessonMinute, timeStartGoToSchoolHour, timeStartGoToSchoolMinute, distance, velocity;
timeFirstLessonHour = Number(prompt("What time do your first lesson start? (hour)"));
timeFirstLessonMinute = Number(prompt("What time do your first lesson start? (minute)"));
timeStartGoToSchoolHour = Number(prompt("What time do you start go to school? (hour)"));
timeStartGoToSchoolMinute = Number(prompt("What time do you start go to school? (minute)"));
distance = Number(prompt("What is the distance from your home to school?"));
velocity = distance / (timeFirstLessonHour + timeFirstLessonMinute / 60 - timeStartGoToSchoolHour - timeStartGoToSchoolMinute / 60);
document.getElementById("result").innerHTML = "The velocity needed that you will be in time at least is " + velocity.toFixed(1) + "km/h";