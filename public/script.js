function async getSearchTerm() {
    const searchTerm = document.getElementById("searchBox").value;
    // console.log(searchTerm);

    const data = { searchTerm };

    const fetchOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }

    const apiGet = await fetch('/getCocktail', fetchOptions);
    const drinkData = await apiGet.json();
    console.log(drinkData);
    });
}
