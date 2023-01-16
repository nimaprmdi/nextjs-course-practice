import React, { Fragment } from "react";
import { getEventById } from "../../data/dummy";
import { useRouter } from "next/router";
import EventSummary from "../../components/events/event-summary";
import EventLogistics from "../../components/events/event-logistics";
import EventContent from "../../components/events/event-content";

const EventsDetails = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No Event Found</p>;
    }

    return (
        <div>
            <EventSummary title={event.title} />
            <EventLogistics date={event.date} address={event.location} image={event.image} imageAlt={event.title} />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </div>
    );
};

export default EventsDetails;
