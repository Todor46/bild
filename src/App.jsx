import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import FullLoader from "./components/FullLoader/FullLoader";
import Header from "./components/Header/Header";
import { ABOUT, CONTACT, HOME, WORK } from "./constants/routes";

function App() {
  const Home = lazy(() => import("./pages/Home"));
  const About = lazy(() => import("./pages/About"));
  const Work = lazy(() => import("./pages/Work"));
  const Contact = lazy(() => import("./pages/Contact"));
  const NotFound = lazy(() => import("./pages/NotFound"));

  return (
    <div className="text-gray-500">
      <Router>
        <Suspense fallback={<FullLoader />}>
          <Header />
          <Switch>
            <Route path={HOME} component={Home} exact />
            <Route path={ABOUT} component={About} />
            <Route path={`${WORK}/:category?`} component={Work} />
            <Route path={CONTACT} component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
