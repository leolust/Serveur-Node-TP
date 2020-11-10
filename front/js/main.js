const fruitLégumes = $("#fruitLégumes");
console.log(fruitLégumes)
$("#console").hide();

fruitLégumes.click( function(){
    $(".card").hide();
    let test = $.get("http://localhost:3000/products").done(function(data){
        data.forEach(element => {
            console.log(element)
        });
    })
    $("#console").show();
});


