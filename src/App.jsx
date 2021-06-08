import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import { ABOUT, CONTACT, HOME, WORK } from "./constants/routes";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Work = lazy(() => import("./pages/Work"));
  const Contact = lazy(() => import("./pages/Contact"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  return (
    <Router>
      <Suspense fallback="lading...">
        <Header />
        <Switch>
          <Route path={HOME} component={Home} exact />
          <Route path={ABOUT} component={About} />
          <Route path={WORK} component={Work} />
          <Route path={CONTACT} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
