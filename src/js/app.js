import { left, right } from "@popperjs/core";
import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should show the cover image
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the image's url that will be used as a background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "right", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastName: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); // print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${
            variables.name == null || variables.name == ""
              ? "first name"
              : variables.name
          }
          ${
            variables.lastName == null || variables.lastName == ""
              ? "last Name"
              : variables.lastName
          }</h1>
          <h2>${
            variables.role == null || variables.role == ""
              ? "Role"
              : variables.role
          }</h2>
          <h3>${
            variables.city == null || variables.city == ""
              ? "City"
              : variables.city
          }, ${
    variables.country == null || variables.country == ""
      ? "Country"
      : variables.countr
  }</h3>
    <ul class=${variables.socialMediaPosition}>
            <li><a href="https://twitter.com/${
              variables.twitter ? variables.twitter : "Sarto"
            }" target="_blank"><i class="fab fa-twitter"></i></a></li>
            <li><a href="https://github.com/${
              variables.github ? variables.github : "Sartorius11"
            }" target="_blank"><i class="fab fa-github"></i></a></li>
            <li><a href="https://linkedin.com/${
              variables.linkedin
                ? variables.linkedin
                : "Fernando-Sartorius-Carreras"
            }" target="_blank"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${
              variables.instagram ? variables.instagram : "You"
            }" target="_blank"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>`;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should show the cover image
    includeCover: true,
    // this is the image's url that will be used as a background for the profile cover
    background:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgziRwVG7Dlxe4PWFLhzYdazGECU-nC6vvH7fTHFrN-JhNeA5a8K873MVqNyT2UECv_CwOxvfrHU8_j7epKTdR0qpUQBDZEiCRlY6T68hu_B3is5bMeoM5rwS86wJQ7K4aHX02uSZPtneg/s1600/Magic_the_gathering-card_back.jpg",
    // this is the url for the profile avatar
    avatarURL:
      "https://i.etsystatic.com/22474890/r/il/e46033/2591689389/il_fullxfull.2591689389_pyku.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    x: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastName: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); // render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new values
    });
  });
};
