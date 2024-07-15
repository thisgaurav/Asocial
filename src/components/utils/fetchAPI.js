import axios from "axios";

export const fetchData = async(url) => {
  const options = {
    method: 'GET',
    url,
    headers: {
      'Project-ID': 'aca3a883-802c-43e8-a72c-ff16992e8220',
      'User-Name': 'Gaurav',
      'User-Secret': '1234'
    }
  }

    try {
      const response = await axios.request(options)
      return response.data
    } catch (err) {
      console.log(err);
    }
}

export const postData = async(url, chatData) => {
  const options = {
    method: 'POST',
    url,
    headers: {
      'Project-ID': 'aca3a883-802c-43e8-a72c-ff16992e8220',
      'User-Name': 'Gaurav',
      'User-Secret': '1234'
    },
    data: {
      text: chatData
    }
  }

    try {
      const response = await axios.request(options)
      return response.data
    } catch (err) {
      console.log(err);
    }
}