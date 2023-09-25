import React, { Fragment } from "react";
import { createRoot } from 'react-dom/client';

import List from "./containers/List";
import Navbar from "./components/Navbar";

import "bootswatch/dist/lux/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
      <Fragment>
           <Navbar />
          <main className="bg-dark">
              <div className="container">
                  <List/>
              </div>
          </main>
      </Fragment>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>)
