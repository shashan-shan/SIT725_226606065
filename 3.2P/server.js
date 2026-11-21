var express = require("express");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Our "database" for now - recipe data served by the REST API
const recipeList = [
    {
        title: "Butter Chicken",
        image: "images/butter-chicken.jpg",
        link: "About Butter Chicken",
        description: "Creamy tomato curry with tender chicken. Cook time: 45 mins. Serves 4."
    },
    {
        title: "Margherita Pizza",
        image: "images/pizza.jpg",
        link: "About Margherita Pizza",
        description: "Thin crust, fresh mozzarella, basil and San Marzano tomato sauce. Cook time: 25 mins."
    },
    {
        title: "Pancake Stack",
        image: "images/pancakes.jpg",
        link: "About Pancakes",
        description: "Fluffy buttermilk pancakes with maple syrup and berries. Cook time: 20 mins."
    }
];

// GET endpoint - returns all recipes as JSON
app.get("/api/recipes", (req, res) => {
    res.json({ statusCode: 200, data: recipeList, message: "Success" });
});

var port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log("App running at http://localhost:" + port);
});
