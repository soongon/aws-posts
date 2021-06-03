'use strict';

const AWS = require("aws-sdk");
const docClient = new AWS.DynamoDB.DocumentClient();

exports.getAll = async (event) => {
  const params = {
    TableName: "posts-app-dev"
  }

  try {
      const result = await docClient.scan(params).promise();
      return result;
  } catch (err) {
      return err;
  }
};
