function sendEmail() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  if (message && name && email) {
    const subject = "Nouveau message de " + name;
    const body =
      "Nom: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message;

    const mailtoLink =
      "mailto:marco.goli@edu.devinci.fr?subject=" +
      encodeURIComponent(subject) +
      "&body=" +
      encodeURIComponent(body);

    window.location.href = mailtoLink;
  } else {
    alert("Veuillez remplir tous les champs");
  }
}

// const userID = "ton_user_id_emailjs";
// const serviceID = "ton_service_id";
// const templateID = "ton_template_id";

// emailjs.init(userID);

// function sendEmail() {
//   const name = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const message = document.getElementById("message").value;

//   if (name === "" || email === "" || message === "") {
//     alert("Veuillez remplir tous les champs.");
//     return;
//   }

//   emailjs
//     .send(
//       serviceID,
//       templateID,
//       {
//         from_name: name,
//         from_email: email,
//         message: message,
//       },
//       userID
//     )
//     .then(
//       function (response) {
//         console.log("Succès de l'envoi :", response);
//         alert("Votre message a été envoyé avec succès !");
//         document.getElementById("contact-form").reset();
//       },
//       function (error) {
//         console.log("Erreur lors de l'envoi :", error);
//         alert("Une erreur est survenue, veuillez réessayer.");
//       }
//     );
// }
