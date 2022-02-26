// path: domain/new-meetup/meetupId
import { Fragment } from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';


export default function MeetupDetails () {
    return (
        <MeetupDetail
        image="https://i.imgur.com/BAGCcoQ.jpg"
        title="first meetup"
        address="4325 street"
        description="description goes here"
        />
    )
}