'use client'
import Image from "next/image";
import { useState } from "react";
import photo1 from "@/assets/photo1.jpg";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", contact: '', email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await fetch('https://script.google.com/macros/s/AKfycbzdLkEuWArIgO8J6Js1G_0WRNg84SGgxLvtRzp9777S0GG4GrIfwM5muhL_YlvaooMk/exec', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(form),
              mode: 'no-cors',
            });
        
            const result = await response;
            console.log("Success:", result);
            alert("Form submitted successfully!");
            
          } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form. Please try again later.");
          }
        setSubmitted(true);
        setForm({ name: "", contact: '', email: "", message: "" });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1500&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative"
            }}
        >
            <div className="absolute"></div>
            <div className="relative z-10 w-full container px-16 mx-auto flex flex-col md:flex-row rounded-xl shadow-2xl overflow-hidden bg-opacity-90">
                {/* Left: Images and Info */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-center p-6 backdrop-blur text-white">
                    <Image
                        src="/images/logo.png"
                        alt="Armed Forces"
                        width={200}
                        height={200}
                        unoptimized
                        priority
                        className="mb-6 w-full object-contain h-48 md:h-64 p-2"
                    />
                    <p className="mb-4 text-center text-sm">
                        Dedicated to shaping the future of India's defence aspirants.<br />
                        Join us for NDA, CDS, AFCAT, SSB and more!
                    </p>
                    <div className="space-y-2 text-center text-sm">
                        <div>📍 #505/1/2, 2nd Floor, Beside Karishma Police Station, Karkhana, Secunderabad, 500015(Telangana)</div>
                        <div>📞 79890 50069, 97004 54572</div>
                        <div>✉️ iahepl.secunderabad@gmail.com</div>
                    </div>
                </div>
                {/* Right: Contact Form */}
                <div className="md:w-1/2 w-full flex flex-col justify-center p-8">
                    <h1 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h1>
                    <p className="mb-6 text-center text-black font-extrabold">
                        Reach out to us for any queries or support. We are here to help you!
                    </p>
                    {submitted ? (
                        <div className="text-black text-center font-extrabold">
                            Thank you for contacting us! We will get back to you soon.
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="font-extrabold text-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <input
                                type="contact"
                                name="contact"
                                placeholder="Your contact number"
                                value={form.contact}
                                onChange={handleChange}
                                required
                                className="font-extrabold text-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="font-extrabold text-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="font-extrabold text-white w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800"
                            />
                            <button
                                type="submit"
                                className="w-full bg-gray-900 text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}