
import callApi from "./ApiCaller";

const url_today = 'https://music-serverasp.herokuapp.com/music/today_music';


function* getTodayMusics(){
    var data = [];
    yield callApi(url_today, 'GET',{data:null}).then(res =>{
        data = res.data.today;
    })
    return data;
}


export const Api = {
    getTodayMusics,
   
}; 
