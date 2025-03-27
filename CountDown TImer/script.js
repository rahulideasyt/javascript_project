 const endDate = new Date("26 Mar, 2025 03:53:25");
 const startDate = new Date().getTime();

//  function updateTime() {
//     const now = new Date().getTime();

//     const distanceCovered = now - startDate;
//     const distancePending = endDate - now;

//     // calculate days, hrs, mint, secs.
//     // 1 day = 24*60*60*1000 ms

//     const oneDayInMillis = (24*60*60*1000);
//     const oneHrsInMillis = (60*60*1000);
//     const oneMintInMillis = (60*1000);
//     const oneSecsInMillis = (1000);


//     const days = Math.floor(distancePending / oneDayInMillis);
//     const hrs = Math.floor((distancePending % oneDayInMillis/(oneHrsInMillis)));
//     const mint = Math.floor((distancePending % (oneHrsInMillis)/(oneMintInMillis)));
//     const secs = Math.floor((distancePending % (oneMintInMillis)/(oneSecsInMillis)));

//     // papulate in UI

//     document.getElementById("days").innerHTML = days;
//     document.getElementById("hours").innerHTML = hrs;
//     document.getElementById("minute").innerHTML = mint;
//     document.getElementById("seconds").innerHTML = secs;


//     // calculate width percentage for progress bar

//     const totalDistance= endDate - startDate;

//     const percentageDistance = (distanceCovered/totalDistance)*100;

//     //set width for progress bar
//     document.getElementById("progress-bar").style.width = percentageDistance + "%";

//     if(distancePending < 0 ){
//         clearInterval();
//         document.getElementById("countdown").innerHTML = "EXPIRED";
//         document.getElementById("progress-bar").style.width = "100%";

//     }

//  }

let x = setInterval( function updateTime() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;

    // calculate days, hrs, mint, secs.
    // 1 day = 24*60*60*1000 ms

    const oneDayInMillis = (24*60*60*1000);
    const oneHrsInMillis = (60*60*1000);
    const oneMintInMillis = (60*1000);
    const oneSecsInMillis = (1000);


    const days = Math.floor(distancePending / oneDayInMillis);
    const hrs = Math.floor((distancePending % oneDayInMillis/(oneHrsInMillis)));
    const mint = Math.floor((distancePending % (oneHrsInMillis)/(oneMintInMillis)));
    const secs = Math.floor((distancePending % (oneMintInMillis)/(oneSecsInMillis)));

    // papulate in UI

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minute").innerHTML = mint;
    document.getElementById("seconds").innerHTML = secs;


    // calculate width percentage for progress bar

    const totalDistance= endDate - startDate;

    const percentageDistance = (distanceCovered/totalDistance)*100;

    //set width for progress bar
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending < 0 ){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";

    }

 }, 1000);