import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./app/layout/App";
import registerServiceWorker from "./registerServiceWorker";
import { configureStore } from "./app/store/configureStore";
import ScrollToTop from "./app/common/util/ScrollToTop";

const rootEl = document.getElementById("root");
const store = configureStore();

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop>
          <App/>
        </ScrollToTop>
      </BrowserRouter>
    </Provider>,
    rootEl
  );
}

if (module.hot) {
  module.hot.accept("./app/layout/App", () => {
    setTimeout(render);
  });
}

render();

registerServiceWorker();
