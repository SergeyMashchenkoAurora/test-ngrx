import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as fromCarRepairs from '../reducers';
import * as carRepairsListActions from '../actions/car-repairs-list.actions';
import * as fromCarRepairsSelectors from '../selectors/car-repairs.selectors';

@Component({
  selector: 'app-car-repairs-dashboard',
  templateUrl: './car-repairs-dashboard.component.html',
  styleUrls: ['./car-repairs-dashboard.component.css'],
})
export class CarRepairsDashboardComponent {
  totalNewRepairs$: Observable<number>;
  totalInProgressRepairs$: Observable<number>;
  totalDoneRepairs$: Observable<number>;
  constructor(private store: Store) {
    this.totalNewRepairs$ = this.store.select(fromCarRepairsSelectors.selectTotalOfCarRepairsByState, { state: 'New' });
    this.totalInProgressRepairs$ = this.store.select(fromCarRepairsSelectors.selectTotalOfCarRepairsByState, { state: 'In progress' });
    this.totalDoneRepairs$ = this.store.select(fromCarRepairsSelectors.selectTotalOfCarRepairsByState, { state: 'Done' });
  }
}
