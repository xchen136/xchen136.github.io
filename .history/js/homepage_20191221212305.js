

$(window).bind("load", function(){

    //**HOMEPAGE**

    //set the width of <main> to center the content
    var header_width = document.getElementById("home-header").offsetWidth;
    var nav_width = document.getElementById("home-nav").offsetWidth;
    var document_width = $(document).width();
    var content_width = document_width - header_width - nav_width;

    $(".content").css("width", content_width);


    //hover cartoon avatar to reveal photo
    $(".header__profile-avatar").hover(function(){
        $(".header__profile-logo").css("opacity", "0");
        $(".header__profile-photo").css("opacity", "1");
    })

    $(".header__profile-avatar").mouseleave(function(){
        $(".header__profile-logo").css("opacity", "1");
        $(".header__profile-photo").css("opacity", "0");
    })


    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //click "email" icon to copy email onto clipboard

    var clipboard = new ClipboardJS('.header__profileItem--email');

    clipboard.on('success', function(e) {
        console.log(e);
    });

    clipboard.on('error', function(e) {
        console.log(e);
    });


    //click "email" icon to change tooltip text

    $(".header__profileItem--email").click(function(){
        $(this).attr("tooltip", "email copied to clipboard!");
    })



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //set all home tabs to gray
    function resetTabs(){
        var homeTabs = $(".section-tab__item");
        homeTabs.each(function(){
            $(this).css("background-color", "#D5D7D8");
        })
    }

    //scroll to change current section's tab to yellow
    $(document).scroll(function() {
        var top1 = $("body").offset().top;
        var top2 = $(".section-design").offset().top;
        var top3 = $(".section-develop").offset().top;
        var scrollPos = $(document).scrollTop();

        resetTabs(); 
        if (scrollPos >= top1 && scrollPos < top2) {
            $(".section-tab__item--about").css("background-color", "#FBFFB9");
        } 
        else if (scrollPos >= top2 && scrollPos < top3) {
            $(".section-tab__item--design").css("background-color", "#FBFFB9");
        } 
        else if (scrollPos >= top3) {
            $(".section-tab__item--develop").css("background-color", "#FBFFB9");
        }
    });

})//executes js code after DOM is ready

