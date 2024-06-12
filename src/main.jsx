import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Loading from "./components/loading/Loading";
import { BrowserRouter } from "react-router-dom";
// import App from "./App.jsx";
const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
);
