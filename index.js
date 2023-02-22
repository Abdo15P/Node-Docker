const express =require ("express") // import express 
const mongoose=require ("mongoose")
const session =require("express-session")
const redis =require("redis")
const cors = require("cors")
let RedisStore = require("connect-redis")(session)


const {MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, SESSION_SECRET,REDIS_URL, REDIS_PORT} =require("./config/config");
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: REDIS_PORT,
})
const postRouter = require("./routes/postRoutes")
const userRouter = require("./routes/userRoutes")

const app = express() // create an app using express instructor

const mongoURL= `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(() => console.log("successfully connected to DB"))
.catch((e) => console.log(e));

app.enable("trust proxy");
app.use(cors({}));

app.use(session({
    store:  new RedisStore({client: redisClient}),
    secret: SESSION_SECRET,
    cookie: {
        secure: false,
        resave: false,
        saveUninitialized: false,
        httpOnly: true,
        maxAge: 30000,
    },
}))

app.use(express.json());

app.get("/api/v1", (req,res) => {
    res.send("<h2> Hi Therel</h2>");
    console.log("yeah it ran")
});



app.use("/api/v1/posts", postRouter)
app.use("/api/v1/users", userRouter)

const port = process.env.PORT || 3000;

app.listen(port, () => console.log('listening on port ${port}'))