import { MongoClient } from "mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://Riyanka_13:jibpr7AShTlCLkCq@cluster0.v95zu.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    //console.log(result);

    res.status(201).json({ message: "meetup inserted!" });

    client.close();
  }
}

export default handler;
