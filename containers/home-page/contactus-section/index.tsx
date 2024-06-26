import React from "react";

const ContactSection = () => {
  return (
    <div className="h-[auto] mt-40 md:mb-0 lg:mb-0 sm:mb-[30px] ">
      <div className="flex flex-1 justify-center">
        <h1 className="font-sulphurPoint">CONTACT US</h1>
      </div>

      <div className="flex flex-col">
        <form className="form">
          <div className="flex flex-col md:flex-row justify-center md:justify-between sm:gap-[30px] md:gap-[140px]  lg:gap-[140px] p-4">
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="input-textbox"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="input-textbox"
              required
            />
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between sm:gap-[30px] md:gap-[140px]  lg:gap-[140px] p-4">
            <input
              type="number"
              id="phone"
              placeholder="Your Phone Number"
              className="input-textbox "
              required
            />
            <input
              type="text"
              id="company"
              placeholder="Your Company"
              className="input-textbox "
            />
          </div>

          <div className="flex justify-center gap-[140px] p-4">
            <input
              type="text"
              id="message"
              placeholder="Your Project Description"
              className="input-textbox"
              required
            />
          </div>
        </form>
      </div>

      <div className="flex sm:justify-center md:justify-end lg:justify-end mt-10 md:mr-10 lg:mr-10 ">
        <button className="submit_btn" type="submit">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
