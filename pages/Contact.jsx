import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        alert('Message sent!');
    };

    return (
        <section className="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:</label>
                <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                
                <label>Email:</label>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                
                <label>Message:</label>
                <textarea required value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
