import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bzhk49n",
        "template_sem9n3n",
        form.current,
        "GDrRRuLNeTyl7VsFk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div>
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <img src="https://img.freepik.com/free-vector/email-marketing-internet-chatting-24-hours-support_335657-3009.jpg?t=st=1654860513~exp=1654861113~hmac=474a1a2df17afcac0b097be0f23302e1590019f4cc14637190963a6181fa90cb&w=900" alt="" />
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
      <form ref={form} onSubmit={sendEmail}>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">What is your name?</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            name="fullName"
          />
          <label class="label">{/* error */}</label>
        </div>
        <div class="form-control w-full max-w-xs">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
            name="email"
          />
          <label class="label">{/* error */}</label>
        </div>
        <label class="label">
          <span class="label-text">Message</span>
        </label>
        <textarea
          class="textarea textarea-bordered"
          name="message"
          placeholder="Type here"
        ></textarea>
        <div class="form-control mt-6">
          <input
            className="btn btn-success w-full max-w-xs text-white"
            type="submit"
            value="Send"
          />
        </div>
      </form>
      </div>
    </div>
  </div>
</div>
      
    </div>
  );
}

export default Contact;
