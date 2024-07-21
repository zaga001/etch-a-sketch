function createGrid(size) {
    const container = document.querySelector("#container");
    container.innerHTML = "";

    const boxSize = 800 / size;

    for (let i = 0; i < (size * size); i++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        container.appendChild(box);
    }

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((box) => {
        box.addEventListener("mouseover", () => {
            box.classList.add("newBoxColor");
        })
    })
}

document.querySelector("#btn").addEventListener("click", () => {
    let size = prompt("Number of squares per side of the new grid", 16);
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else if (size > 100) {
        alert("Maximum grid size is 100.");
    } else {
        alert("Please enter a valid number.");
    }
})

createGrid(16);
