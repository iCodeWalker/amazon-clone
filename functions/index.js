const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51KdVT9SBXYTiPNAAEteycwN6quEgsEmwqpSb2aeJJs8UmmOZJBW0E0u1ZCcuBPBW2O5IDjroDDCP2INz2oqNTgq800oiSHZCDM"
);

// -- App config

const app = express();

// -- Middlewares

app.use(cors({ origin: true }));
app.use(express.json());

// -- Api routes

app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received of amount", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// -- Listen command

exports.api = functions.https.onRequest(app);

//Example endpoint
//(http://localhost:5001/clone-a5231/us-central1/api)
