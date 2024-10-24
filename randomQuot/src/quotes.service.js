import axios from "axios";

async function getRandomQuotes() {
    try{
        return await axios.get('http://api.quotable.io/random');
    }
    catch(e){
        return e;
    }
    
}

export default getRandomQuotes