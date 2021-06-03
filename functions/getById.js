'use strict';

exports.getById = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'get by id function',
        input: event,
      },
      null,
      2
    ),
  };

};
