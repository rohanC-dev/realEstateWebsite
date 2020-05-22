$(document).ready(function () {
    //BY DEFUALT
    $("input[style = 'display: none;']").val("Any");
    $("input[class='searchMethod']").val("City");
    //

    var buttonElement;
    $(".btn.dropdown-toggle").on("click", function () {
        buttonElement = $(this);
    });

    $(".dropdown-item").click(function () {
        buttonElement.html($(this).text());
        if($(this).parent().hasClass("searchMethod")){
            $("input[class='searchMethod']").val($(this).text());
        }else if($(this).parent().hasClass("typeOfHome")){
            $("input[class='typeOfHome']").val($(this).text());
        }else if($(this).parent().hasClass("numOfBeds")){
            $("input[class='numOfBeds']").val($(this).text());
        }else if($(this).parent().hasClass("numOfBaths")){
            $("input[class='numOfBaths']").val($(this).text());
        }else if($(this).parent().hasClass("minPrice")){
            $("input[class='minPrice']").val($(this).text());
        }else if($(this).parent().hasClass("maxPrice")){
            $("input[class='maxPrice']").val($(this).text());
        }else if($(this).parent().hasClass("status")){
            $("input[class='status']").val($(this).text());
        }
    });
});