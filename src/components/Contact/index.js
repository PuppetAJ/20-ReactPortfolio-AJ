/// Imports
import React, { useState, useEffect } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Text, Textarea, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage } from '@chakra-ui/react';
import animCheck from '../../scripts/anim.js';

// Component initialization
function ContactForm() {

  // State trackers
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [nameError, setNameError] = useState(false);

  // Form input change func
  const handleInputChange = async (e) => {
    // Err tracking variable
    let err;
    // If input is email..
    if (e.target.name === 'email') {
      // Validate email
      const isValid = validateEmail(e.target.value);
      // If invalid set email err to true and general err var to true
      if (!isValid) {
        setEmailError(true);
        err = true;
      } else {
        setEmailError(false);
        err = false;
      }
    } else {
      // Similar logic to above..
      const val = e.target.value;
      if (!val) {
        e.target.name === 'message' ? setMessageError(true) : setNameError(true);
        err = true;
      } else {
        e.target.name === 'message' ? setMessageError(false) : setNameError(false);
        err = false;
      }
    }
    
    // If no errors, save formstate
    if (!err) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  }

  // DISABLED FOR NOW
  // // Submit function
  // function handleSubmit(e) {
  //   // Prevent default event
  //   e.preventDefault();
  //   // Log form
  //   console.log(formState);
  //   setFormState({name: '', email: '', message: ''});
  //   document.querySelector('#name').value = '';
  //   document.querySelector('#email').value = '';
  //   document.querySelector('#message').value = '';
  // }

  // animCheck on page load
  useEffect(() => {
    animCheck();
  })

  // JSX
  return (
    <section id='Contact' className='content-format'>
      {/* Header */}
      <Text className='section-header ease-anim' id='contact-header' fontSize='6xl' fontWeight='bold'>Contact</Text>
      {/* Contact Form */}
      <form action='mailto:adrianjimenez1950@gmail.com' method='post' className = 'ease-anim contact-form'>
        {/* Name input */}
        <FormControl className='ease-anim form-input' isInvalid={nameError} isRequired>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Input borderColor='#e5e7eb80' id='name' name='name' color='#e0daed' placeholder='Name' defaultValue={formState.name} onBlur={handleInputChange} />
        </FormControl>
        {/* Email input */}
        <FormControl className='ease-anim form-input' isInvalid={emailError} isRequired >
          <FormLabel htmlFor = 'email'>Email address</FormLabel>
          <Input borderColor='#e5e7eb80' id='email' name='email' color='#e0daed' placeholder='Email' type='email' defaultValue={formState.email} onBlur={handleInputChange} />
          {!emailError ? (
            <FormHelperText>Email will be used to contact you.</FormHelperText>
          ) : (
            <FormErrorMessage>Invalid email.</FormErrorMessage>
          )}
        </FormControl>
        {/* Message input */}
        <FormControl borderColor='#e5e7eb80' className='ease-anim form-input' isInvalid={messageError} isRequired >
          <FormLabel htmlFor = 'message'>Message</FormLabel>
          <Textarea id='message' resize='vertical' name='message' color='#e0daed' placeholder='Message' defaultValue={formState.message} onBlur={handleInputChange} />
          {!messageError ? (
            <FormHelperText>Description of what you'd like</FormHelperText>
          ) : (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>
        {/* Submit button */}
        <button className='ease-anim form-button project-button'>Submit</button>
      </form>
    </section>
  )
}

// Export component
export default ContactForm;