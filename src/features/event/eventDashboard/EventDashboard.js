import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";
import { createEvent, updateEvent, deleteEvent } from "../eventActions";

const mapState = (state) => ({
  events: state.events
});

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
};

class EventDashboard extends Component {

  state = {
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
    this.props.updateEvent(updatedEvent);

    this.setState({
      isOpen: false,
      selectedEvent: null
    });
  };

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";

    this.props.createEvent(newEvent);

    this.setState({
      isOpen: false
    });
  };

  handleDeleteEvent = (eventId) => () => {
    this.props.deleteEvent(eventId);
  };

  render() {
    const { selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} onEventEdit={this.handleOpenEvent}
                     events={events}/>
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

export default connect(mapState, actions)(EventDashboard);