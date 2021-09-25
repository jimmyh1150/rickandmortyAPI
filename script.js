//! pass the 2 parameters needed for display function
const display = (imageOne, imageTwo) => {
    //! assign variables to the specific html IDs
    let image1 = document.getElementById("imageOne");
    let image2 = document.getElementById("imageTwo");
    //! pass the variables to the src in each of the IDs in html
    image1.src = imageOne;
    image2.src = imageTwo;
}

//! fetch data from API, in this case, I have added 2 specific ID numbers to fetch from API
fetch('https://rickandmortyapi.com/api/character/2, 183')
    //! get response from json
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    //! get response from json with the ability to view body data
    .then(function(json) {
        console.log(json)
            //! invoke the 'display' function created at top...go back and find a better explanation, self!!!!!!!!
        display(json[0].image, json[1].image);
    });