const menuToggle=document.getElementById("menu-toggle"),menu=document.getElementById("menu");
menuToggle.addEventListener("click",function(){menu.classList.toggle("show");menuToggle.textContent=menu.classList.contains("show")?"✕":"☰"});
document.querySelectorAll(".menu a").forEach(function(link){link.addEventListener("click",function(){menu.classList.remove("show");menuToggle.textContent="☰"})});

const darkMode=document.getElementById("dark-mode");
darkMode.addEventListener("click",function(){document.body.classList.toggle("dark");if(document.body.classList.contains("dark")){darkMode.textContent="☀️";localStorage.setItem("darkMode","true")}else{darkMode.textContent="🌙";localStorage.setItem("darkMode","false")}});
if(localStorage.getItem("darkMode")==="true"){document.body.classList.add("dark");darkMode.textContent="☀️"}

const typing=document.getElementById("typing");
const textList=["Sinh viên ĐHSP Tin học 💻","Yêu thích lập trình 🌸","Đam mê thiết kế website ✨","Luôn học hỏi điều mới 📚"];
let textIndex=0,charIndex=0,deleting=false;
function typingEffect(){const currentText=textList[textIndex];if(!deleting){typing.textContent=currentText.substring(0,charIndex+1);charIndex++;if(charIndex===currentText.length){deleting=true;setTimeout(typingEffect,1800);return}}else{typing.textContent=currentText.substring(0,charIndex-1);charIndex--;if(charIndex===0){deleting=false;textIndex++;if(textIndex>=textList.length)textIndex=0}}setTimeout(typingEffect,deleting?45:80)}
typingEffect();

const clock=document.getElementById("clock");
function updateClock(){const now=new Date(),hours=String(now.getHours()).padStart(2,"0"),minutes=String(now.getMinutes()).padStart(2,"0"),seconds=String(now.getSeconds()).padStart(2,"0"),day=String(now.getDate()).padStart(2,"0"),month=String(now.getMonth()+1).padStart(2,"0"),year=now.getFullYear();clock.textContent=`🕐 ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`}
updateClock();setInterval(updateClock,1000);

const revealElements=document.querySelectorAll(".reveal");
const revealObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting)entry.target.classList.add("active")})},{threshold:.15});
revealElements.forEach(function(element){revealObserver.observe(element)});

const skillBars=document.querySelectorAll(".skill-progress");
const skillObserver=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){const bar=entry.target,width=bar.getAttribute("data-width");bar.style.width=width;skillObserver.unobserve(bar)}})},{threshold:.5});
skillBars.forEach(function(bar){skillObserver.observe(bar)});

const backTop=document.getElementById("back-top");
window.addEventListener("scroll",function(){if(window.scrollY>400)backTop.classList.add("show");else backTop.classList.remove("show")});
backTop.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});

const imageInput=document.getElementById("image-input"),avatar=document.getElementById("avatar");
imageInput.addEventListener("change",function(event){const file=event.target.files[0];if(!file)return;if(!file.type.startsWith("image/")){alert("❌ Vui lòng chọn một file ảnh!");return}const reader=new FileReader();reader.onload=function(e){avatar.src=e.target.result};reader.readAsDataURL(file)});

const contactForm=document.getElementById("contact-form"),formMessage=document.getElementById("form-message");
contactForm.addEventListener("submit",function(event){event.preventDefault();const name=document.getElementById("name").value.trim(),email=document.getElementById("email").value.trim(),message=document.getElementById("message").value.trim();if(name===""||email===""||message===""){formMessage.textContent="⚠️ Vui lòng nhập đầy đủ thông tin!";formMessage.style.color="#dc2626";return}formMessage.textContent=`🌸 Cảm ơn ${name} 💕 Mình đã nhận được lời nhắn của bạn! ✨`;formMessage.style.color="#16a34a";contactForm.reset()});

const buttons=document.querySelectorAll("button, .btn, .social a");
buttons.forEach(function(button){button.addEventListener("click",function(){button.style.transform="scale(0.95)";setTimeout(function(){button.style.transform=""},120)})});