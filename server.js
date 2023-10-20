/**
 * Server-side solution to send email notifications upon form submission: 
 *  when the form is submitted, the data will be sent to the server, 
 *  and the server will send an email notification with the form details to the specified recipient email address
 */

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // You can use any port number you prefer

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

// Handle POST requests to /submit-form endpoint
app.post('/submit-form', (req, res) => {
    // Retrieve form data from the request body
    const { name, email, subject, message } = req.body;

    // Send an email notification, store the form data in a database, etc.
    // For now, let's just log the data to the console.
    console.log('Received form data:');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Subject:', subject);
    console.log('Message:', message);

    // Send a response back to the client
    res.send('Form submitted successfully!');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
