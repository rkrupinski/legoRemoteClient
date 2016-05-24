import { Observable } from 'rx';

import constants from './constants';
import createState from './createState';
import reducer$ from './reducer';

const initialState$ = Observable.just({
  drive: constants.NEUTRAL,
  steer: constants.NEUTRAL,
});

export default createState(reducer$, initialState$);
