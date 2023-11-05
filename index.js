// ELEMENTS
const APP_ELEMENT = document.getElementById("app")
const BUTTON_ELEMENT = document.getElementById("button-to-push")
const SPINNER_ELEMENT = document.getElementById("loader")
const DISPLAY_ELEMENT = document.getElementById("cat-id")
const PICTURE_ELEMENT = document.getElementById("picture")
//

// HELPERS
const fetchData = async () => {
    // Spinner should be visible
    SPINNER_ELEMENT.style.visibility = "visible"

    // Fetch data
    const url = 'https://cataas.com' + "/cat" + "?json=true";
    const options = {
        method: 'GET',
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);

        // Data should be visible
        DISPLAY_ELEMENT.style.visibility = "visible"
        DISPLAY_ELEMENT.innerText = result._id

        PICTURE_ELEMENT.style.visibility = "visible"
        PICTURE_ELEMENT.src = "https://cataas.com" + "/cat" + `/${result._id}`

        // Spinner should be hidden
        SPINNER_ELEMENT.style.visibility = "hidden"
    } catch (error) {
        console.error(error);
    }
}
    //

    ; (() => {
        fetchData()
        BUTTON_ELEMENT.onclick = fetchData

    })()