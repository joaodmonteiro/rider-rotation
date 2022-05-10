import gorillasLogo from "../images/logo.jpeg";
import { loadLoginPage } from "./login";
import { createUser } from "./firebase";

function loadSignUpPage() {
  document.body.innerHTML = "";

  const signupBackground = document.createElement("div");
  signupBackground.classList.add("login-background");

  document.body.appendChild(signupBackground);

  const signupContainer = document.createElement("div");
  signupContainer.classList.add("login-container");

  signupBackground.appendChild(signupContainer);

  const formContainer = document.createElement("form");
  formContainer.classList.add("form-container");
  signupContainer.appendChild(formContainer);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logo = new Image();
  logo.src = gorillasLogo;

  logoContainer.appendChild(logo);

  formContainer.appendChild(logoContainer);

  const h1 = document.createElement("h1");
  h1.textContent = "Sign up with your email";
  formContainer.appendChild(h1);

  // const usernameLabel = document.createElement("label");
  // usernameLabel.textContent = "Name";
  // usernameLabel.htmlFor = "username-input";

  // const usernameInput = document.createElement("input");
  // usernameInput.type = "text";
  // usernameInput.id = "username-input";
  // usernameInput.name = "name";
  // usernameInput.required = true;

  // formContainer.appendChild(usernameLabel);
  // formContainer.appendChild(usernameInput);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.htmlFor = "email-input";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email-input";
  emailInput.name = "email";
  emailInput.required = true;

  formContainer.appendChild(emailLabel);
  formContainer.appendChild(emailInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password";
  passwordLabel.htmlFor = "password-input";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password-input";
  passwordInput.name = "password";
  passwordInput.required = true;

  formContainer.appendChild(passwordLabel);
  formContainer.appendChild(passwordInput);

  const signUpButton = document.createElement("input");
  signUpButton.type = "submit";
  signUpButton.value = "Create account";
  signUpButton.classList.add("primary-button");
  formContainer.appendChild(signUpButton);

  const signinCTA = document.createElement("p");
  signinCTA.textContent = `Already have an account?`;
  signinCTA.classList.add("login-cta");
  formContainer.appendChild(signinCTA);

  const loginButton = document.createElement("button");
  loginButton.textContent = "Sign In";
  loginButton.classList.add("secondary-button");
  formContainer.appendChild(loginButton);

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    handleSignUpButton(formContainer);
  });

  loginButton.addEventListener("click", () => loadLoginPage());
}

function handleSignUpButton(form) {
  const email = form.email.value;
  const password = form.password.value;
  createUser(email, password);
}

export { loadSignUpPage };
