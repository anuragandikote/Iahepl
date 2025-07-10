"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  Fade,
  Backdrop,
} from "@mui/material";

const DelayedModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 5000); // 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzdLkEuWArIgO8J6Js1G_0WRNg84SGgxLvtRzp9777S0GG4GrIfwM5muhL_YlvaooMk/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
          mode: "no-cors",
        }
      );

      console.log("Success:", response);
      alert("Form submitted successfully!");
      setSubmitted(true);
      setForm({ name: "", contact: "", email: "", message: "" });

      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    } finally {
      setLoading(false);
    }
    setSubmitted(true);
    setForm({ name: "", contact: '', email: "", message: "" });

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <>
      <Modal
        open={showModal}
        onClose={() => setShowModal(false)}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={showModal}>
          <Box
            sx={{
              position: "absolute" as const,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: { xs: "90%", sm: 500 },
              bgcolor: "white",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              color="black"
              gutterBottom
            >
              Contact Us
            </Typography>
            <Typography
              align="center"
              color="black"
              fontWeight="bold"
              gutterBottom
            >
              Reach out to us for any queries or support. We are here to help
              you!
            </Typography>

            {submitted ? (
              <Typography align="center" color="black" fontWeight="bold">
                Thank you for contacting us! We will get back to you soon.
              </Typography>
            ) : (
              <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                  name="name"
                  label="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{ style: { color: "#000" } }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  variant="outlined"
                />
                <TextField
                  name="contact"
                  label="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{ style: { color: "#000" } }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  variant="outlined"
                />
                <TextField
                  name="email"
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  fullWidth
                  required
                  InputProps={{ style: { color: "#000" } }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  variant="outlined"
                />
                <TextField
                  name="message"
                  label="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                  required
                  InputProps={{ style: { color: "#000" } }}
                  InputLabelProps={{ style: { color: "#ccc" } }}
                  variant="outlined"
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  sx={{ mt: 1, color: "#fff", backgroundColor: "#2A2C30" }}
                >
                  {loading ? "Submitting..." : "Send Message"}
                </Button>
                <Button
                  onClick={() => setShowModal(false)}
                  variant="text"
                  sx={{ color: "#2A2c30" }}
                >
                  Close
                </Button>
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default DelayedModal;