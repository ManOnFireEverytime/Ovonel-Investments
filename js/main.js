$(document).ready(function(){
    $(window).on('scroll', function(){
        if($(this).scrollTop() > 90){
            $(".navbar").addClass('navbar-shrink');
        }
        else{
            $(".navbar").removeClass('navbar-shrink');
        }
        })

        $('.features-carousel').owlCarousel({
            loop:true,
            margin:0,
            autoplay:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:3,
                }
            }
        })
        
    $.scrollIt({
        topOffset: -50
    });
  $(".nav-link").on('click',function(){
    $(".navbar-collapse").collapse('hide');})

    function toggleTheme(){
       if (localStorage.getItem("ovonel-theme") !== null){
        if (localStorage.getItem("ovonel-theme") === "dark"){
            $('body').addClass('dark');
        }
        else{
            $('body').removeClass('dark');
        }
       }
        updateIcon();
    }
    toggleTheme();

    $(".theme").on('click',function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("ovonel-theme", "dark");
        }
        else{
            localStorage.setItem("ovonel-theme", "light");
        }
        updateIcon();
    })
    function updateIcon(){
        if($("body").hasClass("dark")){
            $(".theme i").removeClass('fa-moon');
            $(".theme i").addClass('fa-sun');
        }
        else{
            $(".theme i").removeClass('fa-sun');
            $(".theme i").addClass('fa-moon');
        }
    }
})

