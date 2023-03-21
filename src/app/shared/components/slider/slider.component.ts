import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
// import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  // imports: [NgbCarouselModule, NgIf],
})
export class SliderComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  title = 'ng-carousel-demo';
   
  slides = [
    {img: "https://cdn.eatigo.com/filters:format(webp)/home-banner/8f771ec3-b08a-4d37-8432-4d4c8f20f710.jpeg"},
    {img: "https://www.dineout.co.in/blog/wp-content/uploads/2018/10/WhatsApp-Image-2018-10-18-at-8.06.23-PM.jpeg"},
    {img: "https://d4t7t8y8xqo0t.cloudfront.net/resized/1080X400/pages%2F851%2Fimage20190304125848.jpg"},
    
  ];

  slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true,
  "infinite": false, "autoplay":true, "speed": 300};
   
  slickInit(e:any) {
    // console.log('slick initialized');
  }
     
  breakpoint(e:any) {
    // console.log('breakpoint');
  }
     
  afterChange(e:any) {
    // console.log('afterChange');
  }
     
  beforeChange(e:any) {
    // console.log('beforeChange');
  }


}


/*
import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgFor, NgIf } from '@angular/common';

@Component({
	selector: 'ngbd-carousel-navigation',
	standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
	templateUrl: './carousel-navigation.html',
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class NgbdCarouselNavigation {
	showNavigationArrows = false;
	showNavigationIndicators = false;
	images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}




*/