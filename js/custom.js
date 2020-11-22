$(document).ready(function () {
    $(".carousel").carousel({
        "interval": 6000
    })

    // Body Padding
    $("body").css({
        paddingTop: $(".navbar").innerHeight()
    });

        // Options Colors 
        $(".options-box .colors-options ul li")
        .eq(0).css("background-color", "crimson").end()
        .eq(1).css("background-color", "#0288D1").end()
        .eq(2).css("background-color", "#F44336").end()
        .eq(3).css("background-color", "#673AB7").end();

    // Colors Options Box
    $(".options-box i").click(function () {
        $(this).parent(".options-box").toggleClass(".is-visible");
        
        if ($(this).parent(".options-box").hasClass(".is-visible")) {

            $(this).parent(".options-box").animate({
                left: 0
            }, 500);

        } else {

            $(this).parent(".options-box").animate({
                left: "-200px"
            }, 500);

        };
    })

    // Change Colors 
    $(".options-box .colors-options ul li").on("click", function () {
        $("link[href*='theme']").attr("href", $(this).data("theme"))
        localStorage.setItem("color", "#673AB7, #0288D1, #F44336, crimson")
        localStorage.getItem("color");
    })

    // Loading Page
    $(window).on("load", function() {
        $(".loading-overlay, .loading-overlay .loader").fadeOut(3000, function() {
            $(".loading-overlay").remove()
        });
        $("body").css("overflow", "auto")
    })

    // Scroll To Tp Button
    let toTopButton = $(".scroll-top")

    $(window).scroll(function () {
        $(this).scrollTop() >= $(".about").offset().top ? toTopButton.fadeIn() : toTopButton.fadeOut()
    })

    toTopButton.on("click", function() {
        $("body, html").animate({ scrollTop: 0 }, 500)
    })

});
