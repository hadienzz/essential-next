import { useRouter } from "next/router";
import MeetupDetail from '../../components/meetups/MeetupDetail'

const MeetupDetails = (props) => {
    const router = useRouter()

    const params = router.query.meetupId

    return (


        <>
            <MeetupDetail image={'https://upload.wikimedia.org/wikipedia/commons/4/4f/Tell_Qaramel_vue_a%C3%A9rienne.jpg'} title={'A First Meetup'} address={'Jalan Durian Raya, 5, 4/5, Bogor'} description={'This is a second meetup!'} />
        </>
    )
};

export default MeetupDetails;
