import { getSession } from 'next-auth/react';
import type { NextApiRequest, NextApiResponse } from 'next';

import { validateIncomingValues } from '../../../lib/validate-form-values';
import connectToDatabase from '../../../lib/mongodb';

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const session = await getSession({ req });

    if (!session) return res.status(401);

    const error = validateIncomingValues(req.body);

    if (error) return res.status(400).json({ error });

    const { db } = await connectToDatabase();

    const { acknowledged } = await db.collection('rsvps').insertOne(req.body);

    console.log('acknowledged: ', acknowledged);
    return res.status(200).json({ success: true });
};
