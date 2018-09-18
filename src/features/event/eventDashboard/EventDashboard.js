import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";

class EventDashboard extends Component {

  state = {
    events: events,
    isOpen: false,
    selectedEvent: null
  };

  handleFormClick = (isOpen) => () => {
    this.setState({
      selectedEvent: null,
      isOpen: isOpen
    });
  };

  handleOpenEvent = (eventToOpen) => () => {
    this.setState({
      selectedEvent: eventToOpen,
      isOpen: true
    });
  };

  handleUpdateEvent = (updatedEvent) => {
    this.setState({
      events: this.updateEvent(updatedEvent),
      isOpen: false
    });
  };

  updateEvent = (updatedEvent) => {
    return this.state.events.map(event => {
      if (event.id === updatedEvent.id) {
        return Object.assign({}, updatedEvent);
      }

      return event;
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    const updatedEvents = [...this.state.events, newEvent];

    this.setState({
      events: updatedEvents,
      isOpen: false
    });
  };

  handleDeleteEvent = (eventId) => () => {
    const updatedEvents = this.state.events.filter(e => e.id !== eventId);

    this.setState({
      events: updatedEvents
    });
  };

  render() {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventEdit={this.handleOpenEvent} events={this.state.events}/>
        </Grid.Column>

        <Grid.Column width={6}>
          <Button onClick={this.handleFormClick(true)} positive content="Create Event"/>
          {this.state.isOpen &&
          <EventForm selectedEvent={selectedEvent} handleCancel={this.handleFormClick(false)}
                     updateEvent={this.handleUpdateEvent}
                     createEvent={this.handleCreateEvent}/>}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;