import { Subject } from 'rx';

const actions = {
  drive$: new Subject(),
  steer$: new Subject(),
};

export default actions;
