import { MongoClient } from 'mongodb';

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req,res) {
    if (req.method === 'POST') {
        const data = req.body;
         
        // Connect to mongoDB - NEVER run on client side - this file will not run on client side so it is secure
        const client = await MongoClient.connect('mongodb+srv://allen:gasei1@development.7tcu8.mongodb.net/meetups?retryWrites=true&w=majority');
        const db = client.db();
        const meetupsCollection = db.collection('meetups');

        const result = await meetupsCollection.insertOne({data});
        console.log(result);

        client.close();

        res.status(201).json({message: 'Meetup inserted!'});
    }
}