import ReactDOM from "react-dom/client";
import App from "./routes/App.jsx";

import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import Store from "./redux/store.js";




ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <Provider store={Store}>
   <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>
  // </React.StrictMode>
);

// ReactDOM.render(
//   <StrictMode>
//     <Provider store={store}> {/* HERE */}
//       <App /> {/* Now, App is wrapped in Provider and hence can read from store */}
//     </Provider>
//   </StrictMode>,
//   document.getElementById('root')
// )
// ReactDOM.render(
//   <RouterProvider router={router}>
//     <Provider store={Store}>
//       <App />
//     </Provider>
//   </RouterProvider>,
//   document.getElementById("root")
// );
