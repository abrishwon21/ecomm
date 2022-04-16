import React, { useState, useRef } from "react";

import styled from "styled-components";


const Form = styled.form`
 position:absolute;
 top:10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  /* Change width of the form depending if the bar is opened or not */
  width: 30rem;
  /* If bar opened, normal cursor on the whole form. If closed, show pointer on the whole form so user knows he can click to open it */
  cursor: auto;
  padding: .6rem;
  height: 1rem;
  border-radius: 10rem;
  transition: width 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
`;

const Input = styled.input`
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  width: 100%;
  margin-left: 1rem;
  color: white;
  transition: margin 300ms cubic-bezier(0.645, 0.045, 0.355, 1);
  border:0 transparent;

  &:focus,
  &:active {
    outline: none;
  }
  &::placeholder {
    color: #ccc;
  }
`;



function Search() {
  const [input, setInput] = useState("");
 
  const formRef = useRef();
  const inputFocus = useRef();

  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    
    // After form submit, do what you want with the input value
    console.log(`Form was submited with input: ${input}`);
  };

  return (
    
      <Form
       
        onClick={() => {
       
          inputFocus.current.focus();
        }}
        // on focus open search bar
        onFocus={() => {
 
          inputFocus.current.focus();
        }}
    
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
        ref={formRef}
      >
        
        <Input
          onChange={e => setInput(e.target.value)}
          ref={inputFocus}
          value={input}
 
          placeholder="Search for a movie..."
        />
      </Form>

  );
}

export default Search;