import { createReducer, on } from '@ngrx/store';
import { CarRepair } from '../model/car-repair.model';

import * as carRepairsListActions from '../actions/car-repairs-list.actions';

export const carRepairsListFeatureKey = 'carRepairsList';

export interface State {
  isFetching: boolean;
  hasError: boolean;
  hasFetched: boolean;
  carRepairs: CarRepair[];
  
}

export const initialState: State = {
  isFetching: false,
  hasError: false,
  hasFetched: false,
  carRepairs: [],
};

export const reducer = createReducer(
  initialState,
);

