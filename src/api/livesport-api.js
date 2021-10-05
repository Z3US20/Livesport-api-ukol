import axios from "axios";

export default axios.create({
    baseURL: "https://s.livesport.services/api/v2/search/"
})
