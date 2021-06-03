'use strict';

exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: '안녕하세요... 람다',
        input: event,
      },
      null,
      2
    ),
  };
// sls 설치 -> 프로젝트 생성 -> sls deploy -v -> 
// function invoke(sls invoke -f hello) ->
// 수정 후 디플로이(sls deploy function -f hello) -> 
// 테스트(sls invoke -f hello)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
