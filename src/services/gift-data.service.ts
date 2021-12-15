import { BehaviorSubject, Observable } from "rxjs";
import { GiftListItemCreate, GiftListItemModel } from "src/app/models";


export class GiftDataService {
  private currentId = 4;
  private _subject: BehaviorSubject<GiftListItemModel[]>;
  private _data: GiftListItemModel[] = [
    { id: '1', description: 'Bike Mirror', for: 'Jeff', due: '2021-12-15', purchased: false },
    { id: '2', description: 'Nice Hat', for: 'Henry', due: '2021-12-24', purchased: false },
    { id: '3', description: 'L7 Record', for: 'Violet', due: '2021-12-24', purchased: true },
  ];

  // 1. Go get the data from the api.
  constructor() {
    this._subject = new BehaviorSubject<GiftListItemModel[]>(this._data);

  }
  // 2. Create a method that lets any component "observe" (look at, but not modify) that data.

  getData(): Observable<GiftListItemModel[]> {
    return this._subject.asObservable();
  }
  // 3. Add a method that lets a component add a new thing.
  // send that to the "API"
  // When it comes back, add it to our "cache", and tell any component that is observing that list that there is new data.
  // that will be "pushed" to the component (they won't have to 'refresh', it'll just show up.)

  addData(item: GiftListItemCreate): void {
    const itemToAdd = {
      ...item,
      id: (this.currentId++).toString(),
      purchased: false
    } as GiftListItemModel;
    // add it to the cache I have here.
    this._data = [itemToAdd, ...this._data];
    this._subject.next(this._data);
  }
}
