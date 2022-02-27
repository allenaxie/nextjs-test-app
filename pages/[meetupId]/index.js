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

export async function getStaticPaths () {
    return {
        // tells NEXTjs whether your paths array contain ALL supported param values or some of them
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: 'm1',
                }
            },
            {
                params: {
                    meetupId: 'm2',
                }
            },
        ]
    }
}

export async function getStaticProps (context) {
    // fetch data for a single meetup
    const meetupId = context.params.meetupId;
    console.log(meetupId)
    return {
        props: {
            meetupData : {
                image:"https://i.imgur.com/BAGCcoQ.jpg",
                id: meetupId,
                title:"first meetup",
                address:"4325 street",
                description:"description goes here",
            }
        }
    }
}