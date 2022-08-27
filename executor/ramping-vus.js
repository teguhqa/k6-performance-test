import http from 'k6/http';
import { getCurrentStageIndex } from 'https://jslib.k6.io/k6-utils/1.3.0/index.js';

export const options = {
  discardResponseBodies: true,
  scenarios: {
    contacts: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '20s', target: 10 },
        { duration: '10s', target: 0 },
      ],
      gracefulRampDown: '0s',
    },
  },
};

export default function () {
  http.get('https://test.k6.io/contacts.php');
  // We're injecting a processing pause for illustrative purposes only!
  // Each iteration will be ~515ms, therefore ~2 iterations/second per VU maximum throughput.
  if (getCurrentStageIndex() === 0) {
    console.log('Run Stage 1');
  }else if(getCurrentStageIndex() === 1){
    console.log('Run Stage 2')
  }
}
