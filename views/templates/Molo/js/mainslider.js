/*global $,jQuery,WOW*/
/*jslint node: true */
/*jshint strict:false */

/*    
    Author          : Mohamed Alaa Abas
    Author URI      : https://themeforest.net/user/m_alaa/portfolio
    Author Facebook : https://www.facebook.com/SoftTheme-413907182303490/
    Author Email    : mohamedalaaabas93@gmail.com .
**/
'use strict';
$(window).on("load", function () {
    $('.body').fadeOut();
    $('body').removeClass('loading-scroll-hiden');
    new WOW().init();
});
//End Loading
$(function () {
    var //HomePage     = $('#homPage'),
        AboutPage    = $('#aboutPage'),
        ServicesPage = $('#servicesPage'),
        contactPage  = $('#contactPage'),
        portfolioPage  = $('#portfolioPage'),
        // Navbar ID
        navHome      = $('#navHome'),
        navAbout     = $('#navAbout'),
        navServices  = $('#navServices'),
        navPortfolio = $('#navPortfolio'),
        navContact   = $('#navContact'),
        // Full Width 
        fullWidth    = $('.toggle-width'),
        //All Section Moved 
        allSectionMoved = $('#contactPage, #servicesPage, #aboutPage, #portfolioPage'),
        //CloseSection
        closeSection    = $('.close-section'),
        closeSectionContent, // Function Close Section
        activeNavBar, // Function To Add Class Active
        selectedClass,// Portfolio 
        NavFilterPortfolio = $(".portfolio-page .nav-filter-portfolio"),// Portfolio 
        FilterPortfolio    = $("#filter-portfolio"),// Portfolio 
        FilterPortfchid    = $("#filter-portfolio div"),// Portfolio 
        allListNavBar      = $('.navbar-expand-md .navbar-nav li'),
        PageSliderComing   = $('.home-page .slide-comingsoon'),
        // Nav Button Click In mobile 
        navbarTogglerMob   = $('.navbar-dark .navbar-toggler');
    
    // Show Home 
    navHome.on('click', function () {
        activeNavBar(navHome);
        // Close Nav In Mobile
        if (navbarTogglerMob.attr('aria-expanded') !== 'false') {
            navbarTogglerMob.trigger('click');
        }
        closeSectionContent();
    });
    // Show About 
    navAbout.on('click', function () {
        activeNavBar(navAbout);
        contactPage.add(ServicesPage).add(portfolioPage).fadeOut(100);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).removeAttr('style');
        // Close Nav In Mobile
        if (navbarTogglerMob.attr('aria-expanded') !== 'false') {
            navbarTogglerMob.trigger('click');
        }
        AboutPage.fadeIn(399);
    });
    // Show Services 
    navServices.on('click', function () {
        activeNavBar(navServices);
        contactPage.add(AboutPage).add(portfolioPage).fadeOut(100);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).removeAttr('style');
        // Close Nav In Mobile
        if (navbarTogglerMob.attr('aria-expanded') !== 'false') {
            navbarTogglerMob.trigger('click');
        }
        ServicesPage.fadeIn(399);
    });
    // Show Portfolio
    navPortfolio.on('click', function () {
        activeNavBar(navPortfolio);
        contactPage.add(AboutPage).add(ServicesPage).fadeOut(100);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).removeAttr('style');
        // Close Nav In Mobile
        if (navbarTogglerMob.attr('aria-expanded') !== 'false') {
            navbarTogglerMob.trigger('click');
        }
        portfolioPage.fadeIn(399);
    });
    // Show Contact
    navContact.on('click', function () {
        activeNavBar(navContact);
        ServicesPage.add(AboutPage).add(portfolioPage).fadeOut(100);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).removeAttr('style');
        // Close Nav In Mobile
        if (navbarTogglerMob.attr('aria-expanded') !== 'false') {
            navbarTogglerMob.trigger('click');
        }
        contactPage.fadeIn(399);
    });
    /*
     * To Width Frame 100%
     *   When Click Icon 
     */
    fullWidth.on('click', function () {
        $(this).parent().parent().parent().parent().parent().toggleClass('full-width');
        $(this).toggleClass('fa-minus fa-plus');
    });
    /**
     ** Close Section 
     */
    closeSection.on('click', function () {
        closeSectionContent();
    });
    
    /**
     ** Filter Portfolio 
     */
    NavFilterPortfolio.on('click', function () {
        // Active Nav Bar 
        NavFilterPortfolio.removeClass('active');
        $(this).addClass('active');
        // End Active 
        selectedClass = $(this).attr("data-rel"); // Select Attr 
        FilterPortfolio.fadeTo(100, 0.1);
        FilterPortfchid.not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            FilterPortfolio.fadeTo(300, 1);
		}, 300);
	});
    // End Filter Portfolio .    
    // Page Slider 
    PageSliderComing.slide({
        'slideSpeed': 7000,
        'isShowArrow': false,
        'isLoadAllImgs': true
    });
    // Magnific Popups . 
    FilterPortfolio.magnificPopup({
		delegate: 'a.magnific-icon',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
   
    // (Plugin And All Function )
    // (Plugin And All Function )
    /*******************
    ** Move Element 
    ****************/
    allSectionMoved.draggable();
    
    // Function Close Section 
    closeSectionContent = function () {
        activeNavBar(navHome);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).fadeOut(100);
        contactPage.add(ServicesPage).add(AboutPage).add(portfolioPage).removeAttr('style');
    };
    // Function To Add Class Active 
    activeNavBar = function (listActive) {
        allListNavBar.removeClass('active');
        listActive.addClass('active');
    };
});