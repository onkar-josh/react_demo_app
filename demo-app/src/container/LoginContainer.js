import React, { useState } from 'react';
import UseFetch from '../hooks/useFetch';
import Welcome from '../components/Welcome';

const LoginContainer = (fetchOptions) => {
      
      return UseFetch("https://reqres.in/api/login",fetchOptions
        ).then(response => {
          console.log(response);
          return response;
        });
}

export default LoginContainer;