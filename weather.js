const temperature=document.querySelector(".temp");
const locationtext=document.querySelector(".loc");
const date=document.querySelector(".date");
const weather=document.querySelector(".weather");
const search=document.querySelector(".sea");
const form=document.querySelector('form');
form.addEventListener('submit',searchtext)
let target='Lucknow'
const fetchresults=async (targetlocation) =>{
    let url=`http://api.weatherapi.com/v1/current.json?key=5e317766d73d40e4a1f134918241901&q=${targetlocation}&aqi=no`
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    let locationname=data.location.name
    let time=data.location.localtime
    let temp=data.current.temp_c
    let condition=data.current.condition.text
    updatedetails(locationname,time,temp,condition)
    background(condition)
}
function updatedetails(locationname,time,temp,condition){
    locationtext.innerHTML=locationname
    date.innerHTML=time
    temperature.innerHTML=temp
    weather.innerHTML=condition  
}
function searchtext(e){
    e.preventDefault()
    target=search.value
    fetchresults(target)
}
// function background(condition){
// if(condition==="Mist")
// {
// document.body.style.backgroundImage="url('https://www.salina.com/gcdn/authoring/2020/01/14/NSAJ/ghows-KS-9c1c6764-dc32-5196-e053-0100007ffdaf-9242f86b.jpeg?width=660&height=350&fit=crop&format=pjpg&auto=webp')"
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// }
// if(condition==="Partly cloudy")
// {
// document.body.style.backgroundImage="url('https://s.w-x.co/ugc/styles/980x551/storage-file-default-scheme/2016/03/28/a357ad22-79cd-48fe-9008-c0aba4cb8769.jpg?crop=16:9&width=480&format=pjpg&auto=webp&quality=60')"
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundSize = "cover";
// }
// }
fetchresults(target)
