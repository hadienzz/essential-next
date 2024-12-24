import { MongoClient } from "mongodb"
import { useRouter } from "next/router"

const router = useRouter()


const addMeetupHandler = async (req, res) => {

    if (req.method === 'POST') {
        const data = req.body
        const { title, image, address, description } = data

        const client = await MongoClient.connect('mongodb+srv://hadienzz:h4d13Nbtk@meetup-data.z4ve1.mongodb.net/meetups?retryWrites=true&w=majority&appName=meetup-data')
        const db = client.db()

        const meetupCollection = db.collection('meetups')

        const result = await meetupCollection.insertOne(data)
        console.log(result)
        client.close()

        router.push('/')
    }
}

export default addMeetupHandler