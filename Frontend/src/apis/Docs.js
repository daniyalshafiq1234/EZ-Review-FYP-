import axios from 'axios'
var qs = require('qs');
const backendurl = process.env.REACT_APP_BACKEND_URL

export async function uploadDocsApi(data){
    
    let formData = new FormData()
    const {docs,docsMetadata} = data
    
    for (let i = 0 ; i < docs.length ; i++) {
        formData.append("files", docs[i]);
    }
    formData.append("docMetadata",JSON.stringify(docsMetadata))
    
    const res = await axios({
        method: "post",
        url: `${backendurl}/documents`,
        data: formData,
        headers: { 
            "Authorization" : `Bearer ${localStorage.getItem('ezreviewjwttoken')}`,
            "Content-Type": "multipart/form-data" },
      });
    return res
}