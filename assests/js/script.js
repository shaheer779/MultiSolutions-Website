//===============================adding the blur effect to the images and zoom to the text===========================

		//selecting all the images
		let images = document.querySelectorAll(".slider-images");
		//selecting the text box which is to be hovered
		let captionContainer = document.querySelectorAll(".carousel-caption");

			//adding the event listener to the text box
			for(let i = 0; i<captionContainer.length; i++) {
				//mouse over or hovering event 
				captionContainer[i].addEventListener("mouseover", ()=> {
					for (let i = 0; i < images.length; i++){
						//zooming in the text
						captionContainer[i].style.transform = "scale(1.05)";
						//bluring the images
						images[i].style.filter = "blur(5px)";

						//adding the transition effect to the filter
						images[i].style.transition = "filter 1s ease-in-out";
					}
				});
			}

			//mouse out event.. mouse leaving the container
			for(let i = 0; i<captionContainer.length; i++) {
				captionContainer[i].addEventListener("mouseleave", ()=> {
					for (let i = 0; i < images.length; i++){
						//zooming out the text
						captionContainer[i].style.transform = "";
						//removing the blur
						images[i].style.filter = "";

						//adding the transition effect to the filter
						images[i].style.transition = "filter 1s ease-in-out";
					}
				});
			}
				window.sr = ScrollReveal();
				sr.reveal('.navbar',{
				  duration:3000,
				  origin:'top' 
				});
				sr.reveal('.container',{
				  duration:2000,
				  origin:'bottom' 
				});
				sr.reveal('.intro-row',{
				  duration:2000,
				  origin:'bottom' 
				});
				sr.reveal('.accordion',{
				  duration:2000,
				  origin:'bottom' 
				});
				sr.reveal('.container-fluid',{
				  duration:2000,
				  origin:'bottom' 
				});
				sr.reveal('.d-flex',{
				  duration:2000,
				  origin:'bottom' 
				});
				// responsive nav bar 
				let nav = document.querySelectorAll(".navbar");
				let introArea = document.querySelectorAll(".introarea-container");
				// let table = document.querySelectorAll(".products-table");
				let socialLinksNav = document.querySelectorAll(".social-links");
				let detailsContainer = document.querySelectorAll(".details-container"); 
				let captionHeading = document.querySelectorAll(".caption-heading");
				let captionText = document.querySelectorAll(".caption-text");
				let imageGalleryContainer = document.querySelectorAll(".gallery-section-container");
				let imageGallery = document.querySelectorAll(".image-gallery");
				let gallerySlider = document.querySelectorAll(".gallery-carousel-image");

				// responsiveness for Andriod/ios 
				if($(window).width() < 750) {
					$(nav).removeClass('fixed-top');
					$(nav).css("background-color", "rgba(0,0,0,0.8)");
					$(introArea).css("display", "none");
					$(socialLinksNav).css("display", "none");
					$(detailsContainer).removeClass('row');
					$(detailsContainer).css("margin", "0");
					$(captionHeading).css("display", "none");
					$(captionText).css("display", "none");
				}
				// responsiveness for ipad pro 
				if($(window).width() < 1400 && $(window).width() >= 700) {
					$(images).css({
						height: "500px"
					});
					$(imageGalleryContainer).css("height", "400px");
					$(imageGallery).css("height", "400px");
					$(gallerySlider).css("height","400px");
				}
				// responsiveness for ipad
				if($(window).width() > 700 && $(window).width() <= 800) {
					$(introArea).css("display", "none");
					$(imageGalleryContainer).css("height", "400px");
					$(imageGallery).css("height", "400px");
					$(gallerySlider).css("height","400px");
					$(socialLinksNav).css("display", "none");
				}

				




