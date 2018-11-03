import axios from "axios";

export default {
  getBands() {
    return axios.get("/post").then(response => {
      console.log(response);
      return response.data;
    });
  }
};
