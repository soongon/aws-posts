'use strict';

exports.getAll = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'get all function',
        input: event,
      },
      null,
      2
    ),
  };

};
