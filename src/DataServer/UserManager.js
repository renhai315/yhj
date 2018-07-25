import {
    RegisterURL,
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
}

export default new UserManager();