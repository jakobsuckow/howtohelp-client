import React from 'react';
import axios from 'axios';
import { AlertContext } from '../../../components/alert/alertProvider';

const apiURI = `https://cors-anywhere.herokuapp.com/http://159.65.122.42:5000/api/v1`;
//https://cors-anywhere.herokuapp.com/http://159.65.122.42:5000/api/v1

const Api = {
  getPins: () => {
    return axios(`${apiURI}/pin/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  getPinsByDisplay: ({ latitude, longitude, latitudeEnd, longitudeEnd }) => {
    return axios(`${apiURI}/pin/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: { latitude, longitude, latitudeEnd, longitudeEnd }
    });
  },
  getPinsByCenter: ({ latitude, longitude }) => {
    return axios(`${apiURI}/pin/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        latitude,
        longitude
      }
    });
  },
  getPropertiesById: (id) => {
    return axios(`${apiURI}/pin/properties/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  },
  postPin: ({ latitude, longitude }) => {
    return axios(`${apiURI}/pin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        latitude,
        longitude
      }
    });
  }
};

export default (name) => {
  const { showAlert } = React.useContext(AlertContext);
  const apiMethod = React.useCallback(
    (params) => {
      return Api[name](params).then((res) => {
        if (res.status === 404) {
          showAlert({ message: 'Network Error' });
          console.log(res);
        }
        if (res.status === 500) {
          showAlert({ message: 'Error in useApi' });
          console.log(res);
        }
        return res;
      });
    },
    [name, showAlert]
  );
  return [apiMethod];
};
