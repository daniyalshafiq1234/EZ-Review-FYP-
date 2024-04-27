import axios from 'axios'
var qs = require('qs');
const backendurl = process.env.REACT_APP_BACKEND_URL

export async function registerUserApi(body){
    const {firstName,lastName,email,password,phone} = body
    let res = await axios.post(`${backendurl}/registration/addUser`,{firstName,lastName,email,password,phone})
    return res
}
export async function loginUserApi(body){
    const {email,password} = body
    let res = await axios.post(`${backendurl}/login`,qs.stringify({email,password}),
    {
        'Content-Type': 'application/x-www-form-urlencoded'
    })
    console.log(res)
    return res
}