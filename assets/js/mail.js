function sendmail() {
    let params = {
        name: document.getElementById("fname").value,
        email: document.getElementById("femail").value,
        subject: document.getElementById("fsubject").value,
        budget: document.getElementById("fbudget").value,
        comment: document.getElementById("fcomment").value
    }

    emailjs.send("service_9ek743o","template_xz0k985",params).then(alert("Email is sent"));
}