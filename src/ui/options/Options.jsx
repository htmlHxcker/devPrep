import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { Formik, Field, Form } from 'formik';
import 'regenerator-runtime/runtime';
import '../../styles/utilities.css';
import '../../styles/index.css';
import './options.css';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { getSettings, setSettings } from '../../reducers/settingsReducer';
import store from '../../store';

function Options() {
  const settings = useSelector((state) => state.settings);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSettings());
    console.log(settings);
  }, [dispatch]);
  return (
    <div>
      <Formik
        initialValues={settings}
        onSubmit={async (values) => {
          dispatch(setSettings(values));
        }}
      >
        <Form className="container container--options">
          <div className="title flex">
            <h1 className="ff-cardo fs-900">Settings</h1>
            <button type="submit" className="primary-btn">
              Save Settings
            </button>
          </div>

          <div className="general-settings bg-carousel-pink panel">
            <h2>General</h2>

            <label htmlFor="username">
              Username:
              <Field
                name="username"
                type="text"
                placeholder="Peter Pan"
                className="text-input username"
              />
            </label>
          </div>
          <div className="import-options bg-carousel-pink panel">
            <h2>Sync Options</h2>
            <div id="radio-group">Sync PrepCards across Browsers?</div>
            <div role="group" aria-labelledby="radio-group">
              <label>
                <Field type="radio" name="sync" value="YES" />
                Yes
              </label>
              <label>
                <Field type="radio" name="sync" value="NO" />
                No
              </label>
            </div>
          </div>
          <div className="extras bg-carousel-pink panel">
            <h2>Extras</h2>
            <button className="primary-btn contribute-btn text-seashell" type="button">
              <a
                href="https://github.com/htmlHxcker/PrepCard"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contribute on GitHub
              </a>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Options;
render(
  <Provider store={store}>
    <Options />
  </Provider>,
  document.getElementById('options'),
);
