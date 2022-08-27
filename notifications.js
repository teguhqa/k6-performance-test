import { sleep } from 'k6';
import http from 'k6/http';

export const options = {
  thresholds: {
    // fail the test if 95th percentile response goes above 500ms
    http_req_duration: ['p(95)<500'],
  },
};

export default function () {
  http.get('https://test.k6.io/');
  sleep(5.0);
}

export function teardown(data) {
  // send notification request to Slack API
  const event = {
    text: 'My test just finished!',
  };
  const res = http.post('https://hooks.slack.com/services/...', JSON.stringify(event), {
    headers: { 'Content-Type': 'application/json' },
  });
}
