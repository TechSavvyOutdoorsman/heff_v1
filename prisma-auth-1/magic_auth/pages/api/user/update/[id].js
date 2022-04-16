import superjson from 'superjson'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()



export default async function handler(req, res) {
    // grab id to find entry from DB
    const id = req.query.id
    // parse data from our request body into JSON for our DB
    const data  = JSON.parse(req.body)
    // if PUT method, update user account with this our new data & return it in a JSON resonse
    if ( req.method === 'PUT') {
        const updatedUser = await prisma.user.update({
            where: { 
                id: id
            },
            data: data
        })
        res.json(updatedUser)
    // catch error
    } else {
        throw new Error (
            `The HTTP ${req.method} method is not supported at this route.`
        )
    }

}