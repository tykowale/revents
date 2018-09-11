import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import EventDashboard from "../../features/event/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import EventDetailedPage from "../../features/event/eventDetailed/EventDetailedPage";
import PeopleDashboard from "../../features/user/peopleDashboard/PeopleDashboard";
import UserDetailedPage from "../../features/user/userDetailed/UserDetailedPage";
import SettingsDashboard from "../../features/user/settings/SettingsDashboard";
import EventForm from "../../features/event/eventForm/EventForm";
import HomePage from "../../features/home/HomePage";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Container className="main">
          <Route exact path="/" component={HomePage}/>
          <Route path="/events" component={EventDashboard}/>
          <Route path="/event/:id" component={EventDetailedPage}/>
          <Route path="/people" component={PeopleDashboard}/>
          <Route path="/profile/:id" component={UserDetailedPage}/>
          <Route path="/settings" component={SettingsDashboard}/>
          <Route path="/createEvent" component={EventForm}/>
        </Container>
      </div>
    );
  }
}

export default App;
