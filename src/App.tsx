import React from 'react';
import { Routes, Route } from "react-router-dom";

import HomeComponent from "./routes/home/home.component";
import NavigationComponent from "./routes/navigation/navigation.component";

const App = () => {
  return (
      <Routes>
          <Route path={'/'} element={<NavigationComponent />}>
              <Route index element={<HomeComponent />} />
          </Route>
      </Routes>
  );
}

export default App;
