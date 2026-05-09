 const input = document.querySelector("#input");
    const add = document.querySelector(".add");
    const taskDisplay = document.querySelector("#taskDisplay");

    add.addEventListener("click", ()=>{


      if(!input.value.trim()){
        alert("Write Something!");
        
        return;
      }

      const newDiv = document.createElement("div");
      newDiv.className = "task";

      const pTag = document.createElement("p");
      pTag.textContent = input.value;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "deleteBtn";

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "✔";
      doneBtn.className = "doneBtn";

      deleteBtn.addEventListener("click",()=>{
        newDiv.remove();
      });

      doneBtn.addEventListener("click", ()=>{
         newDiv.classList.toggle('completed');
      });

      newDiv.appendChild(pTag);
      newDiv.appendChild(deleteBtn);
      newDiv.appendChild(doneBtn);
      taskDisplay.appendChild(newDiv);

      input.value = "";

    });
