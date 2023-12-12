import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // First Name validation
    if (!formData.firstName) {
      formIsValid = false;
      newErrors.firstName = 'First Name is required';
    }
    if (!formData.middleName) {
      formIsValid = false;
      newErrors.middleName = 'Middle Name is required';
    }


    // Last Name validation
    if (!formData.lastName) {
      formIsValid = false;
      newErrors.lastName = 'Last Name is required';
    }
    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = 'Message is required';
    }

    // Contact No validation
    if (!formData.contactNo) {
      formIsValid = false;
      newErrors.contactNo = 'Contact No is required';
    } else if (!/^\d+$/.test(formData.contactNo)) {
      formIsValid = false;
      newErrors.contactNo = 'Contact No must contain only numbers';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Process the form data, for now, just log it
      console.log('Form Data:', formData);

      // Show success alert
      toast.success('Form submitted successfully!', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear the form data
      setFormData({
        firstName: '',
        middleName: '',
        lastName: '',
        email: '',
        contactNo: '',
        message: '',
      });

      // Clear errors
      setErrors({});
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <>
     <ToastContainer />
     <div className="form-container">
          <form onSubmit={handleSubmit}  className="form">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.firstName}</span>
          </div>
    
          <div>
            <label htmlFor="middleName">Middle Name:</label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
            />
              <span style={{ color: 'red' }}>{errors.middleName}</span>
          </div>
    
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.lastName}</span>
          </div>
    
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.email}</span>
          </div>
    
          <div>
            <label htmlFor="contactNo">Contact No:</label>
            <input
              type="text"
              id="contactNo"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.contactNo}</span>
          </div>
    
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
            <span style={{ color: 'red' }}>{errors.message  }</span>
          </div>
    
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </form>
     </div>
 
    </>
  
  );
};

export default ContactForm;
