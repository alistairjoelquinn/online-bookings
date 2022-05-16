import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('logggy');
    const { db } = await connectToDatabase();

    const data = await db.collection('available').find().toArray();

    console.log('data from MONGO: ', data);

    return res.json(data);
};
