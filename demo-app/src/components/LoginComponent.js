import React,{useState} from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';
//import Welcome from './Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Login from  '../Routes/Login';
import InputText from '../coreComponents/InputText';
import LoginContainer from  '../container/LoginContainer';

import { Row, Col, Button, Container, Card, Form } from "react-bootstrap";
const LoginComponent = (props) => { 
  
const {emailValue,passwordValue} = props;
const [inputEmail, setInputEmail] = useState(emailValue);
const [inputPassword, setInputPassword] = useState(passwordValue);
const [validated, setValidated] = useState(false);
const [userEmailPass, setuserEmailPass] = useState(false);
const [isLoading, setIsLoading] = useState();
const [token, setToken] = useState(false);
const [err, setErr] = useState();
const [newToken, setNewToken] = useState();
let history = useHistory();
  
const handleSubmit = async (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  console.log(form.checkValidity())
  const validityCheckingFunction = () => {
  if (form.checkValidity() === false) {
    //event.preventDefault();
    event.stopPropagation();
  } else {
    
    const formData = new FormData(event.target);
    console.log(formData.get("email"));
    setInputEmail(formData.get("email"));
    setInputPassword(formData.get("password"))
    console.log(inputEmail);
    console.log(inputPassword);
    setuserEmailPass(true);
   // alert(formdata.get('email')+" "+formdata.get("pass"));
  }
  }
  await validityCheckingFunction();
  console.log(inputEmail);
  console.log(inputPassword);
 // console.log(tok);
  
 if(userEmailPass){
  const fetchOptions = {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify({
      email : inputEmail,
      password : inputPassword
    }) 
  }
    LoginContainer(fetchOptions).then(response => {
      console.log(response.token)
      if(response.token)
      {
      console.log(response.token);
      //setNewToken(response.token);
      setToken(true);
      setIsLoading(false);
    }
    else
    {
      setErr(response.message);
      console.log(err);
      setIsLoading(false)
    }

    });
  }

else {
setValidated(true);
}
}

if (token){
  history.push('/login')
 }
    return(
<Form noValidate validated={validated} onSubmit={handleSubmit}>
 <InputText type="email"
           name="email"
           placeholder = "Please Enter UserName"
           value = {inputEmail}
           errorMessage = "Email is required"
           ></InputText>
 <InputText type="password"
           name="password"
           placeholder = "Please Enter password"
           value = {inputPassword}
           errorMessage = "password is required" ></InputText>
  <Button variant="primary" type="submit">
    Login
  </Button>
</Form>
)
}

LoginComponent.defaultProps = {
  emailValue: '',
  passwordValue: ''
};

export default LoginComponent;