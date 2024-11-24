document.addEventListener("DOMContentLoaded", function () {
    const labels = document.querySelectorAll("label");
    labels.forEach((label) => {
        if (label.getAttribute("for") === "txtname" || label.getAttribute("for") === "txtemail") {
            const asterisk = document.createElement("span");
            asterisk.textContent = " *";
            asterisk.style.color = "red";
            label.appendChild(asterisk);
        }
    });

    const form = document.querySelector("form");
    const nameLabel = document.querySelector("label[for='txtname']");

    const messageDiv = document.createElement("div");
    messageDiv.style.display = "none";
    messageDiv.style.padding = "10px 20px";
    messageDiv.style.margin = "4px auto";
    messageDiv.style.width = "90%";

    form.insertBefore(messageDiv, nameLabel);

    function showMessage(type, text) {
        if (type === "error") {
            messageDiv.style.backgroundColor = "#EECCCC";
            messageDiv.style.color = "black";
            messageDiv.style.borderRadius = "0px";
        } else if (type === "success") {
            messageDiv.style.backgroundColor = "#CCEECC";
            messageDiv.style.color = "black";
            messageDiv.style.borderRadius = "0";
        }
        messageDiv.textContent = text;
        messageDiv.style.display = "block";
    }

    const resetButton = document.getElementById("btnreset");
    resetButton.addEventListener("click", function () {
        document.getElementById("txtname").value = "";
        document.getElementById("txtemail").value = "";
        document.getElementById("txtaddress").value = "";
        document.querySelector("select[name='ddlage']").selectedIndex = 0;

        messageDiv.style.display = "none";
    });

    const submitButton = document.getElementById("btnsubmit");
    submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const name = document.getElementById("txtname").value.trim();
        const email = document.getElementById("txtemail").value.trim();

        if (!name || !email) {
            showMessage("error", "Please fill in your name and email.");
        } else {
            showMessage(
                "success",
                "Thank you for your interest in our workshop. We will send you a confirmation mail if your name is added to the guest list."
            );
        }
    });
});
