import React, { Fragment } from "react";
import { getAllEvents } from "../../data/dummy";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/evnet-search";

const EventsPage = () => {
    const events = getAllEvents();

    return (
        <div>
            <EventsSearch />
            <EventList items={events} />
        </div>
    );
};

export default EventsPage;
