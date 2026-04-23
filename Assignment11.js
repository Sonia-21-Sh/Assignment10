/* change*/
const btn = document.querySelector("button");
const img = document.getElementById("userImg");
const name = document.getElementById("userName");
const email = document.getElementById("userEmail");
const loading = document.querySelector(".loading");

async function getUser() {
    try {
        loading.innerText = "Loading...";

        name.innerText = "";
        email.innerText = "";
        img.src = "";

        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();

        const user = data.results[0];

        img.src = user.picture.large;
        name.innerText = user.name.first + " " + user.name.last;
        email.innerText = user.email;

        loading.innerText = "";

    } catch (error) {
        loading.innerText = "Error loading user!";
    }
}

// button click
btn.addEventListener("click", getUser);

// page load pe auto user
getUser();
