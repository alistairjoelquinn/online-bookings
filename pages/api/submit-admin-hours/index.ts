import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

import connectToDatabase from '../../../lib/mongodb';
import isoify from '../../../lib/isoify';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    console.log('req.body: ', req.body);

    const session = await getSession({ req });

    if (!session) return res.status(401);

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('available').insertOne(isoify(req.body));

    return res.status(acknowledged ? 200 : 400).json({ success: !!acknowledged });
};