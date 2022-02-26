import { Fragment } from "react";
import classes from './MeetupDetail.module.css'; // module.css ensures the css won't spillover to other files

export default function MeetupDetail (props) {
    return (
        <section className={classes.detail}>
            <img 
            src={props.image}
            alt={props.title}
            />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </section>
    )
}