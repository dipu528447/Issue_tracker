//stop onsubmit refreshing
var form = document.getElementById("issueForm");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// input component
const issues = [];
let txtDescription = document.getElementById("txtDescription");
let selectServerity = document.getElementById("selectServerity");
let txtAssignedTo = document.getElementById("txtAssignedTo");
let btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", ()=>{
    issues[issues.length]={
        description: txtDescription.value,
        serverity: selectServerity.value,
        assignedto: txtAssignedTo.value,
        status: "open"
    }
    load();
});
//display component
let main = document.getElementById("main");
function load(){
    main.innerHTML="";
    document.getElementById("totalIssue").innerText=`Total: ${issues.length}`;
    document.getElementById("openIssue").innerText=`Opened: ${issues.filter(item=>item.status=="open").length}`
    document.getElementById("closeIssue").innerText=`Closed: ${issues.filter(item=>item.status=="close").length}`
    for(var i=0; i < issues.length; i++){

        let lblIssueInfoID = document.createElement("label");
        let lblIssueInfoStatus = document.createElement("label");
        let lblIssueInfoDescription = document.createElement("label");
        let lblIssueInfoServerity = document.createElement("label");
        let lblIssueInfoAssignedTo = document.createElement("label");
       
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let divMain = document.createElement("div");
        
        let btnClose = document.createElement("button");
        let btnDelete = document.createElement("button");

        lblIssueInfoID.innerText = `Issue ID: ${i+1}`;
        lblIssueInfoStatus.innerText = issues[i].status;
        lblIssueInfoDescription.innerText = issues[i].description;
        lblIssueInfoServerity.innerText = issues[i].serverity;
        lblIssueInfoAssignedTo.innerText = issues[i].assignedto;

        if(issues[i].status==="close"){
            lblIssueInfoDescription.style.textDecoration="line-through";
        }
        else{
            lblIssueInfoDescription.style.textDecoration="none";
        }

        lblIssueInfoID.setAttribute("class", "form-label");
        lblIssueInfoStatus.setAttribute("class", "form-label p-1 bg-info");
        lblIssueInfoDescription.setAttribute("class", "form-label fs-2");
        lblIssueInfoAssignedTo.setAttribute("class", "form-label");
        lblIssueInfoServerity.setAttribute("class", "form-label");
        
        div.setAttribute("class","mb-3");
        div1.setAttribute("class","mb-3");
        div2.setAttribute("class","mb-3");
        div3.setAttribute("class","mb-3");
        div4.setAttribute("class","mb-3");
        div5.setAttribute("class","mb-3");        

        btnClose.setAttribute("class","btn btn-warning mx-1");
        btnDelete.setAttribute("class","btn btn-danger mx-1");

        btnClose.innerText = "Close";
        btnDelete.innerText = "Delete";

        divMain.setAttribute("class","sectionIssues m-auto my-5 px-5 py-1");
        
        btnClose.addEventListener("click",IssueSolved.bind(this,i));
        btnDelete.addEventListener("click",IssueDelete.bind(this,i));

        div.appendChild(lblIssueInfoID);
        div1.appendChild(lblIssueInfoStatus);
        div2.appendChild(lblIssueInfoDescription);
        div3.appendChild(lblIssueInfoServerity);
        div4.appendChild(lblIssueInfoAssignedTo);
        div5.appendChild(btnClose);
        div5.appendChild(btnDelete);

        divMain.appendChild(div);
        divMain.appendChild(div1);
        divMain.appendChild(div2);
        divMain.appendChild(div3);
        divMain.appendChild(div4);
        divMain.appendChild(div5);
        
        main.appendChild(divMain);                
    }
}
function IssueSolved(item){
    issues[item].status="close";
    load();
}   
function IssueDelete(item){
    console.log(item);
    issues.splice(item,1);
    console.log(issues);
    load();
}