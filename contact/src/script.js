emailjs.init({
    publicKey: "SG8x00Ld2250TLiFf"
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event){

    event.preventDefault();

    emailjs.send(
        "service_1d4b49g",
        "template_j4or5ya",
        {
            from_name: document.getElementById("name").value,
            from_email: document.getElementById("email").value,
            subject: document.getElementById("subject").value,
            message: document.getElementById("message").value
        }

    ).then(function(){

        alert("✅ Message sent successfully!");

        form.reset();

    }).catch(function(error){

        alert("❌ Failed to send message.");

        console.log(error);

    });

});