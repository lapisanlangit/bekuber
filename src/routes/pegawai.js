const express = require("express");

const router = express.Router();
const pegawaiController = require("../controller/pegawai");

router.get("/", pegawaiController.getPegawai);
module.exports = router;
