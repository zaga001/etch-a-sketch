for (let i = 0; i < 256; i++) {
    const box = document.createElement("div");
    box.classList.add("box");
    document.querySelector("#container").appendChild(box);
}

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("mouseover", () => {
        box.classList.add("newBoxColor");
    })
})
