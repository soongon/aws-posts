'use strict';

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.regist = async (event) => {
  
  const params = {
    TableName: "posts-app-dev",
    Item: JSON.parse(event.body)
  }

  try {
      const result = await docClient.put(params).promise();
      return result;
  } catch (err) {
      return err;
  }
};
