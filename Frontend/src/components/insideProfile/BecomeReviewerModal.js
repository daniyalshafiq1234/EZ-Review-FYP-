import React,{useState} from 'react'
import {closeBecomeReviewerModal} from '../../redux/reviewmodal/becomeReviewerModal/becomeReviewerModalActions'
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

function BecomeReviewerModal() {
  const dispatch = useDispatch()
  const becomeReviewerModalclosed = useSelector(state => state.becomeReviewer.modalClosed)

  let [reviewersDropDown, setreviewersDropDown] = useState([{name: 'Daniyal', id: 1},{name: 'Taha', id: 2}])
  let [orgsDropDown, setorgsDropDown] = useState([{name: 'FAST', id: 1},{name: 'NUST', id: 2}])
  let [domainDropDown, setdomainDropDown] = useState([{name: 'AI', id: 1},{name: 'ML', id: 2}])
  
  const onSelectReviewer = (selectedList, selectedItem) => {
    
  }

  const onRemoveReviewer = (selectedList, removedItem)  =>{
        
  }

  const [selectedTypeOfReview,setselectedTypeOfReview] = useState("")
  

  return (
    <div>
      <Modal
        open={!becomeReviewerModalclosed}
        onClose={()=>{dispatch(closeBecomeReviewerModal())}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Become a reviewer
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            Provide your details
          </Typography>
          <div className='modal-inner-div-wid'>
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
            className='vertical-spacing'
            placeholder="Select Organization"
            options={orgsDropDown} // Options to display in the dropdown
            selectedValues={orgsDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
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
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          }
           
          <Multiselect
            className='vertical-spacing'
            placeholder="Select Domain"
            options={domainDropDown} // Options to display in the dropdown
            selectedValues={domainDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          <Button variant="outlined" style={{marginTop:'1em'}}>Submit</Button>
          </div>
          
        </Box>
      </Modal>
    </div>
  );
}
export default BecomeReviewerModal