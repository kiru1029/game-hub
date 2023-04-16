import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'bb3f8bb11272479ea42154532609cf40'
    }
})