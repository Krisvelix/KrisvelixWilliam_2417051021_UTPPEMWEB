function sendMessage() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Semua field harus diisi!");
    } else if (!email.includes("@")) {
        alert("Email tidak valid!");
    } else {
        alert("Pesan berhasil dikirim!");
    }
}

function filterProject(category) {
    let projects = document.querySelectorAll(".project-card");

    projects.forEach(project => {
        project.classList.remove("show");
        project.classList.add("hide");

        setTimeout(() => {
            if (category === "all") {
                project.style.display = "block";
                project.classList.add("show");
            } else if (project.classList.contains(category)) {
                project.style.display = "block";
                project.classList.add("show");
            } else {
                project.style.display = "none";
            }
        }, 200);
    });

    // ACTIVE BUTTON
    let buttons = document.querySelectorAll(".filter button");
    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");
}

function scrollToProject() {
    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });
}

function viewProject() {
    alert("Ini detail project (dummy)");
}