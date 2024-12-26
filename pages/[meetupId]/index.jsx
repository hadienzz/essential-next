import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from '../../components/meetups/MeetupDetail'
import Head from "next/head";

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

    const db = client.db()

    const meetupCollection = db.collection('meetups')

    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray()
    client.close()

    return {
        fallback: false,
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        }))
    }
}

export async function getStaticProps(context) {
    const { meetupId } = context.params

    const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

    const db = client.db()

    const meetupCollection = db.collection('meetups')

    const selectedMeetup = await meetupCollection.findOne({ _id: new ObjectId(meetupId) })
    client.close()

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                image: selectedMeetup.image,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
}

const MeetupDetails = ({ meetupData }) => {
    return (
        <>
            <Head>
                <title>{meetupData.title}</title>
            </Head>
            <MeetupDetail {...meetupData} />
        </>
    )
};


export default MeetupDetails;