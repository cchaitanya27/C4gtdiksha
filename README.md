### Auto generate content in local language



### Description
The project is a Node.js application that provides an API for translating text using the Neural Machine Translation (NMT) model. The main purpose of the project is to demonstrate how to integrate with a translation pipeline and perform translations between different languages.

Main Functionalities:

1.Translation API: The project exposes an endpoint (/textComputeNMT) that allows users to submit a text for translation. The API fetches the configuration data from the pipeline, including the API key and service details, and then sends the translation request to the specified pipeline.

2.Configuration Management: Another endpoint (/Config) is available for fetching and storing configuration data received from the translation pipeline. This helps in managing the API key and other settings required for successful translations.

3.Welcome Endpoint: The project includes a simple welcome endpoint (/welcome) to check if the API is running correctly.

### Clone

To clone this repository, run the following command:

```
git clone "https://github.com/paradise110302/C4gtdiksha"
```

### Dependencies

Before running the project, make sure to install the required dependencies using npm. Run the following command to install the dependencies:

```
npm install @prisma/client express node express-session axios cors
```

### How to Run

To run the project, execute the following command:

```
npx nodemon index.js
```

### Usage

Use any preferred client such as Postman or ThunderClient to interact with the API.

#### Welcome Endpoint

To check if the API is working, use the following endpoint:

```
GET http://localhost:3000/welcome
```

#### Configuration Request Fetching

To store configurations received from the pipeline, use the following endpoint:

```
POST http://localhost:3000/Config
```

#### Translating the Source Text

To translate the source text, use the following endpoint:

```
POST http://localhost:3000/textComputeNMT
```

### Note

Please ensure that the necessary configurations, API keys, and environment variables are set up correctly before using the API.

### License


