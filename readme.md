




reference from https://medium.com/swlh/reactjs-with-redux-293fa171e3f9

<pre><code>
import { createStore } from 'redux';
import rootReducer from 'reducers/rootReducer';

function configureStore(state = {}) {
  return createStore(rootReducer, state);
}

export default configureStore;

<code></pre>

