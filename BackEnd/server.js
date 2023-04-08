import express from "express";
import mongoose from "mongoose";
import Cards from "./dbCards.js";
import Cors from "cors";


//App Config

const app = express();
const port = process.env.PORT || 8001;
const connection_url = 'mongodb+srv://salmanah:Janka0491@cluster0.nklhm.mongodb.net/datingDB?retryWrites=true&w=majority';


// MiddleWare
app.use(express.json());
app.use(Cors());

// DB Config

mongoose.connect(connection_url, {
  useNewUrlParser: true,
  //useCreateIndex: false,
  useUnifiedTopology: true
})


/*mongoose.connect(process.env.connection_url, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.info("connected to DB");
  }
});*/

// API ENDpoints

app.get("/", (req, res) => res.status(200).send("hello world"));

app.post("/dating/cards", (req, res) => {
  const dbCard = req.body;
  Cards.create(dbCard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  })
})

app.get("/dating/cards", (req, res) => {
  Cards.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  })
})

//listener

app.listen(port, () => console.log(`listening on localhost: ${port}`));
