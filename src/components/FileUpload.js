import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setExtractedData } from '../redux/slices/extractedDataSlice';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [rawResponse, setRawResponse] = useState(null);
  const dispatch = useDispatch();

  const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel', 'image/png', 'image/jpeg'];

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && (!allowedTypes.includes(selectedFile.type) || selectedFile.size === 0)) {
      setError("Invalid file type or empty file. Only PDF, Excel, and image files are allowed.");
      setFile(null);
      e.target.value = null;
    } else {
      setError(null);
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError("Please select a valid file to upload.");
      return;
    }

    setError(null); 
    const formData = new FormData();
    formData.append('file', file);

    setLoading(true);
    setRawResponse(null);
    try {
      const response = await axios.post('https://backend-1-p4vg.onrender.com/api/process-file', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log(response.data);
      if (response.data.rawResponse) {
        setRawResponse(response.data.rawResponse);
      } else {
        dispatch(setExtractedData(response.data));
      }
    } catch (error) {
      setError("Failed to process the file.");
      console.error("File processing error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-4 my-4 shadow-lg" style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2 className="text-center mb-4">Upload Document</h2>
      {error && <p className="text-danger text-center">{error}</p>}
      <Form>
        <Form.Group controlId="fileUpload" className="mb-3">
          <Form.Label className="fw-bold">Select File</Form.Label>
          <Form.Control
            type="file"
            onChange={handleFileChange}
            className={error && !file ? 'is-invalid' : ''}
          />
          {error && !file && (
            <Form.Text className="text-danger">File selection is required.</Form.Text>
          )}
        </Form.Group>

        <div className="text-center">
          <Button
            variant="primary"
            onClick={handleUpload}
            disabled={loading || !file}
            className="w-100"
          >
            {loading ? (
              <>
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                  className="me-2"
                />
                Processing...
              </>
            ) : (
              'Upload and Extract'
            )}
          </Button>
        </div>
      </Form>

      {rawResponse && (
        <div className="mt-4">
          <h5 className="text-center text-secondary">Raw API Response</h5>
          <pre className="bg-light p-3 border rounded" style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-all' }}>
            {rawResponse}
          </pre>
        </div>
      )}
    </Card>
  );
};

export default FileUpload;
