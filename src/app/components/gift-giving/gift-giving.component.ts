import { Component, OnInit } from '@angular/core';
import { GiftListItemCreate, GiftListItemModel } from 'src/app/models';
import { GiftDataService } from 'src/services/gift-data.service';

@Component({
  selector: 'app-gift-giving',
  templateUrl: './gift-giving.component.html',
  styleUrls: ['./gift-giving.component.css']
})
export class GiftGivingComponent {

  data$ = this.service.getData();

  constructor(private service: GiftDataService) { }


  addGiftItem(item: GiftListItemCreate) {
    this.service.addData(item);
  }

}
