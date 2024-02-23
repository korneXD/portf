import { getData } from "./utils.js";
const url="https://raw.githubusercontent.com/mkatay/projects_json/main/json"

export const projects=()=>{
    getData(url,renderProjects)
}

function renderProjects(data){
    console.log(data);
}