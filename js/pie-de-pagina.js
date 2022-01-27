var correo = document.querySelector("#correo");
var github = document.querySelector("#github");
var linkedin = document.querySelector("#linkedin");
var telefono = document.querySelector("#telefono");

correo.addEventListener ("click", function(event){
    event.preventDefault();
    alert("maxi.ush.ind@gmail.com");
})

github.addEventListener ("click", function(event){
    event.preventDefault();
    alert("github de maxi");
});

linkedin.addEventListener ("click", function(event){
    event.preventDefault();
    alert("www.linkedin.com/in/maximiliano-veron/");
})

telefono.addEventListener ("click", function(event){
    event.preventDefault();
    alert("+54-2901-412699");
})