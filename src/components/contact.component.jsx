import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { MdClose, MdEmail } from 'react-icons/md';

const StyledEmailForm = styled.div`
  position: relative;
`;

const ToggleButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: var(--color-sixth);
  color: #fff;
  font-size: 24px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

const FormContainer = styled.form`
  display: grid;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-tertiary-light);
  padding: 4rem;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  input,
  textarea{
    margin: 1rem;
    padding: 1rem;
    border: 2px solid var(--color-sixth);
  }

  .submit{
    background-color: var(--color-tertiary);
    color: var(--clr-white);
    margin: 1rem;
    padding:1rem;
    border-radius: 1rem;
    border: 1px solid var(--clr-white);
    font-weight: 500;

    &:hover{
      background-color: var(--clr-white);
      color: var(--color-tertiary);
    
    }
  }
`;

const EmailForm = () => {
  // eslint-disable-next-line
  const [email, setEmail] = useState('');
  // eslint-disable-next-line
  const [subject, setSubject] = useState('');
  // eslint-disable-next-line
  const [message, setMessage] = useState('');
  const [formVisible, setFormVisible] = useState(false);

  // eslint-disable-next-line
  const handleEmailClick = () => {
    window.location.href = 'mailto:closolutions@outlook.com';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send email using SendGrid API
      const response = await axios.post(
        'https://api.sendgrid.com/v3/mail/send',
        {
          personalizations: [
            {
              to: [{ email: 'closolutions@outlook.com' }], // Replace with the recipient email address
              subject: subject,
            },
          ],
          from: { email: 'closolutions.website@outlook.com' }, // Replace with the sender email address
          content: [
            {
              type: 'text/plain',
              value: message,
            },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer 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', // Replace with your API key
          },
        }
      );
      // Handle the response
      console.log('Email sent successfully!', response);
    } catch (error) {
      // Handle errors
      console.error('Error sending email:', error);
    }
  };

  return (
    <StyledEmailForm>
      {!formVisible && (
        <ToggleButton onClick={() => setFormVisible(true)}>
          <MdEmail />
        </ToggleButton>
      )}
      {formVisible && (
        <FormContainer visible={formVisible} onSubmit={handleSubmit}>
          <CloseButton onClick={() => setFormVisible(false)}>
            <MdClose />
          </CloseButton>
          <div style={{ textAlign: 'center' }}>
            <p>Email: <a href="mailto:closolutions@outlook.com">closolutions@outlook.com</a></p>
            <p>Phone: +1 754 779 6474</p>
          </div>
          {/**<input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className='submit'>Send</button> */}
        </FormContainer>
      )}
    </StyledEmailForm>
  );
};

export default EmailForm;
