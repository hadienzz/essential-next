import { DUMMY_MEETUP } from '../../pages'
import classes from './MeetupDetail.module.css'


export async function getStaticProps(context) {

    return {
        props: {
            meetups: DUMMY_MEETUP
        }
    }

}


const MeetupDetail = (props) => {
    return (
        <div className={classes.detail}>
            <img src={props.image} alt={props.title} />
            <h1>{props.title}</h1>
            <address>{props.address}</address>
            <p>{props.description}</p>
        </div>
    )
}

export default MeetupDetail