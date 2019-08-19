# Emaily survey app for start-ups and project managers

Emaily is a web application designed around getting feedback from the users of your application or service.

Automated bulk email feedback collection.

## High level description

Sub-user = someone using your service or application.
User = startup or service provider.

- Your Sub-user uses your product/service
- Owner wants feedback from the user
- send user email requesting feedback
- Get tabulation o results
- Make app/service better with feedback

### User-flow

- User signs up via Google OAuth
- User pays for email credits via Stripe
- User creates a new "survey"
- User enters a list of emails to send survey to
- Emaily sends survey to list of emails
- Surveyees click on link in email to provide feedback
- Emaily tabulates the feedback
- Emaily creates report for user

### Tech Stack (tentative)

- OAuth = Express server + MongoDB + PassportJS
- User pays for email credits via Stripe = Stripe + MongoDB
- User creates a new survey = React + Redux
- User enters list of email addresses to send survey to = React + Redux + Redux Form
- We send email to list of surveyees = Email Provider
- Surveyees clink on feedback link in email = Email Provider + Express + MongoDB
- Emaily tabulates feedback = MongoDB?
- User can see report of all survey responses = MongoDB + React + Redux
