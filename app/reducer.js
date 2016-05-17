import { Observable } from 'rx';
import actions from './actions';

const reducer$ = Observable.merge(
  actions.input$.map(({ type }) =>
      state => ({ ...state, inputType: type })),
);

export default reducer$;
