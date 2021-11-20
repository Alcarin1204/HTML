let masAlp = [];

function fullSelect(){//заполнение SelectBox
    const getSelectBox = document.getElementById("selBox");
    let i =2;
    while(i<=36){
        const new_option = document.createElement("option");
        new_option.textContent = i;
        new_option.value = i;
        getSelectBox.appendChild(new_option);
        i++;
    }
    to_mass();    
}

function to_mass(c1 = 'A', c2 = 'Z') {//заполнение масссива алфавитом
    masAlp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    return (masAlp.slice(masAlp.indexOf(c1), masAlp.indexOf(c2) + 1)); 
}

function changeSystem(){//при изменении selectBox
    const index = document.getElementById("selBox").options.selectedIndex;
    const val = Number(document.getElementById("selBox").options[index].value);//получил n-ую систему

    const p_out =  document.getElementById("number_system");//изменения надписи
    p_out.innerHTML = "В " + val + "-ой системе";

    let input_str = document.getElementById("des_input").value;//получения полей
    const output_str = document.getElementById("des_output");
    output_str.value="";

    const massive = [];
    if(val<10){//перевод в нужную систему счисления
        while(input_str>=val){
            massive.push(input_str%val);
            input_str = parseInt(input_str/val);
        }

    }
    else{
        while(input_str>=val){
            if(input_str%val<9){
                massive.push(input_str%val);              
            }
            else{
                massive.push(masAlp[(input_str%val)-10]);
            }
            input_str = parseInt(input_str/val);
        }
    }
    massive.push(input_str);
    for(let i=massive.length-1; i>=0;i--){
        output_str.value+=massive[i];
    }    
}


function Filter(event){
    const val = Number(document.getElementById("selBox").value);
    let keyCode = ('wich' in event) ? event.which : event.keyCode;
    //let Numeric;
    
    if(val < 10){//ограничение цифр
        Numeric = 10 - val
    }
    else{
        Numeric = 0;
    }
    let isNumeric = (keyCode >= 48 && keyCode <= 57 - Numeric)
    let isAlpha;
    let Alpha;
    if(val > 10){
        Alpha = 65+(val-11);
        isAlpha = (keyCode >= 65 && keyCode <= Alpha)
    }
    else{
        isAlpha = false;
    }
    backspace = keyCode == 8;
    console.log({val, keyCode, Numeric, isNumeric, Alpha, isAlpha});

    return backspace || isAlpha ||isNumeric;
}

function EventListener(event){
    const index = document.getElementById("selBox").options.selectedIndex;
    const val = Number(document.getElementById("selBox").options[index].value);

    const output_str = document.getElementById("des_output").value;//получения полей
    const input_str = document.getElementById("des_input");

    input_str.value = parseInt(output_str, val);
 

}
