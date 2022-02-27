import MeetupList from '../components/meetups/MeetupList';
import { MongoClient } from 'mongodb';


export default function HomePage (props) {



    return(
        <>
        {/* props.meetups from getStaticProps() */}
            <MeetupList meetups={props.meetups}/> 
        </>
    )
}

// getStaticProps is a reserved function from Nextjs to ensure pre-rendered page contains data
// Nextjs will call this function to get data before rendering page
// runs once during build
export async function getStaticProps() {
    // fetch data from an API
    // Connect to mongoDB - NEVER run on client side - this file will not run on client side so it is secure
    const client = await MongoClient.connect('mongodb+srv://allen:gasei1@development.7tcu8.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();
    client.close();
    console.log(meetups)
    // MUST return an object in getStaticProps
    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.data.title,
                address: meetup.data.address,
                image: meetup.data.image,
                id: meetup._id.toString(),
            }))
        },
        // incremental static generation
        // 1 represents number of seconds nextjs will revalidate data (every 1 seconds)
        revalidate: 1
    };
}

// // only runs on the server after deployment, users do not see this code
// // runs for every request
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     // fetch data from an API
//     return {
//         props: DUMMY_MEETUPS
//     };
// }
