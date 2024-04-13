const generateForm = document.querySelector(".form-control"); // Corrected class name
const imagegallry = document.querySelector(".image-gallery");

const handleSubmit = (e) => {
  // function  to handle form submission
  e.preventDefault(); // prevent default page reload on submit
  e.preventDefault();

  const userPromt = e.target[0].value; // prompt to Enter Any discription  of your work saved in variable the  UserPrompt
  const imageQulity = e.target[1].value; // Image Quality selected by the user is saved in variable "imageQuality"

  const imageCardMakup = Array.from(
    { length: imageQulity },
    () =>
      `
    <div class="image-card">
        <img src="image/loader.gif" alt="image" />
        <div class="download-container">
          <a href="#" class="donwlod-btn">
            <img
              class="download-image"
              src="image/724933;gbkj;biyfug;i.png"
              alt="download icon"
            />
          </a>
        </div>`
  ).join();
  imagegallry.innerHTML = imageCardMakup; // add images markup to the gallery loader image on DOM
  //   console.log(imageCardMakup);
};

generateForm.addEventListener("submit", handleSubmit);
