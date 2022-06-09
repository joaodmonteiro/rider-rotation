import gorillasLogo from "../images/logo.jpeg";
import { loginEmailPassword } from "./firebase";
import { loadSignUpPage } from "./signup";

function loadLoginPage() {
  document.body.innerHTML = "";

  const loginBackground = document.createElement("div");
  loginBackground.classList.add("login-background");

  document.body.appendChild(loginBackground);

  const loginContainer = document.createElement("div");
  loginContainer.classList.add("login-container");

  loginBackground.appendChild(loginContainer);

  const formContainer = document.createElement("form");
  formContainer.classList.add("form-container");

  loginContainer.appendChild(formContainer);

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logo = new Image();
  logo.src = gorillasLogo;

  logoContainer.appendChild(logo);

  formContainer.appendChild(logoContainer);

  const h1 = document.createElement("h1");
  h1.textContent = "Sign in to your account";

  formContainer.appendChild(h1);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email";
  emailLabel.htmlFor = "email-input";

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.id = "email-input";
  emailInput.required = true;
  emailInput.name = "email";

  formContainer.appendChild(emailLabel);
  formContainer.appendChild(emailInput);

  const passwordLabel = document.createElement("label");
  passwordLabel.textContent = "Password";
  passwordLabel.htmlFor = "password-input";

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.id = "password-input";
  passwordInput.required = true;
  passwordInput.name = "password";

  formContainer.appendChild(passwordLabel);
  formContainer.appendChild(passwordInput);

  const loginButton = document.createElement("input");
  loginButton.type = "submit";
  loginButton.value = "Login";
  loginButton.classList.add("primary-button");
  formContainer.appendChild(loginButton);

  formContainer.addEventListener("submit", (e) => {
    e.preventDefault();
    loginEmailPassword(formContainer.email.value, formContainer.password.value);
  });

  const demoAccLabel = document.createElement("p");
  demoAccLabel.classList.add("login-cta");
  demoAccLabel.textContent = `Don't have an account? That's ok :)`;
  formContainer.appendChild(demoAccLabel);

  const demoAccButton = document.createElement("button");
  demoAccButton.textContent = "Demo Login";
  demoAccButton.classList.add("secondary-button");
  formContainer.appendChild(demoAccButton);

  demoAccButton.addEventListener("click", (e) => {
    e.preventDefault();
    loginEmailPassword("test@test.com", "test123");
  });

  // const signUpCTA = document.createElement("p");
  // signUpCTA.classList.add("login-cta");
  // signUpCTA.textContent = `Don't have an account yet?`;
  // formContainer.appendChild(signUpCTA);

  // const signUpButton = document.createElement("button");
  // signUpButton.textContent = "Sign Up";
  // signUpButton.classList.add("secondary-button");
  // formContainer.appendChild(signUpButton);

  // signUpButton.addEventListener("click", () => loadSignUpPage());
}

function handleLoginButton() {}

export { loadLoginPage };
