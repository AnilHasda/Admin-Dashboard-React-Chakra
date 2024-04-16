import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import Transaction from "./Transaction/Transaction.jsx";
import SupportSection from "./supportSection/SupportSection.jsx";
import { RouterProvider,createBrowserRouter } from "react-router-dom";
const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/Transactions",
    element:<Transaction/>
  },
  {
    path:"/SupportSection",
    element:<SupportSection/>
  }
])
ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
);
