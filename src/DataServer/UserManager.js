import {
    RegisterURL,
    loginURL,
    UpdateCustomerURL
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
                localStorage.uid = result.data.uid;
            }
            return result;
        } catch (error) {
            return {
                success: false,
                errorMessage: '网络错误'
            }
        }

    }
    
    async UpdateCustomer(Nickname,HeadPortrait){
        try {
            const token = localStorage.token;
            const uid = localStorage.uid;
            const formData = new FormData();
            formData.append('token',token);
            formData.append('uid',uid);
            formData.append('Nickname',Nickname);
            if (HeadPortrait) {
                HeadPortrait.map((image,index)=>{
                    formData.append(`image${index+1}`,image.file);
                    return '';
                })
            }

            const res = await axios({
                url:UpdateCustomerURL,
                method:'POST',
                data:formData,
                headers: {'Content-Type': 'multipart/form-data'}
            })
            return res.data;

        } catch (error) {
            return {
                success:false,
                errorMessage:'网络错误'
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