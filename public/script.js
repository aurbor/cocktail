function getSearchTerm() {
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
    
    fetch('/getCocktail', fetchOptions).then(async res => {
        json = await res.json();
        console.log(json);

        document.getElementById('drinkName').innerHTML = json.myDrinkName;
        document.getElementById('drinkImg').innerHTML = "<img src=\"" + json.myDrinkImg + "\" >";
    })
};
