function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (message && name && email) {
    const subject = "Nouveau message de " + name;
    const body =
      "Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    const mailtoLink =
      "mailto:marco.goli@outlook.com?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  } else {
    alert("Veuillez remplir tous les champs");
  }
}
