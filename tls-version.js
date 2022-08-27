import http from 'k6/http';

export const options = {
    tlsVersion: {
        min: http.SSL_3_0,
        max: http.TLS_1_2,
    },
};

export default function () {
    http.get('https://badssl.com');
}