import {
    RegisterURL,
    loginURL
} from './URLConfig';

import axios from 'axios';

class UserManager {
    async Register(Name, Pwd) {
        try {
            const res = await axios.post(RegisterURL, {
                Name,
                Pwd
            })
            const result = res.data;
            if (result.success === true) {
                localStorage.token = result.data.token;
            }

        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }
    }
    async login(Name, Pwd) {
        try {
            const res = await axios.post(loginURL, {
                Name,
                Pwd
            });
            const result = res.data;
            if (result.success === true) {
                localStorage.token = result.data.token;
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }

    }
    isLogin() {
        if (localStorage.token === '' || !localStorage.token) {
            return false;
        } else {
            return true;
        }
    }
}

export default new UserManager();