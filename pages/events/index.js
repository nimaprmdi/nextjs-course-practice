import React from "react";
import { getAllEvents } from "../../data/dummy";
import EventList from "../../components/events/event-list";

const EventsPage = () => {
    const events = getAllEvents();

    return (
        <div>
            <EventList items={events} />
        </div>
    );
};

export default EventsPage;
