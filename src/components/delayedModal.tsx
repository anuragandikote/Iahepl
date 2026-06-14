"use client";
import React, { useState, useEffect, forwardRef, useImperativeHandle } from "react";
import { Modal, Box, Typography, TextField, Button, Fade, Backdrop, Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export type DelayedModalHandle = {
  openModal: () => void;
};

const DelayedModal = forwardRef((props, ref) => {
  const [showModal, setShowModal] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [form, setForm] = useState({ name: "", contact: "", email: "", message: "", interestedIn: "", heardAbout: "" });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted) return;
    const shown = sessionStorage.getItem("modalShown");
    if (!shown) {
      const timer = setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("modalShown", "true");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [mounted]);

  useImperativeHandle(ref, () => ({
    openModal: () => setShowModal(true),
  }));

  const handleChange = (e: any) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbzdLkEuWArIgO8J6Js1G_0WRNg84SGgxLvtRzp9777S0GG4GrIfwM5muhL_YlvaooMk/exec", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        mode: "no-cors",
      });
      setSubmitted(true);
      setForm({ name: "", contact: "", email: "", message: "", interestedIn: "", heardAbout: "" });
      setTimeout(() => setShowModal(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (!mounted) return null; // 🧩 Prevent hydration mismatch

  return (
    <Modal
      open={showModal}
      onClose={() => setShowModal(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{ backdrop: { timeout: 500 } }}
    >
      <Fade in={showModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 500 },
            bgcolor: "#fff",
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
          }}
        >
          <Typography variant="h5" align="center" fontWeight="bold" gutterBottom>
            Contact Us
          </Typography>

          {submitted ? (
            <Typography align="center" color="green">
              Thank you for contacting us! We’ll get back soon.
            </Typography>
          ) : (
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField name="name" label="Your Name" value={form.name} onChange={handleChange} required />
              <TextField name="contact" label="Contact Number" value={form.contact} onChange={handleChange} required />
              <TextField name="email" label="Email" type="email" value={form.email} onChange={handleChange} required />
              <FormControl fullWidth required>
                <InputLabel>Interested In</InputLabel>
                <Select
                  name="interestedIn"
                  value={form.interestedIn}
                  label="Interested In"
                  onChange={handleChange}
                >
                  <MenuItem value="ssb">SSB</MenuItem>
                  <MenuItem value="nda">NDA</MenuItem>
                  <MenuItem value="cds">CDS</MenuItem>
                  <MenuItem value="afcat">AFCAT</MenuItem>
                  <MenuItem value="capf">CAPF</MenuItem>
                  <MenuItem value="career">Career Counseling</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth required>
                <InputLabel>How did you hear about us?</InputLabel>
                <Select
                  name="heardAbout"
                  value={form.heardAbout}
                  label="How did you hear about us?"
                  onChange={handleChange}
                >
                  <MenuItem value="social_media">Social Media</MenuItem>
                  <MenuItem value="google_search">Google Search</MenuItem>
                  <MenuItem value="seminars">Seminars</MenuItem>
                  <MenuItem value="friend_colleague">Friend/Colleague</MenuItem>
                  <MenuItem value="other">Other</MenuItem>
                </Select>
              </FormControl>
              <TextField name="message" label="Your Message" value={form.message} onChange={handleChange} multiline rows={4} required />
              <Button type="submit" variant="contained" sx={{ bgcolor: "#2A2C30", ":hover": { bgcolor: "#1f2023" } }}>
                {loading ? "Submitting..." : "Send Message"}
              </Button>
              <Button onClick={() => setShowModal(false)}>Close</Button>
            </Box>
          )}
        </Box>
      </Fade>
    </Modal>
  );
});

export default DelayedModal;
