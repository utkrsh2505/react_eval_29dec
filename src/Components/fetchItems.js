import axios from "axios";
function fetchItems(){
    return axios.get("http://localhost:3001/Item");
}
export {fetchItems};
