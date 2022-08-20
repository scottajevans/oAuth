# oAuth test app

This is a quick test app to handle oAuth through Google oAuth.
In order to test this out there are some things you will need to set up.

## Pre-requisites:

- Copy .env.example to a new file: `cp .env.example .env`
- Go to [Google cloud console](https://console.cloud.google.com/) and either sign in/up (probably using Google oAuth)
- Create a new project
- Give it a name (don't worry about an organisation, you can leave this blank)
- Select the project, then in menu find 'APIs & Services' and select 'Credentials'
- Configure consent screen, select external and then create!
- Set up your app:
  - Set the app name
  - Set the user support email
  - Set the developer contact information
- Move to scopes and add scopes for email and profile (the first 2 options)
- Next, add some test emails
- Once complete, head back to the Credentials screen and select 'Create credentials' at the top
- Select 'OAuth client ID' from the drop down
- Select 'Web application' on the next screen (name the app if you like)
- In URIs, add http://localhost:3000 and http://localhost
- In Redirect URIs add the same 2 URIs.
- Now copy your client ID and paste it into the value for REACT_APP_GOOGLE_OAUTH_CLIENT_ID in your .env file

Once you have followed the above you are ready to go!

# Set up

### `npm install`
### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in your browser if it hasn't automatically.

Enjoy signing in and out with oAuth!
