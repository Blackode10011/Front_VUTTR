import { combineReducers } from 'redux';

import authorization from './authorization.js';
import tools from './tools';

export default combineReducers({
  authorization,
  tools,
});
