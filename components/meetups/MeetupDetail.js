import classes from "./MeetupDetail.module.css";

const MeetupDetail = (props) => {
  return (
    <section className={classes.detail}>
      <img src={props.src} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <h2>The Meetup Description</h2>
      <hr />
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;