 const input = document.querySelector("#input");
 const add = document.querySelector(".add");
 const taskDisplay = document.querySelector("#taskDisplay");
 const taskCount = document.querySelector("#taskCount");
 

 let tasks = [];

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
        tasks.length -= 1;
        taskCount.textContent = tasks.length;
      });

      doneBtn.addEventListener("click", ()=>{
         newDiv.classList.toggle('completed');
      });
      newDiv.appendChild(pTag);
      newDiv.appendChild(deleteBtn);
      newDiv.appendChild(doneBtn);
      taskDisplay.appendChild(newDiv);

      tasks.push(input.value);
      console.log(tasks.length);
      taskCount.textContent = `${"📋"}: ${tasks.length}`;

      input.value = "";

      const editBtn = document.createElement("button");
      editBtn.textContent = "Edit";
      editBtn.style.backgroundColor= "Green";
      newDiv.appendChild(editBtn);

      editBtn.addEventListener("click", ()=>{
        pTag.contentEditable = "true";
      });

    });

    input.addEventListener("keydown", (e)=>{
      if(e.key ==="Enter"){
        e.preventDefault();
        add.click();
      }
    });
