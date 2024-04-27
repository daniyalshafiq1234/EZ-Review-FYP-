import React,{useState} from 'react'
import {openRequestReviewModal,closeRequestReviewModal} from '../../redux/reviewmodal/requestReviewModal/requestReviewModalActions'
import { useSelector, useDispatch } from 'react-redux'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UploadButton from './UploadButton';
import Multiselect from 'multiselect-react-dropdown';

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
  p: 4,
};

function RequestReviewModal() {
  const dispatch = useDispatch()
  
  const requestReviewModalClosed = useSelector(state => state.requestReviewModal.modalClosed)
  const orgNames = useSelector(state => state.org)


  let [reviewersDropDown, setreviewersDropDown] = useState([{name: 'Daniyal', id: 1},{name: 'Taha', id: 2}])
  let [orgsDropDown, setorgsDropDown] = useState([{name: 'FAST', id: 1},{name: 'NUST', id: 2}])
  let [domainDropDown, setdomainDropDown] = useState([{name: 'AI', id: 1},{name: 'ML', id: 2}])
  

  
  const onSelectReviewer = (selectedList, selectedItem) => {
    
  }

  const onRemoveReviewer = (selectedList, removedItem)  =>{
        
  }



  return (
    <div>
      <Modal
        open={!requestReviewModalClosed}
        onClose={()=>{dispatch(closeRequestReviewModal())}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          Start Review
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 0 }}>
            Upload documents and select reviewers
          </Typography>
          <div className='modal-inner-div-wid'>
          <UploadButton className='vertical-spacing'/>
          <Multiselect
            className='vertical-spacing'
            placeholder="Select Organization"
            options={orgsDropDown} // Options to display in the dropdown
            selectedValues={orgsDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          <Multiselect
            className='vertical-spacing'
            placeholder="Select Reviewers"
            options={reviewersDropDown} // Options to display in the dropdown
            selectedValues={reviewersDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
           
          <Multiselect
            className='vertical-spacing'
            placeholder="Select Domain"
            options={domainDropDown} // Options to display in the dropdown
            selectedValues={domainDropDown.selectedValue} // Preselected value to persist in dropdown
            onSelect={onSelectReviewer} // Function will trigger on select event
            onRemove={onRemoveReviewer} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default RequestReviewModal






