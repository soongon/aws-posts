'use strict';

exports.update = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'update function',
        input: event,
      },
      null,
      2
    ),
  };

};
