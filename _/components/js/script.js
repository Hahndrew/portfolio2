// Slider Init & Options ----------------------------------------
$(document).ready(function($) {

    // Make sure auto scrolling is disabled on load for
    // tablet and mobile
    window.onload = function() {
        if ($(window).width() < 887) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }
    }


    // Layout fix for short viewport on load -----------------
    // -------------------------------------------------------
    if ($(window).height() < 670) {
        $("#designProcessPageTitle").addClass("shorter-margin");
        $("#skillsList1").addClass("hide");
        $("#skillsList2").addClass("hide");
        $("#skillsList3").addClass("hide");
        $("#skillsList4").addClass("hide");
        $("#skillsList5").addClass("hide");
        $("#skillsList6").addClass("hide");
    } else {
        $("#designProcessPageTitle").removeClass("shorter-margin");
        $("#skillsList1").removeClass("hide");
        $("#skillsList2").removeClass("hide");
        $("#skillsList3").removeClass("hide");
        $("#skillsList4").removeClass("hide");
        $("#skillsList5").removeClass("hide");
        $("#skillsList6").removeClass("hide");
    }


    // Layout fix for short viewport on resize ---------------
    // -------------------------------------------------------
    $(window).resize(function() {

        if ($(window).height() < 670) {
            $("#skillsList1").addClass("hide");
            $("#skillsList2").addClass("hide");
            $("#skillsList3").addClass("hide");
            $("#skillsList4").addClass("hide");
            $("#skillsList5").addClass("hide");
            $("#skillsList6").addClass("hide");
            $("#designProcessPageTitle").addClass("shorter-margin");
        } else {
            $("#skillsList1").removeClass("hide");
            $("#skillsList2").removeClass("hide");
            $("#skillsList3").removeClass("hide");
            $("#skillsList4").removeClass("hide");
            $("#skillsList5").removeClass("hide");
            $("#skillsList6").removeClass("hide");
            $("#designProcessPageTitle").removeClass("shorter-margin");
        }
    });

    // fullPage Init & Options -------------------------------
    // -------------------------------------------------------
    $('#fullpage').fullpage({
        // Layout
        verticalCentered: false,
        // Navigation
        anchors: ['home', 'product-definition', 'research-analysis', 'interaction-design', 'wireframe-prototype', 'usability-evaluation', 'frontend-programming'],
        navigation: true,
        navigationPosition: 'right',
        slidesNavigation: false,
        // Scrolling
        loopHorizontal: false,
        // Design
        controlArrows: false
    });

    // Set austoScrolling to false at tablet and mobile breakpoints
    $(window).resize(function() {

        if ($(window).width() < 887) {
            $.fn.fullpage.setAutoScrolling(false);
        } else {
            $.fn.fullpage.setAutoScrolling(true);
        }

    }); //end of resize()





    // Slider Init & Options -----------------------------------
    // ----------------------------------------------------------
	$('#slider1, #slider2, #slider3, #slider4, #slider5, #slider6').royalSlider({
		// options
		imageScaleMode: 'fit',
		imageScalePadding: 0,
		controlNavigation: 'none',
		autoScaleSlider: true,
		autoScaleSliderWidth: 960,
		autoScaleSliderHeight: 540,
		arrowsNavAutoHide: false,
		arrowsNavHideOnTouch: true,
		transitionSpeed: 350,
		globalCaption: true

	}); //royalSlider

});//ready()