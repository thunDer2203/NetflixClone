let button_questions = document.querySelectorAll('#questions');
let main_button = document.querySelectorAll('#email');
var bool=false;
for(var i=0;i<2;i++){
main_button[i].addEventListener('click', change_in_mail);
main_button[i].addEventListener("focusout", focus_out);
}
let bodybutton = document.getElementById('body');
let arr = [0,0,0];
let arr_email=[0,0];
for (var i = 0; i < button_questions.length; i++){
button_questions[i].addEventListener('click', pressed);
}
function pressed(){
    for (var i = 0 ; i < button_questions.length; i++){
        let childrens = button_questions[i].children;
        if (button_questions[i] == this){
            if(arr[i] == 0){
            button_questions[i].nextElementSibling.style.display = 'block';
            for(var j = 0; j < 3; j++){
                if(i == j)
            arr[j] = 1;
        else
        arr[j]=0;
            }
            childrens[1].style.transform = 'rotate(45deg)';
            }
        else{
        button_questions[i].nextElementSibling.style.display = 'none';
        arr[i] =0;
        childrens[1].style.transform = 'rotate(0deg)';
        }
        }
        else{
        button_questions[i].nextElementSibling.style.display = 'none';
        childrens[1].style.transform = 'rotate(0deg)';
        }
    }
}
function focus_out(){
    label[1].style.fontSize = '15px';
    label[1].style.top = '1px';
    label[1].style.left='310px';
arr_email[1]=0;
label[0].style.fontSize = '15px';
label[0].style.top = '1px';
label[0].style.left='338px';
arr_email[0]=0;
}
function change_in_mail(){   
    for(var i=0; i<2; i++){
        var label=document.querySelectorAll('#label')
        //for the button pressed
        if(main_button[i] == this){
            //for changing type
            if(arr_email[i] == 0){
                if(i==1){
label[i].style.fontSize = '13px';
label[i].style.top = '-9.5px';
label[i].style.left='307px';
}
if(i== 0){
label[i].style.fontSize = '13px';
label[i].style.top = '-10px';
label[i].style.left='335px';
}
for(var j = 0; j < 2; j++){
    if(i == j)
arr_email[j] = 1;
else
arr_email[j]=0;
}
}
//for restoring deafault
else
{
    if(i==1){
// label[i].style.fontSize = '15px';
// label[i].style.top = '1.5px';
// label[i].style.left='310px';
arr_email[i]=0;
    }
    if(i== 0){
//         label[i].style.fontSize = '15px';
// label[i].style.top = '1px';
// label[i].style.left='338px';
arr_email[i]=0;
    }
}
}
//restoring the button not pressed
else{
    if(i==1){
        label[i].style.fontSize = '15px';
        label[i].style.top = '1.5px';
        label[i].style.left='329px';
arr_email[i]=0;
    }
    if(i== 0){
    label[i].style.fontSize = '15px';
    label[i].style.top = '1px';
    label[i].style.left='338px';
    arr_email[i]=0;
    }
}
}

}