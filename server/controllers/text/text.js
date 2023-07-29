require('dotenv').config(); 
const axios = require('axios');


//for getting the API callbackURL, Authorisation and the Value
//working 
const getTextData = async (req, res) => {
  try {
    const ulca_base_url = 'https://meity-auth.ulcacontrib.org';
    const model_pipeline_endpoint = '/ulca/apis/v0/model/getModelsPipeline';
    const headers = {
      'userID': process.env.userID,
      'ulcaApiKey': process.env.ulcaApiKey
    };
    const reqBody = {
      "pipelineTasks": [
          {
              "taskType": "translation",
              "config": {
                  "language": {
                      "sourceLanguage": req.body.sourceLanguage,
                      "targetLanguage": req.body.targetLanguage
                  }
              }
          }
      ],
      "pipelineRequestConfig": {
          "pipelineId": process.env.pipelineId
      }
  };
    const response = await axios.post(ulca_base_url + model_pipeline_endpoint, reqBody, { headers });
    const tasks = response.data;
    console.log(tasks);
    if (response.status === 200) {
      return tasks; // Return the tasks data
    } else {
      console.log('API Error:', response.status, response.data);
      return { message: "Error processing requestBody" };
    }
  } catch (error) {
    console.log(error);
    return { message: "Error processing the request " };
  }
};

module.exports = getTextData;
