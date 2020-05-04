import React, { useState }from 'react';

const useFetch = (url,options) =>{
    return fetch(url,options)
      .then(resp => {
        return resp.json();
      })
}
export default useFetch;