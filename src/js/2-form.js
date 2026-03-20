let formData = {
  email: "",
  message: ""
};
const form = document.querySelector(".feedback-form");
const savedData = localStorage.getItem("feedback-form-state");
if (savedData) {
  formData = JSON.parse(savedData);
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}
form.addEventListener("input", (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem("feedback-form-state", JSON.stringify(formData));
});
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (formData.email === "" || formData.message === "") {
    alert("Fill please all fields");
    return;
    }
    console.log(formData);
localStorage.removeItem("feedback-form-state");
  formData = { email: "", message: "" };
  form.reset();
});


