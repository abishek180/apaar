import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
    console.log(res);
  try {
    // console.log("REQ.BODY", req.body);
    await sendgrid.send({
      to: "sravansp92@gmail.com", // Your email where you'll receive emails
      from: "sravan@docme.cloud", // your website email address here
      subject: "subject",
      html: `<div>You've got a mail</div>`,
    });
  } catch (error) {
    // console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;