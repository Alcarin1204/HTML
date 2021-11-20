function isAdd() {//добавление сьроки в список
    const str = document.getElementById("box").value;
    if (str === "") {
        return;
    }
    array.push({title: str, isChecked: false});
    filterList();
    document.getElementById("box").value = "";//очистка поля после добавления элемента
}

const array = []
let currentFilter = "";

function render(array){             
    const getList = document.getElementById("list-items");
    getList.innerHTML="";
    array.forEach((e,index) =>{
        const text = document.createElement("span");
        text.innerText = e.title; 
        const element = document.createElement("li");

        const but = document.createElement("button");
        but.appendChild(document.createTextNode("Удалить"));
        but.addEventListener("click", ()=>del(e));//навешивание листенера на кнопку удаления
    
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.addEventListener("click", ()=>checkBox_Checked(e)); //навешивание листенера на чекбоксы  
        checkBox.checked = e.isChecked;

        if (checkBox.checked){
            text.style.textDecoration = "line-through";
        }
        
        element.appendChild(text);
        element.appendChild(checkBox);
        element.appendChild(but);
        getList.appendChild(element);
        }
    );
}

function del(element) {//удаление строки из списка
    const findDelIndx= array.findIndex(e=>e===element);

    array.splice(findDelIndx, 1);
    filterList();
}

function checkBox_Checked(element){//перечеркивание отмеченных строк
    const findDelIndx= array.findIndex(e=>e===element);

    array[findDelIndx].isChecked=!array[findDelIndx].isChecked;
    filterList();
}

function changeFilter(event){
    event.preventDefault();
    if(currentFilter===event.target.textContent){
        return;
    }
    currentFilter=event.target.textContent;
    filterList();
}

function filterList(){
    const filterList = [];
    if(currentFilter==="Сделано"||currentFilter==="Не сделано"){
        array.forEach(e=>{
            if(e.isChecked===(currentFilter==="Сделано"))
            filterList.push(e);
        });
        render(filterList);
        return;
    }
    render(array);
}