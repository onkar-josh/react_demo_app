import React from 'react';
//import './form.css'
//import ValidationForm from './ValidationForm';
import 'bootstrap/dist/css/bootstrap.min.css';

import ListUsers from '../Routes/ListOfUsers';
import { Row, Col, Button, Container, Card } from "react-bootstrap";
const ListOfUsers = async () => {
    const [result, setResult] = useState();

   const seeAllUsers = (event) =>{
        event.preventDefault();
        setIsLoading(true);
        const fetchAlllUsers = {
         method: "GET",
        headers: new Headers({
          "Content-Type": "application/json",
          'Authorization': `Bearer ${token}`
        })
        };
        ListUsers(fetchAlllUsers).then(response => {
            if(response)
            {
            setData1(response);
            setIsLoading(false);
            setInnerStatus(true);
          }
          else
          {
            setErr(response.message);
            console.log(err);
            setIsLoading(false)
          }
          });
    };

    return(
<>
Welcome to Listing Api
</>
    )
};
export default ListOfUsers;
