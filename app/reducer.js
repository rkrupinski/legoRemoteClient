import { Observable } from 'rx';
import actions from './actions';

const reducer$ = Observable.merge(
  actions.drive$.map(({ direction }) =>
      state => ({ ...state, drive: direction })),
  actions.steer$.map(({ direction }) =>
      state => ({ ...state, steer: direction }))
);

  export default reducer$;
