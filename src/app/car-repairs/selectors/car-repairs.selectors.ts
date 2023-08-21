import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCarRepairs from '../reducers/index';
import * as fromCarRepairsList from '../reducers/car-repairs-list.reducer';

// 'New' | 'In progress' | 'Done'
export const selectIsFetching = undefined; // TODO: implement

export const selectIsFetchingNeeded = undefined; // TODO: implement

export const selectCarRepairsState = createFeatureSelector<fromCarRepairsList.State>(
  fromCarRepairsList.carRepairsListFeatureKey
);


export const selectAllCarRepairs = createSelector(
  selectCarRepairsState,
  state => state.carRepairs // Replace with your actual property name
);
export const selectNewRepairs = createSelector(
  selectAllCarRepairs,
  carRepairs => carRepairs.filter(repair => repair.state === 'New')
);

export const selectInProgressRepairs = createSelector(
  selectAllCarRepairs,
  carRepairs => carRepairs.filter(repair => repair.state === 'In progress')
);

export const selectDoneRepairs = createSelector(
  selectAllCarRepairs,
  carRepairs => carRepairs.filter(repair => repair.state === 'Done')
);


export const selectTotalOfNewCarRepairs = createSelector(
  selectNewRepairs,
  newRepairs => newRepairs.length
);

export const selectTotalOfInProgressCarRepairs = createSelector(
  selectInProgressRepairs,
  inProgressRepairs => inProgressRepairs.length
);

export const selectTotalOfDoneCarRepairs = createSelector(
  selectDoneRepairs,
  doneRepairs => doneRepairs.length
);

