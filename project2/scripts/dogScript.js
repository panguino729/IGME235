"use strict";

window.onload = init;

function init() {
    document.querySelector("#search").onclick = getData;
}

function getData() {
    // 1 - main entry point to web service
    const SERVICE_URL = "https://dog.ceo/api/breed/";

    let displayTerm;

    // No API Key required!

    // 2 - build up our URL string
    // not necessary for this service endpoint
    let breed = $("#searchterm").val();
    displayTerm = breed;
    let url = SERVICE_URL + breed + "/images";

    // 3 - parse the user entered term we wish to search
    // not necessary for this service endpoint
    breed = breed.trim();
    breed = encodeURIComponent(breed);

    if (breed.length < 1) return;

    // 4 - update the UI
    document.querySelector("#debug").innerHTML = `<b>Querying web service with:</b> <a href="${url}" target="_blank">${url}</a>`;

    // 5- call the web service, and prepare to download the file
    $.ajax({
        dataType: "json",
        url: url,
        data: null,
        success: jsonLoaded,
        error: function (err) {
            console.error(err.responseTest);
        }
    });

    console.log(url);
};


function jsonLoaded(obj) {
    // 6 - if there are no results, print a message and return
    // Here, we don't get an array back, but instead a single object literal with 2 properties

    if (obj.status != "success") {
        document.querySelector("#content").innerHTML = "<p><i>There was a problem!</i></p>";
        return; // Bail out
    }

    // 7 - if there is an array of results, loop through them
    let results = obj.message;
    let bigString = "<p><i>Here is the result!</i></p>";

    for (let i = 0; i < results.length; i++) {
        let result = results[i];
        // let smallURL = result.images.fixed_width_small.url;
        let smallURL = result;

        let url = result;
        let line = `<div class='result'><a target='_blank' href='${url}'><img src='${smallURL}' title='${result.id}' />`;
        line += `</a></div>`;

        bigString += line;
    }

    // let src = obj.message;

    // 8 - display final results to user
    document.querySelector("#content").innerHTML = bigString;
}	