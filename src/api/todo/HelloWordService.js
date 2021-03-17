import axios from 'axios';
class HelloWordService {
    executeHelloWordService() {
        return axios.get('http://localhost:8080/hello-word');
        //console.log("service api");
    }

}

export default new HelloWordService;