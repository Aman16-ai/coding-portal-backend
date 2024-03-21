const { getAllSubmission, createSubmission } = require("../controller/SubmissionController")

module.exports = (app) => {
    app.get("/submission",getAllSubmission)
    app.post("/submission",createSubmission)
}