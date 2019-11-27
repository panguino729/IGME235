"use strict";

let dogBreedList;

//storage stuff
const prefix = "IGME235Project2-";
const breedKey = prefix + "breed"
const subBreedKey = prefix + "subBreed";
const limitKey = prefix + "limit";

window.onload = init;

function init() {
    const storedBreed = localStorage.getItem(breedKey);
    const storedSubBreed = localStorage.getItem(subBreedKey);
    const storedLimit = localStorage.getItem(limitKey);

    // if we find a previously set breed value, display it
    if (storedBreed) {
        $("#searchterm").val(storedBreed);
    } else {
        $("#searchterm").val("not used"); // a default value if breedField is not found
    }

    // if we find a previously set subBreed value, display it
    if (storedSubBreed) {
        $("#subbreed").val(storedSubBreed);
    }
    else {
        $("#subbreed").val("not used");  // a default value if subBreedField is not found
    }

    // if we find a previously set limit value, display it
    if (storedLimit) {
        $("#limit").val(storedLimit);
    } else {
        $("#limit").val("25"); // a default value if limitField is not found
    }

    //Get entire list of breeds and their subbreeds
    $.ajax({
        dataType: "json",
        url: "https://dog.ceo/api/breeds/list/all",
        data: null,
        success: seperateList,
        error: function (err) {
            console.error(err.responseTest);
        }
    })

    //Call getData when the search button is clicked
    document.querySelector("#searchButton").onclick = getData;
}

///Get's the json object
function getData() {
    // 1 - main entry point to web service
    const SERVICE_URL = "https://dog.ceo/api/breed/";

    let displayTerm;
    let url;

    // No API Key required!

    // 2 - build up our URL string
    // not necessary for this service endpoint
    let breed = $("#searchterm").val();
    let subBreed = $("#subbreed").val();
    let limit = $("#limit").val();

    displayTerm = breed;

    //If no breed is entered, remind the user
    if (breed == "" || breed == "not used") {
        document.querySelector("#content").innerHTML = "Please enter a Breed name";
    }

    //If no subBreed is entered, just search Breed
    else if (subBreed == "not used" || subBreed == "") {
        // 3 - parse the user entered term we wish to search
        // not necessary for this service endpoint
        breed = breed.trim();
        breed = breed.toLowerCase();
        breed = encodeURIComponent(breed);
        if (breed.length < 1) return;
        url = SERVICE_URL + breed + "/images/random/" + limit;
    }
    //Search both Breed and subBreed
    else {
        breed = breed.trim();
        breed = encodeURIComponent(breed);
        if (breed.length < 1) return;

        subBreed = subBreed.trim();
        subBreed = encodeURIComponent(subBreed);
        if (subBreed.length < 1) return;
        url = SERVICE_URL + breed + "/" + subBreed + "/images/random/" + limit;
    }

    //Save data from input fields to local storage
    localStorage.setItem(breedKey, breed);
    localStorage.setItem(subBreedKey, subBreed);
    localStorage.setItem(limitKey, limit);

    // 4 - update the UI
    // document.querySelector("#debug").innerHTML = `<b>Querying web service with:</b> <a href="${url}" target="_blank">${url}</a>`;

    // 5- call the web service, and prepare to download the file
    $.ajax({
        dataType: "json",
        url: url,
        data: null,
        success: jsonLoaded,
        error: function (err) {
            document.querySelector("#content").innerHTML = "Please enter a valid Breed and/or Sub Breed";
            console.error(err.responseTest);
        }
    })

    // console.log(url);
};

///Gets a list of all breeds and their respective subBreeds
function seperateList(obj) {
    if (obj.status != "success") {
        document.querySelector("#content").innerHTML = "<p><i>There was a problem!</i></p>";
        return;
    }

    let breedList = Object.keys(obj.message);
}

//Get the results to display on the screen
function jsonLoaded(obj) {
    // 6 - if there are no results, print a message and return
    // Here, we don't get an array back, but instead a single object literal with 2 properties

    if (obj.status != "success") {
        document.querySelector("#content").innerHTML = "<p><i>There was a problem!</i></p>";
        return; // Bail out
    }

    // 7 - if there is an array of results, loop through them
    let results = obj.message;
    let resultMessage = "<p><i>Here is the result!</i></p>";
    let bigString = "";

    for (let i = 0; i < results.length; i++) {
        let result = results[i];
        let smallURL = result;
        let url = result;
        let line = `<a target='_blank' href='${url}'><div class='result' style='background-image: url(${smallURL})'>`;
        line += `</div></a>`;

        bigString += line;
    }

    // 8 - display final results to user
    document.querySelector("#content").innerHTML = bigString;
}	