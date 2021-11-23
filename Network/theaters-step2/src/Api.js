import axios from 'axios';

export const resolveTheaters = async () => {
    const headers = {
        'X-Naver-Client-Id': process.env.REACT_APP_X_Naver_Client_Id,
        'X-Naver-Client-Secret': process.env.REACT_APP_X_Naver_Client_Secret
    }
    const ret = await axios.get('https://openapi.naver.com/v1/search/local.json?query=cgv&start=5', {headers});
    console.log('ret.data :', ret.data);
}