import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title: 'A First Meetup',
        image: 'https://i.imgur.com/OFpzVta.jpg',
        address: 'Some address',
        description: 'this is a first meetup',

    },
    {
        id:'m2',
        title: 'A second Meetup',
        image: 'https://i.imgur.com/OFpzVta.jpg',
        address: 'Some address',
        description: 'this is a first meetup',

    },
    {
        id:'m3',
        title: 'A third Meetup',
        image: 'https://i.imgur.com/OFpzVta.jpg',
        address: 'Some address',
        description: 'this is a first meetup',

    },
]

export default function HomePage () {
    return(
        <>
           <MeetupList meetups={DUMMY_MEETUPS}/>
        </>
    )
}