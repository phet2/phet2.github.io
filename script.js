// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobileMenu");
const navLinks = document.getElementById("navLinks");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Intersection Observer for Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(30px)";
  card.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(card);
});

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  if (document.body.classList.contains("light-mode")) {
    themeIcon.className = "fas fa-sun";
    localStorage.setItem("theme", "light");
  } else {
    themeIcon.className = "fas fa-moon";
    localStorage.setItem("theme", "dark");
  }
});

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.classList.add("light-mode");
  themeIcon.className = "fas fa-sun";
}

// Language Toggle
const languageToggle = document.getElementById("languageToggle");
const languageIcon = document.getElementById("languageIcon");
let currentLanguage = "lo"; // Default to Lao

// Lao translations object
const laoTranslations = {
  Home: "ໜ້າຫຼັກ",
  About: "ກ່ຽວກັບ",
  Skills: "ທັກສະ",
  Projects: "ໂປຣເຈັກ",
  Experience: "ປະສົບການ",
  Contact: "ຕິດຕໍ່",
  "Sengphet PHOMMACHAN": "ແສງເພັດ ພົມມະຈັນ",
  "Full-Stack Developer": "Full-Stack Developer",
  "Contact Me": "ຕິດຕໍ່ຂ້ອຍ",
  "View Projects": "ເບິ່ງໂປຣເຈັກ",
  "Download Resume": "ດາວໂຫຼດ Resume",
  "About Me": "ກ່ຽວກັບຂ້ອຍ",
  Summary: "ສະຫຼຸບຄວາມສາມາດ",
  "I am a creative web developer with full-stack development capabilities. I have expertise in using PHP, MySQL, HTML, CSS, JavaScript and React to create modern systems and website designs. I am passionate about providing innovative solutions and continuously learning new technologies.":
    "ຂ້ອຍເປັນນັກພັດທະນາເວັບໄຊທີ່ມີຄວາມຄິດສ້າງສັນ ແລະ ມີຄວາມສາມາດພື້ນຖານໃນການພັດທະນາເວັບໄຊເຕັມຮູບແບບ (Full-Stack). ມີຄວາມຊ່ຽວຊານໃນການໃຊ້ PHP, MySQL, HTML, CSS, JavaScript ແລະ React ເພື່ອສ້າງລະບົບ ແລະ ອອກແບບໜ້າເວັບທີ່ທັນສະໄໝ. ມີຄວາມກະຕືລືລົ້ນທີ່ຈະສະໜອງວິທີແກ້ໄຂໃຫມ່ໆ ແລະ ຮຽນຮູ້ເທັກໂນໂລຊີໃໝ່ຢ່າງຕໍ່ເນື່ອງ.",
  "Personal Information": "ຂໍ້ມູນສ່ວນຕົວ",
  "Date of Birth": "ວັນເກີດ",
  Nationality: "ສັນຊາດ",
  Hometown: "ບ້ານເກີດ",
  Languages: "ພາສາ",
  "16 March 2004": "16 ມີນາ 2004",
  Lao: "ລາວ",
  "Kong, BounNeua, Phongsaly": "ກອງ, ບຸນເໜືອ, ຜົ້ງສາລີ",
  "Lao (Native), English (A2), Chinese (HSK2)":
    "ລາວ (ພາສາແມ່), ອັງກິດ (A2), ຈີນ (HSK2)",
  "Technical Skills": "ທັກສະດ້ານວິຊາການ",
  "Development Projects": "ໂຄງການພັດທະນາ",
  "Online Job Search System": "ລະບົບຫາວຽກອອນລາຍ",
  "Full-Stack Web Development": "Full-Stack Web Development",
  "A full-featured web system for connecting employers with job seekers, featuring search, job application and profile management.":
    "ລະບົບເວັບໄຊເຕັມຮູບແບບສຳລັບເຊື່ອມຕໍ່ຜູ້ປະກອບການກັບຜູ້ສະໝັກວຽກ ມີການຄົ້ນຫາ, ສະໝັກວຽກ ແລະ ຈັດການໂປຣໄຟລ໌",
  "Login/Registration System": "ລະບົບລ໋ອກອິນ/ລົງທະບຽນ",
  "Job Search": "ການຄົ້ນຫາວຽກ",
  "Profile Management": "ຈັດການໂປຣໄຟລ໌",
  "Job Application System": "ລະບົບສະໝັກວຽກ",
  "Full-Stack Development": "Full-Stack Development",
  "Online shopping website with product catalog, order management and payment system.":
    "ເວັບໄຊຊື້-ຂາຍອອນລາຍ ມີລະບົບຕະກ້າສິນຄ້າ, ການຈັດການຄຳສັ່ງຊື້ ແລະ ລະບົບຊຳລະເງິນ",
  "Payment System": "ລະບົບຊຳລະເງິນ",
  "Product Tracking": "ຕິດຕາມສິນຄ້າ",
  "Product Management System": "ລະບົບຄວບຄຸມສິນຄ້າ",
  "Loan Management System": "ລະບົບປ່ອຍເງິນກູ້",
  "Finance / Web & Mobile Development": "Finance / Web & Mobile Development",
  "A system for managing loan applications, borrower information, repayment schedules and payment tracking.":
    "ລະບົບສໍາລັບຈັດການການຂໍກູ້ເງິນ, ຂໍ້ມູນຜູ້ກູ້, ຕາຕະລາງຈ່າຍເງິນ ແລະ ການຕິດຕາມການຊໍາລະ",
  "Loan Application Management": "ຈັດການຄໍາຮ້ອງຂໍກູ້ເງິນ",
  "Borrower Records": "ຂໍ້ມູນຜູ້ກູ້",
  "Repayment Schedule": "ຕາຕະລາງຈ່າຍເງິນ",
  "Payment Tracking": "ຕິດຕາມການຊໍາລະ",
  "Water Billing System": "ລະບົບໃບບິນນໍ້າປະປາ",
  "A system for managing water billing, customer accounts, meter readings and payment records.":
    "ລະບົບສໍາລັບຈັດການໃບບິນນໍ້າປະປາ, ຂໍ້ມູນລູກຄ້າ, ການອ່ານມິດນໍ້າ ແລະ ການບັນທຶກການຈ່າຍເງິນ",
  "Customer Management": "ຈັດການຂໍ້ມູນລູກຄ້າ",
  "Meter Reading Records": "ບັນທຶກການອ່ານມິດນໍ້າ",
  "Bill Generation": "ສ້າງໃບບິນນໍ້າປະປາ",
  "Payment Tracking": "ຕິດຕາມການຊໍາລະ",
  "Restaurant POS System": "Restaurant POS System",
  "Desktop Application": "Desktop Application",
  "Point of sale system for restaurants with bill calculation, product management and sales reporting.":
    "ລະບົບຂາຍໜ້າຮ້ານສຳລັບຮ້ານອາຫານ ມີການຄຳນວນບິນ, ຈັດການສິນຄ້າ ແລະ ລາຍງານຍອດຂາຍ",
  "Point of Sale System": "ລະບົບຂາຍໜ້າຮ້ານ",
  "Automatic Bill Calculation": "ຄຳນວນບິນອັດຕະໂນມັດ",
  "Sales Reports": "ລາຍງານຍອດຂາຍ",
  "Stock Management": "ຈັດການສະຕ໋ອກ",
  "School Management System": "School Management System",
  "Web Application": "Web Application",
  "School management system with grade recording, attendance and teacher-student communication.":
    "ລະບົບຈັດການໂຮງຮຽນ ມີການບັນທຶກຄະແນນ, ການເຂົ້າຮຽນ ແລະ ການສື່ສານລະຫວ່າງຄູ-ນັກຮຽນ",
  "Grade Recording": "ບັນທຶກຄະແນນ",
  "Attendance System": "ລະບົບເຂົ້າຮຽນ",
  "Class Schedule": "ຕາຕະລາງຮຽນ",
  "Academic Reports": "ລາຍງານຜົນການຮຽນ",
  "Meal and Hydration Reminder App": "ແອັບແຈ້ງເຕືອນການກິນເຂົ້າ ແລະ ດື່ມນໍ້າ",
  "An application that sends notifications for meal and water times and tracks daily intake of food and water (cups/glasses).":
    "ແອັບພລິເຄຊັນທີ່ສົ່ງການແຈ້ງເຕືອນສຳລັບເວລາອາຫານ ແລະ ນໍ້າ ແລະ ບັນທຶກປະລິມານການກິນເຂົ້າ ແລະ ດື່ມນໍ້າປະຈຳວັນ (ຈຳນວນມື້/ຈອກ)",
  "Mealtime Reminders": "ແຈ້ງເຕືອນເວລາອາຫານ",
  "Water Intake Tracking": "ຕິດຕາມການດື່ມນໍ້າ",
  "Daily Intake Log": "ບັນທຶກການກິນປະຈຳວັນ",
  "Progress Statistics": "ສະຖິຕິຄວາມຄືບໜ້າ",
  "Experience & Education": "ປະສົບການ & ການສຶກສາ",
  "Work Experience": "ປະສົບການການເຮັດວຽກ",
  "Internship at: Lao Telecom Phongsaly Branch":
    "ຝຶກງານທີ່: ລາວໂທລະຄົມສາຂາແຂວງຜົ້ງສາລີ (Lao Telecom)",
  "February - April 2025": "ກຸມພາ - ເມສາ 2025",
  "Fixed telephone-Internet and mobile transmission":
    "ໂທລະສັບພື້ນຖານ-ອິນເຕີເນັດ ແລະ ສາຍສົ່ງມືຖື",
  "Configure routers for internet connection and WiFi installation":
    "ຕັ້ງຄ່າເຣົາເຕີເພື່ອຮອງຮັບການເຊື່ອມຕໍ່ອິນເຕີເນັດ ແລະ ຕິດຕັ້ງ WiFi",
  "Install signal towers and connect fiber optic cables":
    "ຕິດຕັ້ງເສົາສັນຍານ ແລະ ຕໍ່ສາຍໄຟເບີອ໋ອບຕິກ",
  "Troubleshoot network issues and customer support":
    "ແກ້ໄຂບັນຫາເຄືອຂ່າຍ ແລະ ສະໜັບສະໜູນລູກຄ້າ",
  Education: "ການສຶກສາ",
  "Soutsaka Institute of Technology": "ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ",
  "Bachelor's Degree: Computer Programming":
    "ປະລິນຍາຕີ: ການສ້າງໂປຣແກຣມຄອມພິວເຕີ",
  "2025 - Present": "2025 - ປັດຈຸບັນ",
  "BCT College for I.T Education": "ວິທະຍາໄລ ບີຊີທີ ເພື່ອການສຶກສາດ້ານໄອທີ",
  "Associate's Degree: Computer Science and Software Engineering":
    "ຊັ້ນສູງ: ວິທະຍາສາດຄອມພິວເຕີ ແລະ ວິສະວະກຳຊ໋ອບແວ",
  "2022 - 2025": "2022 - 2025",
  Phone: "ໂທລະສັບ",
  Email: "ອີເມວ",
  Address: "ທີ່ຢູ່",
  "Phakhao Village, Saysettha District, Vientiane Capital":
    "ບ້ານພະຂາວ, ໄຊທານີ, ນະຄອນຫຼວງວຽງຈັນ",
  "© 2025 Sengphet PHOMMACHAN - Full-Stack Developer":
    "© 2025 ແສງເພັດ ພົມມະຈັນ - Full-Stack Developer",
};

languageToggle.addEventListener("click", () => {
  if (currentLanguage === "lo") {
    currentLanguage = "en";
    languageIcon.className = "fas fa-globe-americas";
  } else {
    currentLanguage = "lo";
    languageIcon.className = "fas fa-language";
  }
  updateLanguage();
  localStorage.setItem("language", currentLanguage);
});

// Function to update language
function updateLanguage() {
  document.querySelectorAll("[data-en]").forEach((element) => {
    const englishText = element.getAttribute("data-en");
    if (currentLanguage === "en") {
      element.textContent = englishText;
    } else {
      // Switch back to Lao
      const laoText = laoTranslations[englishText];
      if (laoText) {
        element.textContent = laoText;
      }
    }
  });
}

// Load saved language
const savedLanguage = localStorage.getItem("language");
if (savedLanguage === "en") {
  currentLanguage = "en";
  languageIcon.className = "fas fa-globe-americas";
  updateLanguage();
}

// ຫຼື ຖ້າຕ້ອງການໃຊ້ URL parameters
function openProject(projectId) {
  localStorage.setItem("selectedProject", projectId);
  window.open(`${projectId}-detail.html`, "_blank");
}
