// third-party imports
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  RouterProvider,
  redirect,
} from "react-router-dom";

// imports
import Home from "./Home";
import Game from "./Game";

// CSS
import "./index.css";

// Determine the base URL dynamically
const baseUrl = process.env.PUBLIC_URL || '/';

const router = createHashRouter([
  {
    path: '/',
    element: <Home/>,
  },

  {
    path: 'game/:gameId/:playerId',

    // redirect to the home page if the game ID or player ID is missing
    loader: async ({ params }) => {

      // check if the game ID or player ID is missing
      if (!params.gameId || !params.playerId) {
        return redirect('/')
      }

      // loader does not need to return anything, the parameters can be retrieved with getParams()
      return null;
    },

    element: <Game/>,
  },

  {
    path: '*',

    // basic handling for 404 errors
    element: <div>Page Not Found</div>,
  },
  
], { basename: baseUrl });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);