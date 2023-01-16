import React from "react";
import { getEventById } from "../../data/dummy";

const EventsDetails = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);

    if (!event) {
        return <p>No Event Found</p>;
    }

    return (
        <div>
            <h1>Events Details</h1>
        </div>
    );
};

export default EventsDetails;
