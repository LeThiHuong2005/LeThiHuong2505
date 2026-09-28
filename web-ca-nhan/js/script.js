
// ========================================
// 1. MENU MOBILE
// ========================================

const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", function () {

    menu.classList.toggle("show");

    if (menu.classList.contains("show")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});


// Đóng menu sau khi bấm liên kết

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        menu.classList.remove("show");

        menuToggle.textContent = "☰";

    });

});


// ========================================
// 2. DARK MODE
// ========================================

const darkMode = document.getElementById("dark-mode");

darkMode.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        darkMode.textContent = "☀️";

        localStorage.setItem("darkMode", "true");

    } else {

        darkMode.textContent = "🌙";

        localStorage.setItem("darkMode", "false");

    }

});


// Nhớ chế độ người dùng đã chọn

if (localStorage.getItem("darkMode") === "true") {

    document.body.classList.add("dark");

    darkMode.textContent = "☀️";

}


// ========================================
// 3. HIỆU ỨNG GÕ CHỮ
// ========================================

const typing = document.getElementById("typing");

const textList = [
    "Sinh viên ĐHSP Tin học 💻",
    "Yêu thích lập trình 🌸",
    "Đam mê thiết kế website ✨",
    "Luôn học hỏi điều mới 📚"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;


function typingEffect() {

    const currentText = textList[textIndex];

    if (!deleting) {

        typing.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1800);

            return;
        }

    } else {

        typing.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= textList.length) {
                textIndex = 0;
            }

        }
    }

    const speed = deleting ? 45 : 80;

    setTimeout(typingEffect, speed);
}

typingEffect();


// ========================================
// 4. ĐỒNG HỒ
// ========================================

const clock = document.getElementById("clock");

function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");

    const day =
        String(now.getDate()).padStart(2, "0");

    const month =
        String(now.getMonth() + 1).padStart(2, "0");

    const year =
        now.getFullYear();

    clock.textContent =
        `🕐 ${day}/${month}/${year} - ${hours}:${minutes}:${seconds}`;
}

updateClock();

setInterval(updateClock, 1000);


// ========================================
// 5. SECTION HIỆN RA KHI CUỘN
// ========================================

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});


// ========================================
// 6. THANH KỸ NĂNG CHẠY
// ========================================

const skillBars =
    document.querySelectorAll(".skill-progress");


const skillObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    const bar = entry.target;

                    const width =
                        bar.getAttribute("data-width");

                    bar.style.width = width;

                    skillObserver.unobserve(bar);

                }

            });

        },

        {
            threshold: 0.5
        }

    );


skillBars.forEach(function (bar) {

    skillObserver.observe(bar);

});


// ========================================
// 7. NÚT VỀ ĐẦU TRANG
// ========================================

const backTop =
    document.getElementById("back-top");


window.addEventListener("scroll", function () {

    if (window.scrollY > 400) {

        backTop.classList.add("show");

    } else {

        backTop.classList.remove("show");

    }

});


backTop.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ========================================
// 8. ĐỔI ẢNH ĐẠI DIỆN
// ========================================

const imageInput =
    document.getElementById("image-input");

const avatar =
    document.getElementById("avatar");


imageInput.addEventListener("change", function (event) {

    const file = event.target.files[0];

    if (!file) {
        return;
    }

    if (!file.type.startsWith("image/")) {

        alert("❌ Vui lòng chọn một file ảnh!");

        return;
    }

    const reader = new FileReader();

    reader.onload = function (e) {

        avatar.src = e.target.result;

    };

    reader.readAsDataURL(file);

});


// ========================================
// 9. FORM LIÊN HỆ
// ========================================

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();


    const email =
        document.getElementById("email").value.trim();


    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "⚠️ Vui lòng nhập đầy đủ thông tin!";

        formMessage.style.color = "#dc2626";

        return;
    }


    formMessage.textContent =
        `🌸 Cảm ơn ${name} 💕 Mình đã nhận được lời nhắn của bạn! ✨`;

    formMessage.style.color = "#16a34a";


    contactForm.reset();

});


// ========================================
// 10. HIỆU ỨNG NHẤN NÚT
// ========================================

const buttons =
    document.querySelectorAll("button, .btn, .social a");


buttons.forEach(function (button) {

    button.addEventListener("click", function () {

        button.style.transform = "scale(0.95)";

        setTimeout(function () {

            button.style.transform = "";

        }, 120);

    });

});
