"use server";

import nodemailer from "nodemailer";

export async function sendMembershipApplication(formData: FormData) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || emailUser;

  if (!emailUser || !emailPass) {
    return { success: false, message: "Email configuration is missing on the server. Please check .env.local" };
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  // Extract form data
  const data = {
    name: formData.get("name") || "N/A",
    fatherName: formData.get("fatherName") || "N/A",
    cnic: formData.get("cnic") || "N/A",
    email: formData.get("email") || "N/A",
    address: formData.get("address") || "N/A",
    dob: formData.get("dob") || "N/A",
    age: formData.get("age") || "N/A",
    phone: formData.get("phone") || "N/A",
    bloodGroup: formData.get("bloodGroup") || "N/A",
    education: formData.get("education") || "N/A",
    profession: formData.get("profession") || "N/A",
    monthlyFund: formData.get("monthlyFund") || "N/A",
  };

  // Build Email content
  const mailOptions = {
    from: `"KWS Membership" <${emailUser}>`,
    to: receiverEmail,
    subject: `New Membership Application from ${data.name}`,
    text: `
A new membership application has been submitted:

Name: ${data.name}
Father's Name: ${data.fatherName}
CNIC: ${data.cnic}
Email: ${data.email}
Address: ${data.address}
Date of Birth: ${data.dob}
Age: ${data.age}
Phone Number: ${data.phone}
Blood Group: ${data.bloodGroup}
Education: ${data.education}
Profession: ${data.profession}
Committed Monthly Fund: ${data.monthlyFund} PKR

Submitted via KWS Website
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Application sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send email. Please try again later." };
  }
}

export async function sendContactMessage(formData: FormData) {
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const receiverEmail = process.env.RECEIVER_EMAIL || emailUser;

  if (!emailUser || !emailPass) {
    return { success: false, message: "Email configuration is missing on the server. Please check .env.local" };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const data = {
    firstName: formData.get("firstName") || "N/A",
    lastName: formData.get("lastName") || "N/A",
    email: formData.get("email") || "N/A",
    subject: formData.get("subject") || "N/A",
    message: formData.get("message") || "N/A",
  };

  const mailOptions = {
    from: `"KWS Contact Form" <${emailUser}>`,
    to: receiverEmail,
    subject: `New Message: ${data.subject}`,
    text: `
You have received a new message from the contact form:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Subject: ${data.subject}

Message:
${data.message}

Submitted via KWS Website
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, message: "Failed to send message. Please try again later." };
  }
}
