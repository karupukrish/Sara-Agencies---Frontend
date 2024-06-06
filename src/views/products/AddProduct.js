import React, { useState } from 'react';
import { FaCloudUploadAlt } from 'react-icons/fa';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MainCard from 'ui-component/cards/MainCard';
import axios from 'axios';

const AddProduct = () => {
  const [company, setCompany] = useState('');
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [mrp, setMrp] = useState('');
  const [sp, setSp] = useState('');
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState('');

  function handleChange(e) {
    const uploadedFile = e.target.files[0];
    setFile(URL.createObjectURL(uploadedFile));
    setFileName(uploadedFile ? uploadedFile.name : '');
  }
  const handleSave = () => {
    // if (handleValidation()) {
    const dataToSave = {
      company: company,
      category: category,
      productName: name,
      sp: sp,
      mrp: mrp
      // image: file
    };
    console.log(dataToSave);

    // const token = localStorage.getItem('token');

    // if (token) {
    // const headers = {
    //   Authorization: `Bearer ${token}`,
    //   'Content-Type': 'application/json'
    // };
    // Axios.post(`${process.env.REACT_APP_API_URL}/api/createCompany`, dataToSave, {
    //   headers
    // })
    axios
      .post(`${process.env.REACT_APP_API_URL}/api/createCompany`, dataToSave)
      .then((response) => {
        console.log('SAVED DATA IS:', response);
      })
      .catch((error) => {
        console.error('Error saving data:', error);
      });
    // }
    // }
  };

  return (
    <>
      <MainCard title="Add Product">
        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 mb-2">
            <TextField
              className="mb-4"
              fullWidth
              id="company"
              label="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <TextField className="mb-4" fullWidth id="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField className="mb-4" fullWidth id="mrp" label="MRP" value={mrp} onChange={(e) => setMrp(e.target.value)} />
          </div>
          <div className="col-lg-3 col-md-3 col-sm-12 mb-2">
            <TextField
              className="mb-4"
              fullWidth
              id="category"
              label="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <TextField className="mb-4" fullWidth id="sp" label="Sales Price" value={sp} onChange={(e) => setSp(e.target.value)} />
            <input type="file" id="file-input1" multiple style={{ display: 'none' }} onChange={handleChange} />
            <label htmlFor="file-input1">
              <Button variant="contained" component="span" startIcon={<FaCloudUploadAlt />}>
                Upload files
              </Button>
            </label>
            {fileName && <p>{fileName}</p>}
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mb-2 text-center">
            {file && <img src={file} alt="abc" style={{ maxWidth: '100%', maxHeight: '200px' }} />}
          </div>
        </div>

        <div className="row mt-2">
          <button
            type="button"
            className="bg-blue me-5 inline-block rounded bg-primary h-fit px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </MainCard>
    </>
  );
};

export default AddProduct;
