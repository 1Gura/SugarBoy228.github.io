

$(document).ready(function(){

$(function () {




      function invisibleScroll (){
      document.body.style.overflow = 'hidden';
      }

      function visibleScroll (){
      document.body.style.overflow = 'visible';
      }

  
      $('.open-window')
            .click(function(onmousewheel){
                  $('.window-container').fadeIn(1000, invisibleScroll);
                  $('.window-content').animate({
                        width:'320px',
                        height:'500px'
                  },1000);
            });

            $('.window-container').click(function(event){
                  if(event.target == this){
                        $(this).fadeOut(1000, visibleScroll);
                  }   
            });
            



      $('.window-close').click(function() {     
            $('.window-container').fadeOut(1000);
      });

      $('.window-send').click(function() {     
            $('.window-container').fadeOut(1000);
      });


      //"якоря"
      $('a').on("click", function(e) {
           e.preventDefault();
           var href = $(this).attr('href');
           var offset = $(href).offset().top;        
           $('html, body').animate({
            scrollTop: offset,
           }, 1000);
      });

      //"Модальное окно"
      


     

	function changeFontColor() 
	{
		$('.cap__information').toggleClass('active');
	}

	$('.sidebar-toggle-btn').on('click', function(){
		changeFontColor();
            $('.sidebar-toggle-btn').toggleClass('sidebar-toggle-btn_invisible');
	});

	function sidebar__arrow() 
	{
		$('.cap__information').toggleClass('active');
	}

	$('.sidebar-arrow').on('click', function(){
		sidebar__arrow();
            $('.sidebar-toggle-btn').toggleClass('sidebar-toggle-btn_invisible');
	});

	 $('.slider').slick({
      	arrows:true,
      	dots: true,    	
      	slidesToShow:1,   	
      	speed: 1000,     	
      	autoplay:false,
      	autoplaySpeed:2000,  
            pauseOnFocus:true,
            pauseOnHover:true,
            pauseOnDotsHover:true,  
            variableWidth:true,
            waitForAnimate:false,
          
      	responsive: [
      	{
      		breakpoint:1127,
      		settings: {
      			slidesToShow:2,
                        slidesToScroll:1,
      		}
      	}, {
      		breakpoint: 1010,
      		settings: {
      			slidesToShow:1,
                        slidesToGo:1,
      		}
      		}
      	],
      });
      $('.slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
      	console.log(nextSlide);
      });

       $('.slider').slick('goTo',0);
	});
});



/*function openMenu() {
	document.getElementById("sidebar").classList.toggle('active');
	document.getElementById("toggle-btn").classList.toggle('hide');
}*/
