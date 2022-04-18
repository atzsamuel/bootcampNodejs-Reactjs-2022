import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/todos";

// al utilizar el try catch se debe de hacer una validacion de la respuesta
/*async function all() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    return  response.data;
}*/

async function request(httpCall){
  const response = await httpCall();
  return response.data;
}

const all = () => request(()=>axios.get(url));

const single=(codigo)=>request(()=>axios.get(url+codigo));

const add=(producto)=>request(()=>axios.post(url,producto));

const update=({codigo,...producto})=>request(()=>axios.put(url+codigo,producto));

const remove=(codigo)=>request(()=>axios.delete(url+codigo));

export default {all,single,add,update,remove};