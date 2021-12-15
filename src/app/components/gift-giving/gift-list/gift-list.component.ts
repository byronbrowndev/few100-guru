import { Component, Input } from '@angular/core';
import { GiftListItemModel } from 'src/app/models';

@Component({
  selector: 'app-gift-list',
  templateUrl: './gift-list.component.html',
  styleUrls: ['./gift-list.component.css']
})
export class GiftListComponent {

  @Input()
  giftList: GiftListItemModel[] | null = [];

  constructor() { }

  markPurchased(item: GiftListItemModel) {
    // Do something?
    console.log('They purchased ', item.description);
  }

}
