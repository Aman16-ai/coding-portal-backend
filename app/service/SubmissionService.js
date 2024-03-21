const axios = require("axios")

class SubmissionService {
  constructor() {
    this.base_url = "https://judge0-ce.p.rapidapi.com/submissions";
  }
  async createSubmission(payload) {
    const options = {
      method: "POST",
      url: "https://judge0-ce.p.rapidapi.com/submissions",
      params: {
        // base64_encoded: "true",
        // fields: "*",
        wait:true,
      },
      headers: {
        "content-type": "application/json",
        "Content-Type": "application/json",
        "X-RapidAPI-Key": "628b1f15d7msh16f61068fb4fdacp18fa82jsn46a83cdbb843",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
      data: payload,
    };
    const response = await axios.request(options);
    console.log(response.data);
    return response.data.token;
  }

  async getSubmissionResult(payload) {
    const token = await this.createSubmission(payload)
    const options = {
      method: "GET",
      url: this.base_url + "/" + token,
      params: {
        // base64_encoded: "true",
        // fields: "*",
        wait:true
      },
      headers: {
        "X-RapidAPI-Key": "628b1f15d7msh16f61068fb4fdacp18fa82jsn46a83cdbb843",
        "X-RapidAPI-Host": "judge0-ce.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log(response.data.stdout)
      return response.data.stdout
    } catch (error) {
      console.error(error);
      return null
    }
  }
}

module.exports = SubmissionService
