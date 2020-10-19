const elA = document.querySelectorAll('.el-a');
const elB = document.querySelectorAll('.el-b');
const elInpA = document.querySelectorAll('.va');
const elInpB = document.querySelectorAll('.vb');
let a = 'Name10';
let b = 'Name20';
let winner = '';
let looser = '';
let totalA ='';
let totalB ='';

let a1 = 0; 
let a2 = 0; 
let a3 = 0 ;
let b1 = 0; 
let b2 = 0; 
let b3 = 0;

const foundClassList=(item)=>{
    let tab = '';
    if(item[0] === 'a') {
        tab = 'tab-a';
    }
    if(item[0] === 'b') {
        tab = 'tab-b';
    }
    if(document.querySelector(`.${item}`).classList.contains(tab)){
        document.querySelector(`.${item}`).classList.remove(tab);
        document.querySelector(`.v${item}`).setAttribute('value', 'false');
        
    } else{
        document.querySelector(`.${item}`).classList.add(tab);
        document.querySelector(`.v${item}`).setAttribute('value', 'true');
    }
}

const takeA = (a)=>{
    foundClassList(a);
    // document.querySelector(`.${a}`).classList.toggle('tab-a');
    console.log("ok");
    
    
}

const takeB = (b)=>{
    foundClassList(b);
    // document.querySelector(`.${b}`).classList.toggle('tab-b');
    // document.querySelector(`.v${b}`).setAttribute('value', 'false');
}
const fullTie= () =>{
    elA.forEach((item)=>{
        item.classList.add('tab-a');
        // item.setAttribute('value', 'true');
    });
    
    elB.forEach((item)=>{
        item.classList.add('tab-b');
        // item.setAttribute('value', 'true');
    });
    elInpA.forEach((item)=>{
        item.setAttribute('value', 'true');
    });
    elInpB.forEach((item)=>{
        item.setAttribute('value', 'true');
    });


    
}
const resetField = ()=>{
    elA.forEach((item)=>{
        item.classList.remove('tab-a');
    });
    elB.forEach((item)=>{
        item.classList.remove('tab-b');
    });
    elInpA.forEach((item)=>{
        item.setAttribute('value', 'false');
    });
    elInpB.forEach((item)=>{
        item.setAttribute('value', 'false');
    });
}
