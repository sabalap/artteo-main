const btnArrow = document.querySelector(".btn-arrow")

window.addEventListener("scroll", () => {
    const scrolled = window.scrollY
    if (scrolled < 700) {
        btnArrow.style.display = "none"
    }
    else {
        btnArrow.style.display = "flex"
    }
})