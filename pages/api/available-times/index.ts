import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { db } = await connectToDatabase();

    const data = await db.collection('available').find().toArray();

    return res.json(data);
};
