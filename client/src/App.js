import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Loading from "./Loading";
const Nav = lazy(() => import("./Nav"));
const Home = lazy(() => import("./Home"));
const Detail = lazy(() => import("./Detail"));

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Nav />
          <Route path="/" exact component={Home}></Route>
          <Route path="/dapp/:id" exact component={Detail}></Route>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
