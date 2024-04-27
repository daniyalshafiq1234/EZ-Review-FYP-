import axios from 'axios'
const backendurl = process.env.REACT_APP_BACKEND_URL

export async function getReviewerNotStartedDocs(){
    let res = await axios.get(`${backendurl}/reviewer/reviewerNotStartedDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function getReviewerInProgressDocs(){
    let res = await axios.get(`${backendurl}/reviewer/reviewerInprogressDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function getReviewerCompletedDocs(){
    let res = await axios.get(`${backendurl}/reviewer/reviewerCompletedDocs`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`} })
    return res.data
}
export async function dynamicBoardStateChangedApi(toColumn,docId){
    console.log("HELOOOOOOOOO====>",toColumn)
    console.log("doc========>",docId)
    let res = await axios.put(`${backendurl}/documents/statusChanged`,
    { headers: {"Authorization" : `Bearer ${localStorage.getItem("ezreviewjwttoken")}`},columnId:toColumn,docId })
    return res
}