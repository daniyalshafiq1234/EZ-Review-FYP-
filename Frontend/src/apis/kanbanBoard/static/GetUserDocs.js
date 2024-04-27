import axios from 'axios'
const backendurl = process.env.REACT_APP_BACKEND_URL

export async function getUserNotAssignedDocs(){
    let res = await axios.get(`${backendurl}/documents/userNotAssignedDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function getUserReviewNotStartedDocs(){
    let res = await axios.get(`${backendurl}/documents/userReviewNotStartedDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function getUserInProgressDocs(){
    let res = await axios.get(`${backendurl}/documents/userReviewInProgressDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function getUserReviewCompletedDocs(){
    let res = await axios.get(`${backendurl}/documents/userReviewCompletedDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
