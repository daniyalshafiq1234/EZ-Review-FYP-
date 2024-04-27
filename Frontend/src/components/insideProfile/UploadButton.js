import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import { uploadingDocs } from '../../redux/documents/documentActions';
import { useSelector, useDispatch } from 'react-redux'
const Input = styled('input')({
  display: 'none',
});

function UploadButton() {
  
  const dispatch = useDispatch()

  return (
    <Stack direction="row" alignItems="center">
      <label htmlFor="contained-button-file" className='upload-btn-label'>
        <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e)=>{dispatch(uploadingDocs(e.target.files))}}/>
        <Button variant="contained" component="span">
          Upload Documents
        </Button>
      </label>
    </Stack>
  );
}
export default UploadButton