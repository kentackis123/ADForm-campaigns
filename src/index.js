import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import store from './redux/store';

const App = lazy(() => import('./App'));
const Loading = () => <p className="loading">Loading...</p>;

const wrapper = document.getElementById('container');
ReactDOM.render(
    <Provider store={store}>
        <Suspense fallback={<Loading />}>
            <App />
        </Suspense>
    </Provider>,
    wrapper
);
