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

export default function HomePage (props) {



    return(
        <>
        {/* props.meetups from getStaticProps() */}
            <MeetupList meetups={props.meetups}/> 
        </>
    )
}

// getStaticProps is a reserved function from Nextjs
// Nextjs will call this function to get data before rendering page
export async function getStaticProps() {
    // fetch data from an API
    // MUST return an object in getStaticProps
    return {
        props: {
            meetups: DUMMY_MEETUPS
        }
    };
}
