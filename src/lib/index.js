/* eslint-disable import/prefer-default-export */
import { polyfill } from "mobile-drag-drop";
import './style/index.css';
import ReactDnd from './components/ReactDnd.react';

// Mobile drag polyfill
polyfill();
window.addEventListener( 'touchmove', function() {});

export {
    ReactDnd
};
