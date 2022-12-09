// alert("loading");

function addNewWEField(){
    // console.log("Add New Field.");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add('mt-1');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Work Ex");

    let weOb=document.getElementById("we")
    let weAddButtonOb=document.getElementById("weAddButton");

    weOb.insertBefore(newNode,weAddButtonOb);
    
}

function addNewAQField(){
    // console.log("Academic Qualification");
    let newNode=document.createElement('textarea');
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add('mt-1');
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Academic Qual");

    let aqOb=document.getElementById("aq")
    let aqAddButtonOb=document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode,aqAddButtonOb);
    
}

//Generate Resume
function generateResume(){
    // console.log("Hello generate resume");
    let nameField=document.getElementById("nameField").value;
    let nameT=document.getElementById("nameT");
    nameT.innerHTML=nameField;

    let contactField=document.getElementById("contactField").value;
    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;

    //address
    document.getElementById("addressT").innerHTML=document.getElementById("addressField").value;

    // linkedin link
    document.getElementById("linkedT").href=document.getElementById("linkedField").value;
    
    // linkedin link
    document.getElementById("gitT").href=document.getElementById("gitField").value;
    
    // linkedin link
    document.getElementById("mailT").href="mailto:"+document.getElementById("mailField").value;

    //objective
    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    //Work Experience
    let wes=document.getElementsByClassName("weField");
    let str='';
    for(let e of wes)
    {
        str=str+`<li>${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML=str;
    
    //Academic Experience
    let aqs=document.getElementsByClassName("aqField");
    let str1='';
    for(let e of aqs)
    {
        str1=str1+`<li>${e.value}</li>`;
    }
    document.getElementById("aqT").innerHTML=str1;

    //Resume Form display none
    document.getElementById('resume-form').style.display = "none";

    document.getElementById('resume-template').style.display="block";
    document.getElementById('printfin').style.display="block";


}

function printResume(){
    // console.log("Hello print resume");
    document.getElementById('printfin').style.display="none";

    window.print();
    
}