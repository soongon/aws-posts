'use strict';

exports.delete = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'delete function',
        input: event,
      },
      null,
      2
    ),
  };

};
