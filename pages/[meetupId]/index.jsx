import { MongoClient } from "mongodb";

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')


}



const MeetupDetails = () => {
    return (
        <>
            {/* <MeetupDetail /> */}
        </>
    )
};

export default MeetupDetails;