let nav=document.querySelector("#navbar");
let back_top=document.querySelector(".back_top");
let download_section=document.getElementById("download_section");


window.addEventListener('scroll',function(){
    scroll_value=window.scrollY;
    if(scroll_value>150){
        nav.classList.add("sticky");
        back_top.classList.add("show");
    }else {
        nav.classList.remove("sticky");  
        back_top.classList.remove("show");  
    }


    // for download section
    if(scroll_value>9500 && scroll_value<10400 ){
        download_section.classList.add("background")
    }else  {
        download_section.classList.remove("background")  
    }
    

    

})


// back to top 
back_top.addEventListener('click',function(){
    
    scrollTo({
        top:0,
    })
})


//Banner Slider 
$(function(){
    $('.slider_items').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,
        arrows:false,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    });
});

//Companies slider 
$(function(){
    $('.companies_slider_items').slick({
        slidesToShow:5,
        slidesToScroll:1,
        arrows:false,
        autoplay:true,
        autoplaySpeed:2000,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            }
            
          ]
    });

    // About app counter up 
    $('.counter_up').counterUp({
        time:3000,
        delay:10,
    })



    // Customer Slider 
    $('.customer_slider_items').slick({
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:1000,
        arrows:false,
        dots:true,
        infinite:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    });



    //Interface Slider 
    $('.interface_slider_items').slick({
        slidesToShow:5,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:900,
        arrows:false,
        dots:true,
        infinite:true,
        centerMode:true,
        centerPadding:"",
        focusOnSelect:true,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
              }
            },
            {
              breakpoint:575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode:false,
              }
            }
            
          ]
    })
});

//for Aos Plugin 
AOS.init();