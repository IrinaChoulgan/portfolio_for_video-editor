import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { ColorRing } from  'react-loader-spinner'
import './18n';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Suspense fallback={<ColorRing
        visible={true}
        height="100"
        width="100"
        ariaLabel="blocks-loading"
        wrapperStyle={{}}
        wrapperClass="blocks-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      />}>
        <App />
    </Suspense>
);
