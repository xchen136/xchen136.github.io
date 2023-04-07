

$(window).bind("load", function(){

    //**DESIGN PAGE LAYOUT SETUP**
    var smTabPort = window.matchMedia("(max-width: 750px)");   
    var noHoverState = window.matchMedia("(hover:none)");         
    var designInfo = $("#designInfo").outerHeight(true);
    var designMainHeight = $(".design-content__main").outerHeight(true);
    var designContentWidth = $(".design-content").outerWidth();


    //to place design main section after design info section
    function setDesignMainLocation(){
        if(smTabPort.matches || noHoverState.matches){
            $(".design-content__main").css("top", designInfo);
        } 
    }


    //to preserve a spot for design main section in normal document flow, thus content afterward won't collapse to it
    function setDesignInfoMargin(){
        if(smTabPort.matches || noHoverState.matches){
            $("#designInfo").css("marginBottom", designMainHeight);
        }
    }


    if (matchMedia){
        smTabPort.addListener(setDesignMainLocation);
        setDesignMainLocation();
    }  


    if (matchMedia){
      smTabPort.addListener(setDesignInfoMargin);
      setDesignInfoMargin();
    }


    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //**DESIGN-NAVIGATION**

    //hover arrow to show prev/next project name
    $(".design-nav__link--prev").hover(function(){
        $(".design-nav__prevTitle").css("animation", "moveTitleLeft 3s forwards");
    })

    $(".design-nav__link--prev").mouseleave(function(){
        $(".design-nav__prevTitle").css("animation", "");
    })

    $(".design-nav__link--next").hover(function(){
        $(".design-nav__nextTitle").css("animation", "moveTitleRight 3s forwards");
    })

    $(".design-nav__link--next").mouseleave(function(){
        $(".design-nav__nextTitle").css("animation", "");
    })


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //**SCROLL INDICATOR**

    //hide or reveal vertical scrolling indicator
    $(".design-content").scroll(function(){
        var scrollPos = $(".design-content").scrollTop();                       //the starting point of the scrollable element
        var initContentPos = $(".scroll-indicator").offset().top - scrollPos;   //position of element is relative to the scroll position
        var currentContentPos = $(".scroll-indicator").offset().top;            //position of element will change after scroll

        //hide the scrolling arrow once the user make a tiny drag (notice more content)
        if(scrollPos > 1){
            $(".scroll-indicator").css("opacity",  "0");
        }

        //reveal the scroll arrow once the page scrolls back to initial location
        if(currentContentPos == initContentPos){
            $(".scroll-indicator").css("opacity", "1");
        }
    });


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    //**COLOR-BOX**

    var chopstickColors = ["#FEEFE6"];
    var yusakuColors = ["#FF0000", "#3C58A7", "#68BC45", "#FFF100", "#7C51A1"];
    var ohnyColors = ["#604EA0", "#00A8E2", "#53BB72", "#EC008B"];
    var metrofareColors = ["#231F20", "#414042", "#58595B", "#808285"];
    var forestColors = ["#ED1F24", "#231F20"];
    var sexualOffenseColors = ["#5CA2CD", "#ED7685", "#e0b7a7", "#eab7a9"];
    var skyscraperColors = ["#FCE923", "#D11F32", "#EC0086", "#231F20"];
    var superstudioColors = ["#231F20", "#7E3F98", "#00A550", "#00ADEF"];


    function enlargeColorBall(x){
        if(x.matches){
            $(".card__color-ball").css("width", "4rem");
            $(".card__color-ball").css("height", "4rem");
        }
    }


    function createColor(colorBox, colorArray){
        var i;
        var dx, dy;
        var xs, ys;


        for (i = 0; i < colorArray.length; i++) {
            vx = Math.floor(Math.random()*100);        //random animation duration time in decimal place
            vy = Math.floor(Math.random()*100);
            dx = Math.floor(Math.random()*4)*-1;       //random animation delay time
            dy = Math.floor(Math.random()*4)*-1;

            $("<div>", 
              {
                "class": "card__color-ball",
                css: {
                "position": "absolute",
                "width": "2rem",
                "height": "2rem",
                "border-radius": "50%",
                "background-color": colorArray[i],
                "box-shadow": "0 0 2px 2px " + colorArray[i],
                "animation": "moveX 2." + vx + "s linear " + dx + "s infinite alternate, moveY 4." + vy +"s linear " + dy +"s infinite alternate"
                }
            }).appendTo("." +colorBox); 

            if (matchMedia) {
                var x = window.matchMedia("(max-width: 750px), (hover:none)");    //sm-tab-port
                x.addListener(enlargeColorBall);
                enlargeColorBall(x);
            }   
        }
    } 


    function displayRGB(color){
        $(".card__title").text(color);
        $(".card__title").css("color", "#000000");
        $(".card__content").css("background-color", color);
        $(".card__color-box").css("border", "none");
    }


    function resetColor(){
        $(".card__title").text("colors");
        $(".card__title").css("color", "#707070");
        $(".card__content").css("background-color", "white");
        $(".card__color-box").css("border", "1px solid #D5D7DB");
    }

    function pauseColorAnimation(){
        $(".card__color-ball").css("animation-play-state", "paused");
        displayPlayBtn();
    }


    function playColorAnimation(){
        $(".card__color-ball").css("animation-play-state", "running"); 
        displayPauseBtn();
    }


    function displayPauseBtn(){
        $(".card__btn--pause").css("visibility", "visible");
        $(".card__btn--play").css("visibility", "hidden");
    }


    function displayPlayBtn(){
        $(".card__btn--pause").css("visibility", "hidden");
        $(".card__btn--play").css("visibility", "visible");  
    }


    function assignColorBox(){
        var designName = $(".heading-secondary").text();

        switch(designName){
            case 'chopstick expedition.':
              createColor("card__color-chopstick", chopstickColors);
              break;

            case 'kamekura yusaku.':
              createColor("card__color-yusaku", yusakuColors);
              break;

            case 'ohny.':
              createColor("card__color-ohny", ohnyColors);
              break;

            case 'metrofare refill.':
              createColor("card__color-metrofare", metrofareColors);
              break;

            case 'the forest.':
              createColor("card__color-forest", forestColors);
              break;

            case 'sexual offense.':
              createColor("card__color-sexualOffense", sexualOffenseColors);
              break;

            case 'walking skyscraper.':
              createColor("card__color-skyscraper", skyscraperColors);
              break;

            case 'superstudio.':
              createColor("card__color-superstudio", superstudioColors);
              break;
        }  
    }


    assignColorBox();

    //hover color ball to display it as background color
    $(".card__color-ball").hover(function(){
        var color = $(this).css("background-color");
        displayRGB(color);
        pauseColorAnimation();
        displayPlayBtn();
    });

    $(".card__btn-container").click(function(){
        if($(".card__btn--pause").css("visibility") == "visible"){      //animation running state
            pauseColorAnimation();
        }
        else{
            resetColor(); 
            playColorAnimation(); 
        }
    })

})






