import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import {ToastContainer} from "react-toastify"
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
        <Provider store={store}>
    <BrowserRouter>
    <App />
    <ToastContainer
    theme="dark"
position="top-right"
autoClose={3000}

closeOnClick

pauseOnHover={false}

/>


    </BrowserRouter>
    </Provider>


  </React.StrictMode>
);
