import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as fromCarRepairs from '../reducers';
import * as carRepairsListActions from '../actions/car-repairs-list.actions';
import * as fromCarRepairsSelectors from '../selectors/car-repairs.selectors';
import { CarRepair } from '../model/car-repair.model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-car-repairs-list',
  templateUrl: './car-repairs-list.component.html',
  styleUrls: ['./car-repairs-list.component.css'],
})
export class CarRepairsListComponent implements OnInit {
  newRepairs$: Observable<CarRepair[]> = new Observable<CarRepair[]>();
  inProgressRepairs$: Observable<CarRepair[]> = new Observable<CarRepair[]>();
  doneRepairs$: Observable<CarRepair[]> = new Observable<CarRepair[]>();
  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(carRepairsListActions.fetchCarRepairsList());
    this.newRepairs$ = this.store.pipe(select(fromCarRepairsSelectors.selectNewRepairs)); 
    this.inProgressRepairs$ = this.store.pipe(select(fromCarRepairsSelectors.selectInProgressRepairs));
    this.doneRepairs$ = this.store.pipe(select(fromCarRepairsSelectors.selectDoneRepairs));
  }

  public advanceCarRepair(carRepair: CarRepair) {
    console.log("carRepair", carRepair);
  }
}
