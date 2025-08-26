import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { firstName, lastName, email, phoneNumber } = req.body;

  // Configure transporter for WhoGoHost SMTP
  const transporter = nodemailer.createTransport({
    host: "mail.mybunacoffee.com", // Replace with your WhoGoHost mail server
    port: 465,
    secure: true,
    auth: {
      user: "info@mybunacoffee.com", // Replace with your WhoGoHost email
      pass: "nPgC8vvApNMFfaS", // Replace with your WhoGoHost email password
    },
  });

  try {
    await transporter.sendMail({
      from: "info@mybunacoffee.com", // Replace with your WhoGoHost email
      to: "info@mybunacoffee.com", // Replace with your WhoGoHost email
      subject: "New User Submission",
      text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}`,
    });
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Failed to send email", details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
