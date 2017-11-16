import axios from "axios";


const APIKEY = "ed8e21f7d207497bae924d171e19b913";
const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKEY + "&q=";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query, begin_date, end_date) {
    return axios.get(BASEURL + query + "&begin_date=" + begin_date + "&end_date=" + end_date);
  }
};
