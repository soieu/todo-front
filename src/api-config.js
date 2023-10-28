let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  if (hostname === "localhost") {
    backendHost = "localhost:8080";
  } else {
    backendHost = "http://todo-api-soieu.ap-northeast-2.elasticbeanstalk.com";
  }
}

export const API_BASE_URL = `${backendHost}`;
