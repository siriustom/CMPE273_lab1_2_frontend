import axios from 'axios';
import {updateBidList} from '../actions/action'
var Utils = (function () {

    function getBidList(userid) {
        axios.post('http://34.209.33.250:4200/getbidlist', {
            userid: userid
        }).then((response) => {
            console.log('bidlist get successfully', response.data);
            updateBidList(response.data);
        }).catch((error) => {
            console.log(error);
        });
    }

    return {
        getBidList: getBidList,
    }

}())

export {Utils};