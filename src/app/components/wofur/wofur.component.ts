import { Component, OnInit } from '@angular/core';
import { WofurInterface } from '../wofur-interface';

@Component({
  selector: 'app-wofur',
  templateUrl: './wofur.component.html',
  styleUrls: ['./wofur.component.scss']
})
export class WofurComponent implements OnInit {
  name: any;
  data: WofurInterface[] = [
    {
      id: 1,
      title: "Alice in wonderlande",
      deal: 182.96,
    },
    {
      id: 1,
      title : "Freie Verwendung",
      deal: 100,
    },
    {
      id: 2,
      title: "Gebrauchtfahrzeug"
    }, 
    {
      id: 2,
      title: "Neufahrzeug"
    },
    {
      id: 4,
      title: " Umschuldung/Kredit ablösen "
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
