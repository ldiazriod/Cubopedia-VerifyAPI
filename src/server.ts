import express from "express"
import cors from "cors"
import * as dotenv from "dotenv"
import { Db, MongoClient, ObjectId } from "mongodb"
import mongoConnect from "./mongodb/mongoconnect"
import { Token, User } from "./mongodb/mongoTypes"

dotenv.config()

export const app = express()

const run = async() =>{
    try{
        const client: MongoClient = await mongoConnect(process.env.MONGO_TOKEN!)
        app.set("db", client.db("Cubopedia"))
    }catch(e){
        console.log(e);
    }
}

run()
app.use(cors())
app.get("/", (req, res) => {
    res.send("Ok")
})
app.get("/user/verify/:id/:token", async (req, res) => {
    try{
        if(req.params.id && req.params.token){
            const db: Db = app.get("db")
            const userCollection = db.collection<User>("Users")
            const user = await userCollection.findOne({_id: new ObjectId(req.params.id)})
            if(user){
                const tokenCollection = db.collection<Token>("Tokens")
                const token = await tokenCollection.findOne({userId: new ObjectId(req.params.id), token: req.params.token})
                if(token){
                    await userCollection.updateOne({_id: user._id}, {$set: {verified: true}})
                    await tokenCollection.deleteOne(token)
                    res.redirect(process.env.FRONT_URL ? process.env.FRONT_URL : "")
                }
            }
            return false
        }
        return false
    }catch(e){
        console.log(e)
    }
})
const port = process.env.PORT!==undefined ? Number.parseInt(process.env.PORT) : 4001
app.listen({port: port}, () => {
    console.log("Application runing on http://localhost:4001")
})
