const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HYOvdBtDiPEwFpkCkOnqRjCmDJKH0zofEq4WUroRZI9H2uNDRbwt7zRVKc1fpqMRzH4hYNloaEtYmiEh2DsMtcz002eOoJx4r');

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin : true}));
app.use(express.json());

// Api Routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.get('/yoo', (req, res) => res.status(200).send('Hello YOO'));

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;

    console.log('Payment Request Recieved / Amount >> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - It created
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })

    console.log('Payment Res clientSecret >> ', paymentIntent.client_secret);
})

// Listen commnad
exports.api = functions.https.onRequest(app);


// Example endpoint
// http://localhost:5001/clone-31f17/us-central1/api