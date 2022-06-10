import React from "react";

function Banner() {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://img.freepik.com/free-vector/programmer-working-web-development-code-engineer-programming-python-php-java-script-computer_90220-249.jpg?t=st=1654851051~exp=1654851651~hmac=97160270078ab324b84bce7e4798d70160f4aa6c720cd1ecf2894c910205657f&w=826"
            class="max-w-sm rounded-lg shadow-2xl"
          />
          <div class="w-5/6 mx-auto">
            <h1 class="text-2xl font-bold">Hi,I am</h1>
            <h1 class="text-4xl font-bold">Afsana Ara Bristy</h1>
            <p class="py-6">Web Developer</p>
            <a href="https://drive.google.com/file/d/1W2DXEX3jOlRLeuj3UCJnIsNEGdlTVKMW/view" target="_blank">
            <button class="btn btn-primary">Download Resume</button>
            </a>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
