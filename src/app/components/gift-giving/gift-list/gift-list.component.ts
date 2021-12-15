import { Component, OnInit } from '@angular/core';
import { GiftListItemModel } from 'src/app/models';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent {

  giftList: GiftListItemModel[] = [
    { id: '1', description: 'Beer', for: 'Jeff', due: '2021-12-15', purchased: false },
    { id: '2', description: 'XBox Crap', for: 'Henry', due: '2021-12-24', purchased: false },
    { id: '3', description: 'Horror Makeup', for: 'Violet', due: '2021-12-24', purchased: true },
  ];
  constructor() { }

  markPurchased(item: GiftListItemModel) {
    // Do something?
    console.log('They purchased ', item.description);
  }

}
