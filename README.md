<h1 style="color: #15aabf;">VibeMap 🗺</h1>

Welcome to VibeMap, a platform that allows users to create personalised maps according to their interests.
Whether they’re into art, history, food or nature, VibeMap lets users create their own maps by filtering the spots that match their personality.

<img width="500" alt="Screenshot 2023-07-11 at 20 41 12" src="https://github.com/jusoffiati/VibeMap/assets/127201938/38bf79b5-02aa-4b71-874b-3eebab1246a8">

<img width="500" alt="Screenshot 2023-07-11 at 20 44 30" src="https://github.com/jusoffiati/VibeMap/assets/127201938/1d71a555-7d78-42d9-a0ad-eefdd7d0adf8">

<img width="500" alt="Screenshot 2023-07-11 at 20 45 38" src="https://github.com/jusoffiati/VibeMap/assets/127201938/0dad64ba-d9e0-4c6f-b432-c0a598b2699e">

## Getting Started

Install dependencies on the client and server side with `npm i`

In the root of the server folder -> create a `.env` and include your variables
e.g.

```

DATABASE_HOST=<localhost>
DATABASE_USERNAME=<your-username>
DATABASE_PASSWORD=<your-password>
DATABASE_NAME=<your-db-name>
DATABASE_PORT="5432"

```

To use ElephantQL as the platform to host your database, create a new instance, then click on the newly created instance and select -> Details. There you will see your database access credentials. You can then copy these to your server ‘.env’ file.

In the root of the client folder -> create a `.env` and include your Google Maps API Key
e.g.

```

REACT_APP_GOOGLE_MAP_API_KEY=<your-API-key>

```

Run the server with `node index.js` and the client with `npm start`.

#### To create a Google Maps API key, see below:

1. Go to the Google Maps Platform > Credentials page. [GO TO THE CREDENTIALS PAGE](https://accounts.google.com/InteractiveLogin/signinchooser?continue=https%3A%2F%2Fconsole.cloud.google.com%2Fproject%2F_%2Fgoogle%2Fmaps-apis%2Fcredentials%3Futm_source%3DDocs_CreateAPIKey%26utm_content%3DDocs_maps-backend%26_gl%3D1*1i0awta*_ga*NjM0MjEzMTA0LjE2ODkwMTU1MTA.*_ga_NRWSTWS78N*MTY4OTEwMDM4Ni4zLjEuMTY4OTEwMDQ4OS4wLjAuMA..&followup=https%3A%2F%2Fconsole.cloud.google.com%2Fproject%2F_%2Fgoogle%2Fmaps-apis%2Fcredentials%3Futm_source%3DDocs_CreateAPIKey%26utm_content%3DDocs_maps-backend%26_gl%3D1*1i0awta*_ga*NjM0MjEzMTA0LjE2ODkwMTU1MTA.*_ga_NRWSTWS78N*MTY4OTEwMDM4Ni4zLjEuMTY4OTEwMDQ4OS4wLjAuMA..&osid=1&passive=1209600&service=cloudconsole&ifkv=AeDOFXhcG1Hnbi-Qi7HoXyUPH_3ePyQAT63zYTGjykS0a5xX0uHGnbot_lGGvHYnXi3RdcdrDconBg&flowName=GlifWebSignIn&flowEntry=ServiceLogin)
2. On the Credentials page, click Create credentials > API key.The API key created dialog displays your newly created API key.

3. Click Close.The new API key is listed on the Credentials page under API keys. Remember to [restrict the API](https://developers.google.com/maps/api-security-best-practices#restricting-api-keys)  key before using it in production.

For more information on how to set up your Google Maps API key, [click here](https://developers.google.com/maps/documentation/javascript/get-api-key)

### Tech Stack

#### Frontend

<table>
<tr>
<td>React</td>
<td>Tailwind CSS</td>
<td>Daisy UI</td>
<td>Flowbite</td>
</tr>
</table>

#### Backend

<table>
<tr>
<td>Express</td>
<td>Node.js</td>
</tr>
</table>

#### Database

<table>
<tr>
<td>Sequelize</td>
<td>PostgreSQL</td>
</tr>
</table>
