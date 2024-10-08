const Submission = require("../model/mongoModels/Submission");
const SubmissionService = require("../service/SubmissionService");
const createSubmission = async (req, res, next) => {
  try {
    const submissionService = new SubmissionService();
    const { username, preferredCodeLanguage, standardInput, sourceCode } =
      req.body;
    const payload = {
      language_id: preferredCodeLanguage,
      source_code: sourceCode,
      stdin: standardInput,
    };
    const result = await submissionService.getSubmissionResult(payload);

    const submission = await Submission.create({
      langugae: preferredCodeLanguage,
      standardInput,
      sourceCode,
      stdout: result,
    });
    res.status(201).json(submission);
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getAllSubmission = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page, 10) || 1;
    const pageSize = parseInt(req.query.pageSize, 10) || 10;
    const offset = (page - 1) * pageSize;

    const submissions = await Submission
                              .find()
                              .skip(offset)
                              .limit(pageSize);

    const count = await Submission.countDocuments();

    const totalPages = Math.ceil(count / pageSize);

    res.status(200).json({
      totalSubmissions: count,
      totalPages,
      currentPage: page,
      pageSize,
      submissions,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = { getAllSubmission, createSubmission };
