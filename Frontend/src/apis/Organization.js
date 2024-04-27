import axios from 'axios'
const backendurl = process.env.REACT_APP_BACKEND_URL

export async function getAllOrgsNames(){
    let res = await axios.get(`${backendurl}/organization/allOrgsNames`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}