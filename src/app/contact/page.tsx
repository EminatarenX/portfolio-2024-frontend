import Layout from "@/modules/common/layouts/layout";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

export default function ContactPage() {
  return (
    <Layout>
      <section className="mt-5 flex flex-col gap-3">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30563.512908095578!2d-93.1653575786514!3d16.754815033415003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85ecd9034e801331%3A0xf8963075c10946f3!2sCa%C3%B1a%20Hueca%20Park!5e0!3m2!1sen!2smx!4v1726516750541!5m2!1sen!2smx"
            width="700"
            height="400"
            className="w-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <form className="flex flex-col gap-5 mt-4">
          <label className="text-white font-semibold text-2xl" htmlFor="name">
            Contact Form
          </label>
          <div className="flex gap-5">
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="text"
              name="name"
              id=""
              placeholder="Full name"
            />
            <input
              className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
              type="email"
              name="email"
              id=""
              placeholder="Email address"
            />
          </div>
          <textarea
            className="bg-transparent p-4 w-full rounded-xl border border-neutral-600 placeholder:font-semibold outline-none text-white font-semibold placeholder:text-neutral-600"
            name="message"
            id=""
            placeholder="your message"
          ></textarea>
          <div className="flex justify-end">
            <button className="flex gap-3 text-lg text-yellow-200 bg-gradient-to-br from-neutral-800 to-neutral-900 py-3 px-5 rounded-xl shadow-lg ">
              <SendIcon className="-rotate-45" sx={{ color: "#fef08a" }} />
              Send Message
            </button>
          </div>
        </form>
      </section>
    </Layout>
  );
}
