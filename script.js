let button = document.getElementById("buts");
let score1 = document.getElementById("score1");
let score2 = document.getElementById("score2");

button.addEventListener("click", 
    () => {
    button.classList.add("buts");

    let random1 = Math.floor(Math.random() * 5);
    let random2 = Math.floor(Math.random() * 5);
    
    score1.textContent = random1;
    score2.textContent = random2;
});

let toggleBtn = document.getElementById("theme");
let themeIcon = toggleBtn.querySelector("img");

let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeIcon.src = "Medias/sun-with-face.svg";
    document.body.classList.remove("wallpaper");
    document.body.classList.add("dark-wallpaper");
}else {
    document.body.classList.remove("dark-wallpaper");
    document.body.classList.add("wallpaper");
    themeIcon.src = "Medias/new-moon.svg";
}    

toggleBtn.addEventListener("click", 
    () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        themeIcon.src = "Medias/sun-with-face.svg";
        document.body.classList.remove("wallpaper");
        document.body.classList.add("dark-wallpaper");
    } else {
        localStorage.setItem("theme", "light");
        themeIcon.src = "Medias/new-moon.svg";
        document.body.classList.add("wallpaper");
        document.body.classList.remove("dark-wallpaper");
    }
});
