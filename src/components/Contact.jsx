import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message,
    };

    emailjs.send('service_r97mig6', 'template_17a986i', templateParams, 'thOUhUC0IkGrDuFUT')
      .then((result) => {
        alert('Email sent successfully!');
        setEmail('');
        setName('');
        setSubject('');
        setMessage('');
        setLoading(false);
      }, (error) => {
        alert('Failed to send email. Please try again.');
        setError(error.text);
        setLoading(false);
      });
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-900 to-purple-900 p-8">
      <h1 className="text-5xl font-bold text-white mb-4">Contact</h1>
      <p className="text-xl text-white mb-8">Feel free to reach out to me for any questions or opportunities!</p>
      <div className="bg-gray-900 p-6 rounded-lg w-full max-w-xl">
        <form onSubmit={sendEmail} className="flex flex-col space-y-4">
          <h1 className="bg-blueviolet text-white px-4 py-2 rounded-lg w-full text-xl font-bold mb-4">
            Email Me 🚀
          </h1>
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-6 py-2 border border-gray-400 rounded-xl text-white focus:outline-none focus:border-purple-500 bg-transparent"
          />
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-6 py-2 border border-gray-400 rounded-xl text-white focus:outline-none focus:border-purple-500 bg-transparent"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="px-6 py-2 border border-gray-400 rounded-xl text-white focus:outline-none focus:border-purple-500 bg-transparent"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="px-6 py-2 border border-gray-400 rounded-xl text-white focus:outline-none focus:border-purple-500 h-32 resize-none bg-transparent"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-lg w-full text-xl font-bold mb-4"
          >
            {loading ? 'Sending...' : 'Send Email 🚀'}
          </button>
          {error && <p className="text-red-500">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
