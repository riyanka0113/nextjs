import { MongoClient } from 'mongodb';

async function Connection(){

    const client = await MongoClient.connect('mongodb+srv://Riyanka_13:jibpr7AShTlCLkCq@cluster0.v95zu.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    return meetupsCollection;
}

export default Connection;