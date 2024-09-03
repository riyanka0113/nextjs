import { Fragment } from "react";
import Head from "next/head";
import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>React Meetup</title>
        <meta
          name="description"
          content="A huge list of highly active meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};

 //run on server after deployement

// export async function getServerSideProps(context){
//   const req = context.req;
//   const res = context.res;

//   //fetch data from API
//   return{
//     props: {
//       meetups: DUMMY_MEETUPS
//     }
//   }
// }

//run during build process

export async function getStaticProps() {
  //fetch data from API
  const client = await MongoClient.connect(
    "mongodb+srv://Riyanka_13:jibpr7AShTlCLkCq@cluster0.v95zu.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: (await meetups).map((meetup) => ({
        id: meetup._id.toString(),
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
      })),
    },
    //if page frequently generate the use below property. it's retun incremental static generation object
    //it takes number of seconds nextJs wait untill it regenerates this page
    revalidate: 10,
  };
}

export default HomePage;
