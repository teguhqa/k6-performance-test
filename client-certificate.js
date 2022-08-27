import http from 'k6/http';

export const options = {
    tlsAuth: [
        {
        domains: ['example.com'],
        cert: open('./mycert.pem'),
        key: open('./mycert-key.pem'),
        },
    ],
};

export default function () {
    http.get('https://example.com/');
}