"use client";
import { useState } from "react";
import UserNameEmailPol from "./UserNameEmail_pol";
import "./form.css";
import Swal from "sweetalert2";

const MainFormPol2 = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    additionalNotes: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmailNotification = async () => {
    const emailPayload = {
      subject: "New Form Submission",
      message: "You've received a new submission.",
      formData: data
    };

    await fetch("../api/sendEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailPayload),
    });
  };

  const handleSubmit = async () => {
    if (!isValidEmail(data.email)) {
      Swal.fire({
        title: "Error",
        text: "Invalid email address",
        icon: "error",
        confirmButtonText: "Ok",
      });
      return;
    }

    try {
      const response = await fetch("https://api.gtcodelab.com/pages/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error: status ${response.status}`);
      }

      await sendEmailNotification(); // Send the email notification after successful form submission

      Swal.fire({
        title: "Thank you for your submission",
        text: "Our team will review your request and get in touch soon",
        icon: "success",
        confirmButtonText: "Ok",
      });
    } catch (error) {
      console.error("An error occurred: ", error);
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <div className="activeTab">
      <UserNameEmailPol data={data} handleChange={handleChange} />
      <div className="mainFormButton">
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default MainFormPol2;
