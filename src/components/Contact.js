const Contact = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, please feel free to reach out to
        us. We'd love to hear from you!
      </p>
      <div className="contact-form">
        <h3>Contact Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="contact-info">
        <h3>Contact Information</h3>
        <p>Email: contact@example.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 Main St, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
