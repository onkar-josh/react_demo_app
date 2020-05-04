import React,{useState} from 'react';
import {Form} from 'react-bootstrap'
const InputText = (props) =>{
  const {placeholder, value, type, name,errorMessage, message} = props;
  const [inputText, updateInputText] = useState(value);

return(
<Form.Group controlId="validationCustom01">
  <Form.Control
    required
    name = {name}
    type={type}
    placeholder={placeholder}
    value={inputText}
    onChange = {(e)=>{
      updateInputText(e.target.value)
    }}
  />
  <Form.Control.Feedback >{message}</Form.Control.Feedback>
  <Form.Control.Feedback type="invalid">{errorMessage}</Form.Control.Feedback>
</Form.Group>
);
}

InputText.defaultProps = {
    placeholder: 'please  enter text',
    value: '',
    type : "text",
    errorMessage : "Please fill the Box",
    message: 'Look Good'
};

export default InputText;