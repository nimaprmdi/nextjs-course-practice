import React from "react";
import classes from "./event-items.module.css";
import Button from "../ui/button";
import ArrowIcon from "../icons/arrow-right-icons";
import Address from "../icons/address-icons";
import DateIcon from "../icons/date-icon";

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(",", "\n");
    const exploreLink = `/event/${id}`;

    return (
        <li className={classes.item}>
            <img src={`/${image}`} alt="image" />

            <div className={classes.content}>
                <div className={classes.summary}>
                    <div>
                        <h2>{title}</h2>
                    </div>

                    <div className={classes.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>

                    <div className={classes.address}>
                        <Address />
                        <address>{formattedAddress}</address>
                    </div>
                </div>

                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <spam>Explore More</spam>
                        <spam className={classes.icon}>
                            <ArrowIcon />
                        </spam>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
