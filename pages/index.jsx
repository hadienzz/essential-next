import { MongoClient } from "mongodb";
import Layout from "../components/layout/Layout";
import MeetupList from "../components/meetups/MeetupList";

export async function getStaticProps() {
  const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')

  const db = client.db()

  const meetupsCollection = db.collection('meetups')

  const meetups = await meetupsCollection.find().toArray()

  client.close()


  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          image: meetup.image,
          description: meetup.description,
          id: meetup._id.toString()
        }
      })
    },
    revalidate: 1
  }
}


const HomePage = ({ meetups }) => {
  console.log(meetups)
  return (
    <>
      <MeetupList meetups={meetups} />;
    </>
  );
};


export default HomePage;
