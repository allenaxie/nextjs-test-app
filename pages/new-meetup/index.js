// path: domain/new-meetup
import NewMeetupForm from "../../components/meetups/NewMeetupForm";


export default function NewMeetupPage() {

    async function addMeetupHandler(enteredMeetupData) {
        // trigger request to path of file in api folder
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);
    }

    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    )
}