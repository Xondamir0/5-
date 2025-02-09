const todoForm = document.querySelector("#form");
const todoInput = document.querySelector("#input");
const todoList = document.querySelector("#wrapper");

todoForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskValue = todoInput.value.trim();

    if (taskValue) {
        const newItem = document.createElement("li");
        newItem.innerHTML = `
            <div class="flex items-center gap-[10px]">
                <input class="check" type="checkbox">
                <span class="soz text-white font-bold">${taskValue}</span>
                <button class="delete w-[100px] bg-red-600 p-[10px] rounded-[40px] text-white font-bold hover:bg-red-900">Delete</button>
                <button class="edit w-[100px] bg-green-600 p-[10px] rounded-[40px] text-white font-bold hover:bg-red-900">Edit</button>
            </div>
        `;

        const checkInput = newItem.querySelector(".check");
        const checkText = newItem.querySelector(".soz");
        const todoDelete = newItem.querySelector(".delete");
        const todoEdit = newItem.querySelector(".edit");

        checkInput.addEventListener("change", () => {
            checkText.style.textDecoration = checkInput.checked ? "line-through" : "none";
        });

        todoDelete.addEventListener("click", () => {
            newItem.remove();
        });

        todoEdit.addEventListener("click", () => {
            const newEdit = prompt("Enter your text", checkText.textContent);
            if (newEdit && newEdit.trim()) {
                checkText.innerHTML = newEdit.trim();
            } else {
                alert("Iltimos, so'z kiriting!");
            }
        });

        todoList.appendChild(newItem);
        todoInput.value = ""; // Очистка поля ввода
    } else {
        alert("Iltimos, so'z kiriting!");
    }
});
