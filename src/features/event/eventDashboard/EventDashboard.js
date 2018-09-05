import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import cuid from "cuid";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";

const events = [
  {
    id: "1",
    title: "Trip to Tower of London",
    date: "2018-03-27",
    category: "culture",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: "Bob",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/20.jpg",
    attendees: [
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      },
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      }
    ]
  },
  {
    id: "2",
    title: "Trip to Punch and Judy Pub",
    date: "2018-03-28",
    category: "drinks",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.",
    city: "London, UK",
    venue: "Punch & Judy, Henrietta Street, London, UK",
    hostedBy: "Tom",
    hostPhotoURL: "https://randomuser.me/api/portraits/men/22.jpg",
    attendees: [
      {
        id: "b",
        name: "Tom",
        photoURL: "https://randomuser.me/api/portraits/men/22.jpg"
      },
      {
        id: "a",
        name: "Bob",
        photoURL: "https://randomuser.me/api/portraits/men/20.jpg"
      }
    ]
  }
];

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

  render() {
    const { selectedEvent } = this.state;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList onEventEdit={this.handleOpenEvent} events={this.state.events}/>
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