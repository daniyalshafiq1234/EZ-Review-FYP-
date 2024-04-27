import React,{useEffect, useState} from 'react'
import {openRequestReviewModal,closeRequestReviewModal} from '../../redux/reviewmodal/requestReviewModal/requestReviewModalActions'
import { closeInitiateReviewModal } from '../../redux/reviewmodal/initiateReviewModal/initiateReviewModalActions';
import { setDocsMetadata, uploadDocs } from '../../redux/documents/documentActions';
import { useSelector, useDispatch } from 'react-redux'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UploadButton from './UploadButton';
import Multiselect from 'multiselect-react-dropdown';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import '../../styles/RequestReviewModal.css'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  height:550,
  bgcolor: 'background.paper',
  border: '2px solid white',
  boxShadow: 24,
  p: 4
};

function InitiateReviewModel() {
  const dispatch = useDispatch()
  
  const initiateReviewModalClosed = useSelector(state => state.initiateReviewModal.modalClosed)
  const docsData = useSelector(state => state.docsReducer)
  const orgs = useSelector(state => state.orgReducer.orgNames)


  let [reviewersDropDown, setreviewersDropDown] = useState([{name: 'Daniyal', id: 1},{name: 'Taha', id: 2}])
  let [orgsDropDown, setorgsDropDown] = useState([])
  let [domainDropDown, setdomainDropDown] = useState([{name: 'AI', id: 1},{name: 'ML', id: 2}])
  

  const [documentMetaData,setDocumentMetaData] = useState({
    title:'',
    domain:'',
    organizationName:''
  })



  const onSelectDomain = (selectedList, selectedItem) => {
    setDocumentMetaData((old)=>{return {...old,domain:selectedItem['name']}})
  }
  

  const onRemoveDomain = (selectedList, removedItem)  =>{
        
  }

  const onSelectOrg = (selectedList, selectedItem) => {
    setDocumentMetaData((old)=>{return {...old,organizationName:selectedItem['name']}}) 
    
  }
  

  const onRemoveOrg = (selectedList, removedItem)  =>{
        
  }

  const [selectedTypeOfReview,setselectedTypeOfReview] = useState("")
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    

    dispatch(uploadDocs(docsData))     
  }
  useEffect(()=>{
    dispatch(setDocsMetadata(documentMetaData))   
  },[documentMetaData])
  useEffect(()=>{
    setorgsDropDown(orgs.map((cval,cindex)=>{return {name:cval,id:cindex}}))
  },[orgs])
  return (
    <div>
      <Modal
        open={!initiateReviewModalClosed}
        onClose={()=>{dispatch(closeInitiateReviewModal())}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit}>
          <div style={{marginLeft:'1em'}}>
          <Typography id="modal-modal-title" variant="h5" component="h2">
          Get a review
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            Upload documents and select reviewers
          </Typography>
          </div>
          <div className='modal-inner-div-wid'>
          <TextField onChange={(e)=>{setDocumentMetaData((old)=>{return {...old,title:e.target.value}})}} max="15" id="outlined-basic" label="Title (max 15 characters)" variant="outlined" size="small" style={{marginTop:'1.5em'}}/>  
          <UploadButton className='vertical-spacing' />

          <FormControl fullWidth style={{marginTop:'1em'}}>
          <InputLabel id="demo-simple-select-helper-label" >Type of review</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectedTypeOfReview}
          label="Type of review"
          onChange={(e)=>{setselectedTypeOfReview(e.target.value)}}
          style={{height:'3em'}}
        >
          <MenuItem value="Directreview">Direct review</MenuItem>
          <MenuItem value="Throughanorganization">Through an organization</MenuItem>
          {/* <MenuItem value={30}>Thirty</MenuItem> */}
          </Select>
          </FormControl>
          {
            selectedTypeOfReview=="Throughanorganization" &&
            <Multiselect
            singleSelect={true}
            style={{textTransform:'uppercase'}}
            className='vertical-spacing'
            placeholder="Select Organization"
            options={orgsDropDown} // Options to display in the dropdown
            selectedValues={orgsDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectOrg} // Function will trigger on select event
            onRemove={onRemoveOrg} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          }
          {
            selectedTypeOfReview=="Directreview" &&
          <Multiselect
            className='vertical-spacing'
            placeholder="Select Reviewers"
            options={reviewersDropDown} // Options to display in the dropdown
            selectedValues={reviewersDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectDomain} // Function will trigger on select event
            onRemove={onRemoveDomain} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          }
           
           {/* Why to include domian ? */}
           {
            selectedTypeOfReview=="Throughanorganization" &&
          <Multiselect
            singleSelect={true}
            className='vertical-spacing'
            placeholder="Select Domain"
            name="domain"
            options={domainDropDown} // Options to display in the dropdown
            selectedValues={domainDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectDomain} // Function will trigger on select event
            onRemove={onRemoveDomain} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            // onChange={handleChange}
            onChange={(e)=>{setDocsMetadata((old)=>{return {...old,domain:e.target.value}})}}
            />
           }
          <Button variant="outlined" type='submit' style={{marginTop:'1em'}}>Submit</Button>
          </div>
          </form>
        </Box>
        
      </Modal>
    </div>
  );
}
export default InitiateReviewModel






