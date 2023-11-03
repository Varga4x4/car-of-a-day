; (() => {
    const appElement = document.getElementById("app")

    const fetchData = () => {
        // Fetch data from API

        const loader = document.createElement("div")
        loader.className = "loader"

        appElement.appendChild(loader)

        // const settings = {
        // 	async: true,
        // 	crossDomain: true,
        // 	url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla',
        // 	method: 'GET',
        // 	headers: {
        // 		'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
        // 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        // 	}
        // };

        // $.ajax(settings).done(function (response) {
        // 	console.log(response);
        // });

    }
    fetchData()
})()