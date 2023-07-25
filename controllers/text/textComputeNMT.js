const axios = require('axios');
const config = require('./textTranslate');
require('dotenv').config();

const textComputeNMT = async (req, res) => {
  try {
    const source = req.body.source;
    const configData = await config.config(req, res);
    const callbackUrl = configData.callbackUrl;
    console.log(configData, callbackUrl);
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

    console.log("-----------------------------------", requestBody);

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
    res.status(200).send({ message: "Translation successful", data: responses });
  } catch (error) {
    console.error(error);
    console.error(error.response.data);
    res.status(400).send({ message: "Error processing the translation request", error: error });
  }
};

module.exports = textComputeNMT;