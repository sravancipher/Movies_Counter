let count=0
let count1=0 
function increment()
{
    count+=1;
    document.getElementById("count").innerText=count;
}
function increment1()
{
    count1+=1;
    document.getElementById("count1").innerText=count1;
}
let txt=document.getElementById("output")
let txt1=document.getElementById("output1")
function save()
{
    txt.textContent+=count+" - ";
}
function save1()
{
    txt1.textContent+=count1+" - ";
}