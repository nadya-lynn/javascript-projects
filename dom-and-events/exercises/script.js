function init () {
    const missionAbort = document.getElementById("abortMission");
    const button = document.getElementById("liftoffButton");
    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
    button.addEventListener('click', event => {
        paragraph.innerHTML = 'Houston! We have liftoff!';
     });

     missionAbort.addEventListener("mouseover", function(){
        missionAbort.style.background = "red";
     });

     missionAbort.addEventListener("mouseout", function( event ) {
        event.target.style.backgroundColor = "";
     });

     missionAbort.addEventListener("click", function(){
        let abortQuestion = window.confirm("Are you sure you want to abort the mission?");
        if (abortQuestion){paragraph.innerHTML = "Mission aborted! Space shuttle returning home."}
     });
}

window.addEventListener("load", init);
