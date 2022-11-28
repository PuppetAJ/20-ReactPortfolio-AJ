import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import { Text, Textarea, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Button } from '@chakra-ui/react';

function ContactForm() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [nameError, setNameError] = useState(false);

  const handleInputChange = async (e) => {
    let err;
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setEmailError(true);
        err = true;
      } else {
        setEmailError(false);
        err = false;
      }
    } else {
      const val = e.target.value;
      if (!val) {
        e.target.name === 'message' ? setMessageError(true) : setNameError(true);
        err = true;
      } else {
        e.target.name === 'message' ? setMessageError(false) : setNameError(false);
        err = false;
      }
    }
    
    if (!err) {
      setFormState({...formState, [e.target.name]: e.target.value});
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
    setFormState({name: '', email: '', message: ''});
    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
  }


  return (
    <section id='Contact' className='content-format'>
      <Text id='contact-header' fontSize='6xl' fontWeight='bold'>Contact</Text>
      <form onSubmit={handleSubmit} className = 'contact-form'>
        <FormControl className='form-input' isInvalid={nameError} isRequired>
          <FormLabel htmlFor='name'>Full name</FormLabel>
          <Input borderColor='#e5e7eb80' id='name' name='name' color='#e0daed' placeholder='Name' defaultValue={formState.name} onBlur={handleInputChange} />
        </FormControl>
        <FormControl className='form-input' isInvalid={emailError} isRequired >
          <FormLabel htmlFor = 'email'>Email address</FormLabel>
          <Input borderColor='#e5e7eb80' id='email' name='email' color='#e0daed' placeholder='Email' type='email' defaultValue={formState.email} onBlur={handleInputChange} />
          {!emailError ? (
            <FormHelperText>Email will be used to contact you.</FormHelperText>
          ) : (
            <FormErrorMessage>Invalid email.</FormErrorMessage>
          )}
        </FormControl>
        <FormControl borderColor='#e5e7eb80' className='form-input' isInvalid={messageError} isRequired >
          <FormLabel htmlFor = 'message'>Message</FormLabel>
          <Textarea id='message' resize='vertical' name='message' color='#e0daed' placeholder='Message' defaultValue={formState.message} onBlur={handleInputChange} />
          {!messageError ? (
            <FormHelperText>Description of what you'd like</FormHelperText>
          ) : (
            <FormErrorMessage>Message is required.</FormErrorMessage>
          )}
        </FormControl>
        <button className='form-button project-button'>Submit</button>
      </form>
    </section>
  )
}

export default ContactForm;