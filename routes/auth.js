const express = require("express");
const fs = require("fs");
const path = require("path");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
var jwt = require("jsonwebtoken");

// Route 1 :  to create a user using post /api/auth/createuser
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        success = false;
        return null;
      }
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        dob: req.body.dob,
        mobile: req.body.mobile,
        gender: req.body.gender,
        nationallity:req.body.nationallity,
        country: req.body.country,
        state: req.body.state,
        pin: req.body.pin,
        Age: req.body.Age,
        address: req.body.address,
        occupation: req.body.occupation,
        income: req.body.income,
        companyname: req.body.companyname,
        sourceofincome: req.body.sourceofincome,
        taxnumber: req.body.taxnumber,
        salaryslip: req.body.salaryslip,
      });
      success = true;
      res.json({ success });
    } catch (errors) {
      console.error(errors.massage);
      res.status(500).send("Internal server error");
    }
  }
);

//Route 2: to get userdetails a user using post /api/auth/getuser,login required
router.post("/getuser", async (req, res) => {
  try {
    let email = req.body.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);

    // let fileBuffer;

    // // Ensure the salary slip exists and is in the correct format
    // if (user.salaryslip && user.salaryslip.type === "Buffer" && Array.isArray(user.salaryslip.data)) {
    //   fileBuffer = Buffer.from(user.salaryslip.data);
    // } else {
    //   console.error("Invalid salary slip format");
    //   return;
    // }

    // // Ensure the folder exists
    // const folderPath = path.join(__dirname, "..", "files");
    // if (!fs.existsSync(folderPath)) {
    //   fs.mkdirSync(folderPath, { recursive: true });
    // }

    // // Define the file path
    // const filePath = path.join(folderPath, "example.pdf");

    // // Write the file in binary mode
    // fs.writeFileSync(filePath, fileBuffer, "binary");

    // console.log("File saved successfully at:", filePath);
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
});

//Route 3: to get userdetails a user using post /api/auth/updateuser,login required

router.put("/updateuser", async (req, res) => {
  try {
    let email = req.body.email;
    const user = await User.findOneAndUpdate({ email: email }, req.body, { new: true }); // Find user by email
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" }); // Proper JSON response
  }
});

module.exports = router;
