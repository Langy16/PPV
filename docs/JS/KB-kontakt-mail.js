(function () {
    emailjs.init("user_lPVs7E7cnpncZAml6fEmk");
})();

function sendMail(params) {
    var tempParams = {
        from_name: document.getElementById("from").value,
        message: document.getElementById("Text").value,
        reply_to: document.getElementById("email").value
    };

    emailjs.send("service_85o1vi8", "template_iihh4vc", tempParams)
}