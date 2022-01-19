import React from 'react';
import { render } from 'react-dom';
import 'regenerator-runtime/runtime';
import { Provider } from 'react-redux';
import store from '../../store';
import AddPrepCard from '../../components/AddPrepCard';
import '../../styles/index.css';
import '../../styles/utilities.css';
import './popup.css';

function Popup() {
  return (
    <div className="container--popup">
      <AddPrepCard />
    </div>
  );
}

export default Popup;
render(
  <Provider store={store}>
    <Popup />
  </Provider>,
  document.getElementById('popup'),
);
