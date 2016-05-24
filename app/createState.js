import { Observable } from 'rx';

function createState(reducer$, initialState$ = Observable.just({})) {
  return initialState$
      .merge(reducer$)
      .scan((state, reducer) => reducer(state))
      .shareReplay(1);
}

export default createState;
