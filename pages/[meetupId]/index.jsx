import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from '../../components/meetups/MeetupDetail'

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

    const db = client.db()

    const meetupsCollection = db.collection('meetups')

    const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
    client.close();

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const { meetupId } = context.params
    console.log(meetupId)
    const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

    const db = client.db()

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({
        _id: new ObjectId(meetupId),
    });

    client.close()
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                description: selectedMeetup.description,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
            }

        }
    }
}


const MeetupDetails = ({ meetupData }) => {
    return (
        <>
            <MeetupDetail {...meetupData} />
        </>
    )
};


export default MeetupDetails;