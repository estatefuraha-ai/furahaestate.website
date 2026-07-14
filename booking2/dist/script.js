// Initialize EmailJS
emailjs.init("SG8x00Ld2250TLiFf");

const form = document.getElementById("bookingForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    // Which button was clicked?
    const action = e.submitter.value;

    const booking = {
        guest_name: document.getElementById("name").value,
        guest_email: document.getElementById("email").value,
        guest_phone: document.getElementById("phone").value,
        apartment_type: document.getElementById("apartment").value,
        checkin: document.getElementById("checkin").value,
        checkout: document.getElementById("checkout").value,
        guests: document.getElementById("guests").value,
        message: document.getElementById("message").value
    };

    // SEND TO EMAIL
    if (action === "email") {
        emailjs.send(
            "service_1d4b49g",
            "template_ojj993f",
            booking
        )
        .then(function () {
            alert("Booking sent to Email successfully!");
            form.reset();
        })
        .catch(function (error) {
            alert("Email sending failed.");
            console.log(error);
        });
    }

    // SEND TO WHATSAPP
    if (action === "whatsapp") {
        

const g=id=>document.getElementById(id).value;
const text=`Hello Furaha Estate,

I would like to book an Apartment.

Name: ${g("name")}
Phone: ${g("phone")}
Email: ${g("email")}
Apartment Type: ${g("apartment")}
Check-in: ${g("checkin")}
Check-out: ${g("checkout")}
Guests: ${g("guests")}

Special Request:
${g("message")}`;

        window.open(
            "https://wa.me/255719054077?text=" +
            encodeURIComponent(text),
            "_blank"
        );

    }

});