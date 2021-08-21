import { Route, Switch } from "react-router-dom";

import { Home, Topic1, Topic2, Topic3 } from "./pages";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/topic1" component={Topic1} exact />
        <Route path="/topic2" component={Topic2} exact />
        <Route path="/topic3" component={Topic3} exact />
      </Switch>
    </>
  );
}

export default App;
