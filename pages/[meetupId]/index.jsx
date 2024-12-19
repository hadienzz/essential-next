import { useRouter } from "next/router";
import MeetupDetail from '../../components/meetups/MeetupDetail'
import { DUMMY_MEETUP } from "..";


// export async function getStaticProps(context) {
//     const { meetupId } = context.params

//     const selectedMeetup = DUMMY_MEETUP.find((meetup) => meetup.id === meetupId)

//     return {
//         props: {
//             meetup: selectedMeetup
//         }
//     }
// }

// export async function getStaticPaths() {
//     const paths = DUMMY_MEETUP.map((meetup) => {
//         return { params: { meetupId: meetup.id } }
//     })

//     return {
//         paths,
//         fallback: false
//     }
// }

export async function getStaticProps(context) {
    const { meetupId } = context.params

    const meetupData = DUMMY_MEETUP.find((meetup) => meetup.id === meetupId)

    return {
        props: {
            meetup: meetupData
        }
    }
}

export async function getStaticPaths() {
    const paths = DUMMY_MEETUP.map((meetup) => {
        return { params: { meetupId: meetup.id } }
    })

    return {
        paths,
        fallback: false
    }
}

const MeetupDetails = ({ meetup }) => {
    console.log(meetup)

    return (
        <>
            <MeetupDetail {...meetup} />
        </>
    )
};

export default MeetupDetails;
