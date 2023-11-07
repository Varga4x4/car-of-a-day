const APP_ELEMENT = document.getElementById("app")

    ; (() => {
        const fetchData = () => {
            // Fetch data from API

            const loader = document.createElement("div")
            loader.id = "loader"

            APP_ELEMENT.appendChild(loader)
        }
        fetchData()
    })()