import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  slidersInfo: any;
  sliders: object;
  @Input()category: string;

  constructor() {
    this.slidersInfo = [
      {
        "section": "home",
        "category_id": "promo",
        "images": [
          {
            "url": "/assets/img/gm.png",
            "caption": "Disfruta el 20% off en disfruta solo bananas",
            "action": "/promos/bananas20off"
          },
          {
            "url": "/assets/img/gp.png",
            "caption": "Disfruta el 30% off en disfruta solo manzanas",
            "action": "/promos/bananas40off"
          },
          {
            "url": "/assets/img/gt.png",
            "caption": "Disfruta el 40% off en disfruta solo bananas",
            "action": "/promos/bananas40off"
          },
          {
            "url": "/assets/img/gb.png",
            "caption": "Disfruta el 40% off en disfruta solo bananas",
            "action": "/promos/bananas40off"
          },
        ]
      },
      {
        "section": "Noticias Home",
        "category_id": "news",
        "images": [
          {
            "url": "/assets/img/nw.jpg",
            "caption": "Disfruta el 20% off en disfruta solo bananas",
            "action": "/promos/bananas20off"
          },
          {
            "url": "/assets/img/sla2.jpg",
            "caption": "Disfruta el 30% off en disfruta solo manzanas",
            "action": "/promos/bananas40off"
          },
          {
            "url": "/assets/img/sla3.jpg",
            "caption": "Disfruta el 40% off en disfruta solo bananas",
            "action": "/promos/bananas40off"
          }
        ]
      }
    ]
  }

  ngOnInit() {
    this.sliders = this.slidersInfo.find(slider => slider.category_id == this.category);
    console.log(this.sliders);
  }

}
