import { sleep } from 'k6';
import http from 'k6/http';

export let options = {
    vus: 1000,
    duration: '60s',
    insecureSkipTLSVerify: true,
};
export default function () {
    http.get('주소');
    sleep(1);
}
