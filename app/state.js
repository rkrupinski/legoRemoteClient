import { Observable } from 'rx';

import createState from './createState';
import reducer$ from './reducer';

const initialState$ = Observable.just({

});

export default createState(reducer$, initialState$);
