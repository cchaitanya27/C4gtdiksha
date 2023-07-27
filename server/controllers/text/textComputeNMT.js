const axios = require('axios');
const config = require('./textTranslate');
require('dotenv').config();

const textComputeNMT = async (req, res) => {
  try {
    const source = req.body.source;
    const configData = await config.config(req, res);
    const callbackUrl = configData.callbackUrl;
    const inferenceApiKey = configData.inferenceApiKey;
    const sourceLanguage = configData.sourceLanguage;
    const targetLanguage = configData.targetLanguage;
    const serviceId = configData.serviceId[0].serviceId;
    // Prepare the request body using the user input and config data
    const requestBody = {
      "pipelineTasks": [
        {
          "taskType": "translation",
          "config": {
            "language": {
              "sourceLanguage": sourceLanguage,
              "targetLanguage": targetLanguage
            },
            "serviceId": serviceId
          }
        }
      ],
      "inputData": {
        "input": [
          {
            "source": source
          }
        ]
      }
    };

    const responses = [];
    const headers = {
      [configData.inferenceApiKeyName]: inferenceApiKey,
      'Accept': '*/*',
      'userId': process.env.userId,
      'ulcaApiKey': process.env.ulcaApiKey,
      
    };
    // Make the API call
    const response = await axios.post(callbackUrl, requestBody, { headers });
    responses.push(response);
    const data = response.data.pipelineResponse[0].output;
    res.status(200).send({ message: "Translation successful", data: data });
  } catch (error) {
    console.error(error);
    res.status(400).send({ message: "Error processing the translation request", error: error });
  }
};

module.exports = textComputeNMT;