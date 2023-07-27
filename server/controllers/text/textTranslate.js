const axios = require('axios');
const getTextData = require('./text');

const config = async (req, res) => {
    try {
        const tasks = await getTextData(req, res);
        
        const callbackUrl = tasks.pipelineInferenceAPIEndPoint.callbackUrl;
        const inferenceApiKeyName = tasks.pipelineInferenceAPIEndPoint.inferenceApiKey.name;
        const inferenceApiKey = tasks.pipelineInferenceAPIEndPoint.inferenceApiKey.value;

        const sourceLanguage = tasks.languages[0].sourceLanguage;
        const targetLanguage = tasks.languages[0].targetLanguageList[0];
        const serviceIds = [];
       
            const config = tasks.pipelineResponseConfig.find((item) => {
                return (
                    item.config &&
                    item.config.length > 0 &&
                    item.config[0].language.sourceLanguage === sourceLanguage &&
                    item.config[0].language.targetLanguage === targetLanguage
                );
            });
            if (config) {
                const serviceId = config.config[0].serviceId;
                serviceIds.push({serviceId });
            }
        if (serviceIds.length === 0) {
            throw new Error("Config not found for the specified source language and any target language");
        }

        const output = {
            callbackUrl: callbackUrl,
            inferenceApiKey: inferenceApiKey,
            inferenceApiKeyName: inferenceApiKeyName,
            sourceLanguage: sourceLanguage,
            targetLanguage: targetLanguage,
            serviceId: serviceIds
        };
      //  return output;
       return output;
    } catch (error) {
        console.error(error);
        res.status(400).send({ message: "Error processing the text configuration, serviceId" });
    }
};


module.exports = { config };
