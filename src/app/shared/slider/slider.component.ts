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
        "category_id": "promo.id",
        "images": [
          {
            "url": "https://picsum.photos/200/354",
            "caption": "Disfruta el 20% off en disfruta solo bananas",
            "action": "/promos/bananas20off"
          },
          {
            "url": "https://picsum.photos/200/300",
            "caption": "Disfruta el 30% off en disfruta solo manzanas",
            "action": "/promos/bananas40off"
          },
          {
            "url": "https://picsum.photos/200/305",
            "caption": "Disfruta el 40% off en disfruta solo bananas",
            "action": "/promos/bananas40off"
          }
        ]
      },
      {
        "section": "Noticias Home",
        "category_id": "news.id",
        "images": [
          {
            "url": "https://picsum.photos/200/378",
            "caption": "Disfruta el 20% off en disfruta solo bananas",
            "action": "/promos/bananas20off"
          },
          {
            "url": "https://picsum.photos/200/309",
            "caption": "Disfruta el 30% off en disfruta solo manzanas",
            "action": "/promos/bananas40off"
          },
          {
            "url": "https://picsum.photos/200/320",
            "caption": "Disfruta el 40% off en disfruta solo bananas",
            "action": "/promos/bananas40off"
          }
        ]
      }
    ]
  }

  ngOnInit() {
    this.slidersInfo = this.slidersInfo.find(slider => slider.caregory_id == this.category);
  }

}
