let backendHost;

const { hostname } = window.localhost;

if (hostname === 'localhost') {
  backendHost = 'http://localhost:8080';
}

export const API_BASE_URL = `${backendHost}`;
