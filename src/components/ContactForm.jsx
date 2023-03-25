import React, { useState } from "react";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/d7f4f4a0-7813-11ed-a126-b172cf164538";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className="text-xl p-4 font-semibold text-center">
          Thank you for your message!
        </div>
      </>
    );
  }

  return (
    <div className="w-full mx-auto">
      <form
        className="p-4 bg-black rounded-lg"
        action={FORM_ENDPOINT}
        onSubmit={() => handleSubmit()}
        method="POST"
        target="_blank"
      >
        <label className="block mb-6" for="name">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="block w-full p-2 rounded-lg shadow-sm focus:ring focus:ring-indigo-200 focus:ring-opacity-50 font-serif"
            required
          />
        </label>
        <label className="block mb-6" for="email">
          <input
            type="text"
            name="email"
            placeholder="hello@kitty.com"
            className="block w-full p-2 border-gray-400 rounded-lg shadow-sm font-serif"
            pattern="[^ @]*@[^ @]*"
            required
          />
        </label>
        <label className="block mb-6" for="message">
          <textarea
            name="message"
            placeholder="Your message here"
            className="block w-full p-2 rounded-lg shadow-sm font-serif"
          >
          </textarea>
        </label>
        <div className="mb-4">
          <button
            type="submit"
            className="submit-button h-10 px-5 text-white font-semibold rounded-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
