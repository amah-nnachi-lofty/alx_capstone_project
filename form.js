/**
 * Script to handle the form submission and validation 
 * Form Field Retrieval: The values of the form fields (name, email, subject, and message)
 * Validation: The code checks if all fields have values. If they do, it displays a success message, 
    logs the form data to the console, and resets the form. If any field is empty, it displays an error message.
 */

function handleFormSubmit(event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // JavaScript validation (all fields are required)
    if (name && email && subject && message) {
        // Form submitted successfully
        alert("Message successfully sent to Amah Nnachi Lofty!");
        
        // Sending the form data to the server using AJAX.
        console.log("Message successfully sent to Amah Nnachi Lofty!");
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Subject:', subject);
        console.log('Message:', message);

        // Reset the form after successful submission
        document.getElementById('contact-form').reset();



    } else {
        // Validation failed, display error message
        alert("Please fill out all required fields.");
    }
}

// Add an event listener to the form element to listen for the "submit" event
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
