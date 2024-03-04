import getSignInService from '@/service/sign-in';
import { NextApiRequest, NextApiResponse } from 'next';
import { ResponseDataApi } from '../../types/responseDataApi';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {body: {user, pass}} = req

    switch (req.method) {
        case 'POST':
            try {
                const response = await getSignInService({ user, pass })
                return res.status(200).json(response)
            } catch (error) {
                const message = (error as ResponseDataApi).message
                return res.status(400).json({ message })
            }
        default:
            return res.status(404)
    }
}