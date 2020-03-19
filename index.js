const express = require('express');
const axios = require('axios');

// Initialize Express
app = express();
app.use(express.static('public'));
app.use(express.json({limit: '1mb' }));
app.listen(3000);

// Initialize Routes
app.get('/',(req, res) => {
    res.sendFile('index');
});

// Initialize API
app.post('/getCocktail', (req, res) => {
    const searchTerm = req.body.searchTerm;
    const apiURI = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
    const apiCall = apiURI + searchTerm;
    

    const callData = async () => {
        try {
            console.log('Received POST request from client!');
            const response = await axios.get(apiCall);
            const data = response.data.drinks[0];
            return data;
            //console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    const returnData = async () => {
        const recipe = await callData()
        drinkID = recipe.idDrink;
        drinkName = recipe.strDrink;
        drinkImg = recipe.strDrinkThumb;

        res.json({
            Status: '200',
            myDrinkID: recipe.drinkID,
            myDrinkName: drinkName,
            myDrinkImg: drinkImg
        });
    }

    returnData();
    
});

