import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navigation from './components/navigation/navigation'
import * as serviceWorker from './serviceWorker';
import LandingPage from './components/landing-page';
import Profile from './components/user-profile/Profile';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import {PersistGate} from 'redux-persist/integration/react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const {store , persistor} = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App/>
        </PersistGate>
        
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
