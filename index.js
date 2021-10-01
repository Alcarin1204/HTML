function isAdd() {//добавление сьроки в список
    const str = document.getElementById("box").value;
    //const getList = document.getElementById("list-items");
    //const element = document.createElement("li");

    if (str === "") {
        return;
    }

    //const but = document.createElement("button");
    //but.appendChild(document.createTextNode("Удалить"));
    //but.addEventListener("click", del);//навешивание листенера на кнопку удаления          

    //const checkBox = document.createElement("input");
    //checkBox.type = "checkbox";
    //checkBox.addEventListener("click", checkBox_Checked); //навешивание листенера на чекбоксы     

    //const text = document.createElement("span");
    //text.innerText = str; 

    //element.appendChild(checkBox);
    //element.appendChild(text);
    array.push({title: str, isChecked: false});
    //element.appendChild(but);
    render(array)
    document.getElementById("box").value = "";//очистка поля после добавления элемента
}

const array = []

function render(array){
             
    const getList = document.getElementById("list-items");
    //const element = document.createElement("li");

    const but = document.createElement("button");
    but.appendChild(document.createTextNode("Удалить"));
    but.addEventListener("click", del);//навешивание листенера на кнопку удаления
    
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.addEventListener("click", checkBox_Checked); //навешивание листенера на чекбоксы     
    
    const text = document.createElement("span");
    //text.innerText = str; 

    array.forEach(i =>{
        text.innerText = i[0]; 
        const element = document.createElement("li");
        element.appendChild(i);
        element.appendChild(text);
        element.appendChild(but);
        getList.appendChild(element);
        }
    );
}
