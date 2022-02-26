const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "this endpoint is protected",
  });
});

module.exports = router;
