import axios from 'axios'
import router from '../router'

// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000 // request timeout
})
// debugger
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
service.defaults.headers.delete['Content-Type'] = 'application/x-www-form-urlencoded';

service.defaults.transformRequest = [
    function(data) {
        let ret = ''
        for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
    }
]


/**发送拦截**/
// service.interceptors.request.use(
//     config => {
//         // do something before request is sent
//         let userInfo = getData('userInfo')
//         if (userInfo.token) {
//             config.headers.token = userInfo.token
//         }
//         return config
//     },
//     error => {
//         // do something with request error
//         console.log(error) // for debug
//         return Promise.reject(error)
//     }
// )
/**响应拦截**/
service.interceptors.response.use(
    (res) => {
        let { data } = res;
        let { code } = data;

        if (code == 800) {
            // router.replace('/login');
        } else {
            return data;
        }
    },
    error => {
        let code = error.response.data.code
        let message = error.response.data.message
        return Promise.reject(error);
    }
)

export default service
