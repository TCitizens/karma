import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app';
import registerServiceWorker from './registerServiceWorker';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore, history } from './store/store';
import { WEBSOCKET_SERVER } from "./util/socket";
import io from "socket.io-client";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

//connecting to Socket.IO chat server
const socket = io(WEBSOCKET_SERVER);
socket.on("connect", function () {
  console.log("connected to server!");
});
socket.on("disconnect", function () {
  console.log("disconnected from server!");
});

registerServiceWorker();
