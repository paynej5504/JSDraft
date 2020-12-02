// import statements
// Axios is a library that helps us make http requests to external resources
import axios from 'axios';

//api url
const url='https://api.covidtracking.com/v1/states/oh/current.json';

export const fetchData = async () => {
    try {
        /*gets number of people who tested positive with covid, recovered from covid,
        died from covid, and the date these stats were last updated from the api
        */
        const { data: { positive, recovered, death, date} } = await axios.get(url);
        console.log(date)
        
            // returns the stats mentioned above
            return { positive, recovered, death, date };
           
        
    } catch (error) {
       
    }
}


