import Container from "react-bootstrap/Container"; 
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Switch, Route } from "react-router-dom";
import Account from "./Account";
import FreeComponent from "./FreeComponent";
import AuthComponent from "./AuthComponent";
import ProtectedRoutes from "./ProtectedRoutes";

import './App.css';

function App() {
  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>React Authentication</h1>
        
        <section id="navigation">
          <a href="/">Home</a>
          <a href="/free">Free Component</a>
          <a href="/auth">Auth Component</a>
        </section>
      </Col>  
      </Row>

      { /* create routes here */}
      <Switch>
          <Route exact path="/" component={Account} />
          <Route exact path="/free" component={FreeComponent} />
          <ProtectedRoutes path="/auth" component={AuthComponent} />
      </Switch>
    </Container>
  );
}

export default App;

// To start server: npm start 
