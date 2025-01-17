//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
const root = ReactDOM.createRoot(document.getElementById("app"))
let contador = 0;
setInterval(() => {
  contador++;
  root.render(<Home time={contador} />);
}, 1000);
