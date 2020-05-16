# cypress-end-to-end
Cypress guided project starter

Steps before class:
- [X] **Fork** this repository, then clone your fork.
- [X] **In the root of this directory**: Run `npm install` to download dependencies.
- [X] Run the server using `npm start` 
- [X] In a separate terminal `npm install cypress --save-dev`

**This will install Cypress locally as a dev dependency for your project.**


We will install cypress before class starts because this takes some time to do. 


PROJECT: 

Step 1: Set up Project
This project is a continuation of the work you have done previously.

 CD into your old project
 Continue to make changes and push to the same branch
 Install Cypress with npm. npm install cypress --save-dev
 run npx cypress open, After a moment, the Cypress Test Runner will launch.
 Locate the integration folder at cypress/integration in your code editor
 Create a form_test.js file.
 Watch the Cypress Test Runner update the list of specs.
 Launch Cypress in interactive mode.
Note: You will see an error that says "No tests found in your file:" with your particular file path. This is because we have not written any tests yet. Now you will start writing tests.

Step 2: Write and Run Tests
In order to complete this challenge you will need to write and run the following tests. They do not need to pass, so long as the reasons they are failing is legitimate.

Set up tests that will...

 X - Get the Name input and type a name in it.
 X - Use an assertion to check if the text inputted contains the name you provided (Hint: use the .should assertion)
 X - Get the Email input and type an email address in it
 X - Get the password input and type a password in it [SUBSTITUTED TEST OF TEXTAREA BOX]
 X - Set up a test that will check to see if a user can check the terms of service box
 X Check to see if a user can submit the form data
 X - Check for form validation if an input is left empty
