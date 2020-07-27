window.onload = function () { if (window.jQuery) { $(document).ready(function () { $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show(); $("body").append("<div class='overlay'></div>"); $(".navbar-toggle, .navbar-toggler").on("click", function () { $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass")); $(".sideMenu, .overlay").toggleClass("open"); $(".overlay").on("click", function () { $(this).removeClass("open"); $(".sideMenu").removeClass("open") }) }); $("body").on("click", ".sideMenu.open .nav-item", function () { if (!$(this).hasClass("dropdown")) { $(".sideMenu, .overlay").toggleClass("open") } }); $(window).resize(function () { if ($(".navbar-toggler").is(":hidden")) { $(".sideMenu, .overlay").hide() } else { $(".sideMenu, .overlay").show() } }) }) } else { console.log("sidebarNavigation Requires jQuery") } }


window.addEventListener("load", function () {
    alert('Welcome to our site')
}
)


function myFunction() {
    var txt;
    if (confirm('Thank you for subscribing')) {
        txt = "Thank you for subscribing";
    }

    document.getElementById("submit").innerHTML = txt;

} 

function myFunction() {
    var txt;
    if (confirm('Thank you for subscribing')) {
        txt = "Thank you for subscribing";
    }

    document.getElementById("submitForm").innerHTML = txt;

} 

 
