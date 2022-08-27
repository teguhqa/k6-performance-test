import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://sha256.badssl.com/');
    check(res, {
        'is TLSv1.2': (r) => r.tls_version === http.TLS_1_2,
        'is sha256 cipher suite': (r) => r.tls_cipher_suite === 'TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256',
    });
}