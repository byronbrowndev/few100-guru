import { Component, OnInit } from '@angular/core';
import { GiftListItemCreate, GiftListItemModel } from 'src/app/models';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css']
})
export class GiftGivingComponent {
  private currentId = 4;
  data: GiftListItemModel[] = [
    { id: '1', description: 'Beer', for: 'Jeff', due: '2021-12-15', purchased: false },
    { id: '2', description: 'XBox Crap', for: 'Henry', due: '2021-12-24', purchased: false },
    { id: '3', description: 'Horror Makeup', for: 'Violet', due: '2021-12-24', purchased: true },
  ];
  constructor() { }


  addGiftItem(item: GiftListItemCreate) {
    const itemToAdd = {
      ...item,
      id: (this.currentId++).toString(),
      purchased: false
    } as GiftListItemModel;
    this.data = [itemToAdd, ...this.data];

  }

}
