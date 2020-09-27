const BASE_URL = window.location.hostname.includes('localhost')
	? 'https://vuttr-shumax.herokuapp.com'
	: 'http://localhost:3000';

export default {
	BASE_URL
};