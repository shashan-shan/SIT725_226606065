const addCards = (items) => {
    items.forEach(item => {
        let itemToAppend = '<div class="col s12 m4 center-align">' +
            '<div class="card medium"><div class="card-image waves-effect waves-block waves-light">' +
            '<img class="activator" src="' + item.image + '"></div>' +
            '<div class="card-content">' +
            '<span class="card-title activator grey-text text-darken-4">' + item.title +
            '<i class="material-icons right">more_vert</i></span>' +
            '<p><a href="#">' + item.link + '</a></p></div>' +
            '<div class="card-reveal">' +
            '<span class="card-title grey-text text-darken-4">' + item.title +
            '<i class="material-icons right">close</i></span>' +
            '<p class="card-text">' + item.description + '</p>' +
            '</div></div></div>';
        $("#card-section").append(itemToAppend);
    });
};

// Call our GET REST endpoint and build the cards from its data
const getRecipes = () => {
    $.get("/api/recipes", (response) => {
        if (response.statusCode === 200) {
            addCards(response.data);
        }
    });
};

const submitForm = () => {
    let formData = {};
    formData.title = $("#recipe_title").val();
    formData.cookTime = $("#cook_time").val();
    formData.image = $("#recipe_image").val();
    formData.description = $("#recipe_description").val();

    console.log("Recipe Submitted: ", formData);
    M.toast({ html: "Thanks! Your recipe was submitted." });
    $(".modal").modal("close");
};

$(document).ready(function () {
    $(".materialboxed").materialbox();
    $(".modal").modal();
    $("#formSubmit").click(() => {
        submitForm();
    });
    getRecipes();
});