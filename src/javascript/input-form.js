const nameInput = document.getElementById("name");
const nameLabel = document.getElementById("name-label");
const emailInput = document.getElementById("email");
const emailLabel = document.getElementById("email-label");

const handleLabelPosition = (input, label) => {
  if (input.value.trim() !== "") {
    label.classList.add("top-[-10px]", "text-black");
    label.classList.remove("top-2", "text-gray-500");
  } else {
    label.classList.add("top-2", "text-gray-500");
    label.classList.remove("top-[-10px]", "text-black");
  }
};

nameInput.addEventListener("input", () =>
  handleLabelPosition(nameInput, nameLabel)
);
nameInput.addEventListener("focus", () =>
  handleLabelPosition(nameInput, nameLabel)
);
nameInput.addEventListener("blur", () =>
  handleLabelPosition(nameInput, nameLabel)
);

emailInput.addEventListener("input", () =>
  handleLabelPosition(emailInput, emailLabel)
);
emailInput.addEventListener("focus", () =>
  handleLabelPosition(emailInput, emailLabel)
);
emailInput.addEventListener("blur", () =>
  handleLabelPosition(emailInput, emailLabel)
);
