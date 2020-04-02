$(document).ready(function(){

$(function () {




      function invisibleScroll (){
      document.body.style.overflow = 'hidden';
      }

      function visibleScroll (){
      document.body.style.overflow = 'visible';
      }
      /*function validate () {
            var userName = document.getElementById("userName");
            var userTelephone = document.getElementById("userTelephone");

            if(!userName.value) {
                  userName.style.border = "2px solid red"
                  return false;
            }

             if(!userTelephone.value) {
                  userTelephone.style.border = "2px solid red"
                  return false;
            }
            return true;
      }*/
      

      function add() 
      {
            $('.window_input').toggleClass('empty-list');
      }

      /*$('.window-send').on('click', function(){
            var item = $('.window_input');
            if(item.length == 0)
             {
                  $('.empty-list').show();
            }
            
      });*/

      /*$('.window-send').on('click', function() {
      	var inp1 = $('#userName');
      	var inp2 = $('#userTelephone');
      	if (inp1.length!=0 && inp2.length!=0) {
      		alert("Форма успешно отправлена!");
      	}
      	
      })*/

      

     
      $('.open-window')
            .click(function(onmousewheel){
                  $('.window-container').fadeIn(1000, invisibleScroll);
                  $('.window-content').animate({
                        width:'320px',
                        height:'435px',
                       
                  },1000);
            });

            $('.window-container').click(function(event){
                  if(event.target == this){
                        $(this).fadeOut(1000, visibleScroll);
                  }   
            });

            $('.window-close').click(function(event){
                  if(event.target == this) {
                        $(this).fadeIn(1000, visibleScroll)
                  }
            });

            /*$('.window-send').click(function(event){
                  if(event.target == this) {
                        $(this).fadeIn(1000, visibleScroll)
                  }
            });*/
            



      $('.window-close').click(function() {     
            $('.window-container').fadeOut(1000);
      });

      /*$('.window-send').click(function() {     
            $('.window-container').fadeOut(1000);
      });*/


      //"якоря"
      $('a').on("click", function(e) {
           e.preventDefault();
           var href = $(this).attr('href');
           var offset = $(href).offset().top;        
           $('html, body').animate({
            scrollTop: offset,
           }, 1000);
      });

     
      


     

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
      	autoplay:true,
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
