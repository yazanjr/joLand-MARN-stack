import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "75376bf0-01bf-46b3-84c5-b0860682cb40");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully ✅");
      event.target.reset();
    } else {
      setResult("Something went wrong ❌");
    }
  };

  return (
    <div
      id="Contact"
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
    >
      <h1 lang="ar" className="text-2xl sm:text-4xl font-bold mb-2 text-center">
       ! لا تفوّت الفرصة القادمة
               <span className="underline underline-offset-4 decoration-1 font-light">
          
        </span>
      </h1>

      <p lang="ar" className="text-center text-gray-500 mb-12 mx-auto">
  الفرص الاستثمارية لا تنتظر طويلاً وأفضل الأراضي تُباع بسرعة.<br />
  املأ بياناتك وسيتواصل معك أحد مستشارينا ليعرض عليك المشاريع الحالية والفرص القادمة التي تناسب أهدافك الاستثمارية.
</p>


      <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-[calc(50%-0.5rem)] text-left">
            <label className="block font-medium text-gray-700 mb-2">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="w-full md:w-[calc(50%-0.5rem)] text-left">
            <label className="block font-medium text-gray-700 mb-2">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full border border-gray-300 rounded py-3 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="my-6 text-left">
          <label className="block font-medium text-gray-700 mb-2">Message</label>
          <textarea
            name="message"
            placeholder="Message"
            required
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          lang="ar"
          className="bg-[#3b6d72] hover:bg-[#d5ae49] text-white py-2 px-12 mb-10 rounded transition-colors duration-300"
        >
          تواصل مع مستشار
        </button>

        {result && <p className="text-center text-gray-700">{result}</p>}
      </form>
    </div>
  );
};

export default Contact;
