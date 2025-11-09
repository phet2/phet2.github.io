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
  'Home': 'ໜ້າຫຼັກ',
  'About': 'ກ່ຽວກັບ',
  'Skills': 'ທັກສະ',
  'Projects': 'ໂປຣເຈັກ',
  'Experience': 'ປະສົບການ',
  'Contact': 'ຕິດຕໍ່',
  'Sengphet PHOMMACHAN': 'ແສງເພັດ ພົມມະຈັນ',
  'Full-Stack Developer': 'Full-Stack Developer',
  'Contact Me': 'ຕິດຕໍ່ຂ້ອຍ',
  'View Projects': 'ເບິ່ງໂປຣເຈັກ',
  'Download Resume': 'ດາວໂຫຼດ Resume',
  'About Me': 'ກ່ຽວກັບຂ້ອຍ',
  'Summary': 'ສະຫຼຸບຄວາມສາມາດ',
  'Career Goals': 'ເປົ້າໝາຍອາຊີບ',
  'I am a creative web developer with full-stack development capabilities. I have expertise in using PHP, MySQL, HTML, CSS, JavaScript and React to create modern systems and website designs. I am passionate about providing innovative solutions and continuously learning new technologies.': 'ຂ້ອຍເປັນນັກພັດທະນາເວັບໄຊທີ່ມີຄວາມຄິດສ້າງສັນ ແລະ ມີຄວາມສາມາດພື້ນຖານໃນການພັດທະນາເວັບໄຊເຕັມຮູບແບບ (Full-Stack). ມີຄວາມຊ່ຽວຊານໃນການໃຊ້ PHP, MySQL, HTML, CSS, JavaScript ແລະ React ເພື່ອສ້າງລະບົບ ແລະ ອອກແບບໜ້າເວັບທີ່ທັນສະໄໝ.',
  'Seeking opportunities to grow as a Full-Stack Developer and contribute to innovative projects. Eager to work with modern technologies and collaborate with talented teams to create impactful web solutions.': 'ຊອກຫາໂອກາດເພື່ອພັດທະນາຕົນເອງເປັນ Full-Stack Developer ແລະ ປະກອບສ່ວນໃນໂຄງການສ້າງສັນ.',
  'Technical Skills': 'ທັກສະດ້ານວິຊາການ',
  'Soft Skills': 'ທັກສະອ່ອນ',
  'Teamwork': 'ການເຮັດວຽກເປັນທີມ',
  'Collaborate effectively with team members and contribute to shared goals': 'ຮ່ວມມືກັບສະມາຊິກທີມໄດ້ດີ ແລະ ບັນລຸເປົ້າໝາຍຮ່ວມກັນ',
  'Problem Solving': 'ແກ້ໄຂບັນຫາ',
  'Analytical thinking and creative solutions to technical challenges': 'ຄິດວິເຄາະ ແລະ ຫາວິທີແກ້ໄຂສຳລັບບັນຫາດ້ານເຕັກນິກ',
  'Communication': 'ການສື່ສານ',
  'Clear communication with clients and team members': 'ສື່ສານຢ່າງຊັດເຈນກັບລູກຄ້າ ແລະ ທີມງານ',
  'Time Management': 'ການຈັດການເວລາ',
  'Efficient task prioritization and meeting deadlines': 'ຈັດລຳດັບຄວາມສຳຄັນຂອງວຽກ ແລະ ສົ່ງວຽກທັນເວລາ',
  'Adaptability': 'ການປັບຕົວ',
  'Quick learning and adapting to new technologies': 'ຮຽນຮູ້ໄວ ແລະ ປັບຕົວເຂົ້າກັບເຕັກໂນໂລຊີໃໝ່',
  'Attention to Detail': 'ຄວາມລະອຽດລະອໍ',
  'Careful code review and quality assurance': 'ກວດສອບໂຄ້ດຢ່າງລະມັດລະວັງ ແລະ ຮັບປະກັນຄຸນນະພາບ',
  'Continuous Learning': 'ການຮຽນຮູ້ຕໍ່ເນື່ອງ',
  'Always eager to learn new technologies and improve skills': 'ກະຕືລືລົ້ນທີ່ຈະຮຽນຮູ້ເຕັກໂນໂລຊີໃໝ່ຢ່າງຕໍ່ເນື່ອງ',
  'Creativity': 'ຄວາມຄິດສ້າງສັນ',
  'Innovative thinking in design and development': 'ຄິດສ້າງສັນໃນການອອກແບບ ແລະ ພັດທະນາ',
  'Development Projects': 'ໂຄງການພັດທະນາ',
  'Online Job Search System': 'ລະບົບຫາວຽກອອນລາຍ',
  'Full-Stack Web Development': 'Full-Stack Web Development',
  'A full-featured web system for connecting employers with job seekers, featuring search, job application and profile management.': 'ລະບົບເວັບໄຊເຕັມຮູບແບບສຳລັບເຊື່ອມຕໍ່ຜູ້ປະກອບການກັບຜູ້ສະໝັກວຽກ',
  'Login/Registration System': 'ລະບົບລ໋ອກອິນ/ລົງທະບຽນ',
  'Job Search': 'ການຄົ້ນຫາວຽກ',
  'Profile Management': 'ຈັດການໂປຣໄຟລ໌',
  'Full-Stack Development': 'Full-Stack Development',
  'Online shopping website with product catalog, order management and payment system.': 'ເວັບໄຊຊື້-ຂາຍອອນລາຍ ມີລະບົບຕະກ້າສິນຄ້າ',
  'Payment System': 'ລະບົບຊຳລະເງິນ',
  'Product Management': 'ລະບົບຄວບຄຸມສິນຄ້າ',
  'Loan Management System': 'ລະບົບປ່ອຍເງິນກູ້',
  'A system for managing loan applications, borrower information, repayment schedules and payment tracking.': 'ລະບົບຈັດການການຂໍກູ້ເງິນ ແລະ ຕິດຕາມການຊໍາລະ',
  'Loan Application': 'ຈັດການຄໍາຮ້ອງຂໍກູ້',
  'Payment Tracking': 'ຕິດຕາມການຊໍາລະ',
  'Water Billing System': 'ລະບົບໃບບິນນໍ້າປະປາ',
  'A system for managing water billing, customer accounts, meter readings and payment records.': 'ລະບົບຈັດການໃບບິນນໍ້າປະປາ ແລະ ຂໍ້ມູນລູກຄ້າ',
  'Customer Management': 'ຈັດການລູກຄ້າ',
  'Bill Generation': 'ສ້າງໃບບິນ',
  'Desktop Application': 'Desktop Application',
  'Point of sale system for restaurants with bill calculation and sales reporting.': 'ລະບົບຂາຍໜ້າຮ້ານສຳລັບຮ້ານອາຫານ',
  'POS System': 'ລະບົບຂາຍໜ້າຮ້ານ',
  'Sales Reports': 'ລາຍງານຍອດຂາຍ',
  'Meal Reminder App': 'ແອັບແຈ້ງເຕືອນການກິນເຂົ້າ',
  'Mobile Development': 'Mobile Development',
  'App that sends meal and water notifications and tracks daily intake.': 'ແອັບທີ່ສົ່ງການແຈ້ງເຕືອນອາຫານ ແລະ ບັນທຶກການກິນປະຈຳວັນ',
  'Meal Reminders': 'ແຈ້ງເຕືອນອາຫານ',
  'Water Tracking': 'ຕິດຕາມນໍ້າ',
  'Experience & Education': 'ປະສົບການ & ການສຶກສາ',
  'Work Experience': 'ປະສົບການເຮັດວຽກ',
  'Internship at: Lao Telecom Phongsaly Branch': 'ຝຶກງານທີ່: ລາວໂທລະຄົມສາຂາແຂວງຜົ້ງສາລີ (Lao Telecom)',
  'February - April 2025': 'ກຸມພາ - ເມສາ 2025',
  'Fixed telephone-Internet and mobile transmission': 'ໂທລະສັບພື້ນຖານ-ອິນເຕີເນັດ ແລະ ສາຍສົ່ງມືຖື',
  'Configure routers for internet connection and WiFi installation': 'ຕັ້ງຄ່າເຣົາເຕີເພື່ອຮອງຮັບການເຊື່ອມຕໍ່ອິນເຕີເນັດ ແລະ ຕິດຕັ້ງ WiFi',
  'Install signal towers and connect fiber optic cables': 'ຕິດຕັ້ງເສົາສັນຍານ ແລະ ສາຍໄຟເບີອ໋ອບຕິກ',
  'Troubleshoot network issues and customer support': 'ແກ້ໄຂບັນຫາເຄືອຂ່າຍ ແລະ ສະໜັບສະໜູນລູກຄ້າ',
  'Education': 'ການສຶກສາ',
  'Soutsaka Institute of Technology': 'ສະຖາບັນ ເຕັກໂນໂລຊີ ສຸດສະກະ',
  "Bachelor's Degree: Computer Programming": 'ປະລິນຍາຕີ: ການສ້າງໂປຣແກຣມຄອມພິວເຕີ',
  '2025 - Present': '2025 - ປັດຈຸບັນ',
  'BCT College for I.T Education': 'ວິທະຍາໄລ ບີຊີທີ',
  "Associate's Degree: Computer Science and Software Engineering": 'ຊັ້ນສູງ: ວິທະຍາສາດຄອມພິວເຕີ ແລະ ວິສະວະກຳຊ໋ອບແວ',
  '2022 - 2025': '2022 - 2025',
  'Phone': 'ໂທລະສັບ',
  'Email': 'ອີເມວ',
  'Address': 'ທີ່ຢູ່',
  'Phakhao Village, Saysettha, Vientiane': 'ບ້ານພະຂາວ, ໄຊທານີ, ວຽງຈັນ',
  '2025 Sengphet PHOMMACHAN - Full-Stack Developer': '2025 ແສງເພັດ ພົມມະຈັນ - Full-Stack Developer',
  'Collaborating effectively with team members to achieve common goals.': 'ຮ່ວມມືກັບສະມາຊິກທີມໄດ້ດີ ແລະ ປະກອບສ່ວນບັນລຸເປົ້າໝາຍຮ່ວມກັນ',
  'Analyzing problems and finding creative solutions for technical challenges.': 'ຄິດວິເຄາະ ແລະ ຫາວິທີແກ້ໄຂທີ່ສ້າງສັນສຳລັບບັນຫາດ້ານເຕັກນິກ',
  'Communicating clearly and effectively with clients and team members.': 'ສື່ສານຢ່າງຊັດເຈນກັບລູກຄ້າ ແລະ ສະມາຊິກທີມ',
  'Prioritizing tasks and ensuring timely project delivery.': 'ຈັດລຳດັບຄວາມສຳຄັນຂອງວຽກ ແລະ ສົ່ງວຽກທັນເວລາ',
  'Quickly learning and adapting to new technologies and project requirements.': 'ຮຽນຮູ້ໄວ ແລະ ປັບຕົວເຂົ້າກັບເຕັກໂນໂລຊີໃໝ່',
  'Carefully reviewing code and ensuring quality assurance in development.': 'ກວດສອບໂຄ້ດຢ່າງລະມັດລະວັງ ແລະ ຮັບປະກັນຄຸນນະພາບ',
  'Eager to continuously learn new technologies and develop skills.': 'ກະຕືລືລົ້ນທີ່ຈະຮຽນຮູ້ເຕັກໂນໂລຊີໃໝ່ ແລະ ພັດທະນາທັກສະຕະຫຼອດເວລາ',
  'Thinking creatively in design and development to produce unique solutions.': 'ຄິດສ້າງສັນໃນການອອກແບບ ແລະ ພັດທະນາ',
  "Development Projects": "ໂຄງການພັດທະນາ",
  "Online Job Search System": "ລະບົບຫາວຽກອອນລາຍ",
  "Full-Stack Web Development": "Full-Stack Web Development",
  "A full-featured web system for connecting employers with job seekers, featuring search, job application and profile management.": "ລະບົບເວັບໄຊເຕັມຮູບແບບສຳລັບເຊື່ອມຕໍ່ຜູ້ປະກອບການກັບຜູ້ສະໝັກວຽກ ມີການຄົ້ນຫາ, ສະໝັກວຽກ ແລະ ຈັດການໂປຣໄຟລ໌",
  "Login/Registration System": "ລະບົບລ໋ອກອິນ/ລົງທະບຽນ",
  "Job Search": "ການຄົ້ນຫາວຽກ",
  "Profile Management": "ຈັດການໂປຣໄຟລ໌",
  "Job Application System": "ລະບົບສະໝັກວຽກ",
  "Full-Stack Development": "Full-Stack Development",
  "Online shopping website with product catalog, order management and payment system.": "ເວັບໄຊຊື້-ຂາຍອອນລາຍ ມີລະບົບຕະກ້າສິນຄ້າ, ການຈັດການຄຳສັ່ງຊື້ ແລະ ລະບົບຊຳລະເງິນ",
  "Payment System": "ລະບົບຊຳລະເງິນ",
  "Product Tracking": "ຕິດຕາມສິນຄ້າ",
  "Product Management System": "ລະບົບຄວບຄຸມສິນຄ້າ",
  "Loan Management System": "ລະບົບປ່ອຍເງິນກູ້",
  "A system for managing loan applications, borrower information, repayment schedules and payment tracking.": "ລະບົບສໍາລັບຈັດການການຂໍກູ້ເງິນ, ຂໍ້ມູນຜູ້ກູ້, ຕາຕະລາງຈ່າຍເງິນ ແລະ ການຕິດຕາມການຊໍາລະ",
  "Loan Application Management": "ຈັດການຄໍາຮ້ອງຂໍກູ້ເງິນ",
  "Borrower Records": "ຂໍ້ມູນຜູ້ກູ້",
  "Repayment Schedule": "ຕາຕະລາງຈ່າຍເງິນ",
  "Water Billing System": "ລະບົບໃບບິນນໍ້າປະປາ",
  "A system for managing water billing, customer accounts, meter readings and payment records.": "ລະບົບສໍາລັບຈັດການໃບບິນນໍ້າປະປາ, ຂໍ້ມູນລູກຄ້າ, ການອ່ານມິດນໍ້າ ແລະ ການບັນທຶກການຈ່າຍເງິນ",
  "Customer Management": "ຈັດການຂໍ້ມູນລູກຄ້າ",
  "Meter Reading Records": "ບັນທຶກການອ່ານມິດນໍ້າ",
  "Bill Generation": "ສ້າງໃບບິນນໍ້າປະປາ",
  "POS System": "POS System",
  "Desktop Application": "Desktop Application",
  "Point of sale system for Store with bill calculation, product management and sales reporting.": "ລະບົບຂາຍໜ້າຮ້ານສຳລັບຮ້ານຄ້າ ມີການຄຳນວນບິນ, ຈັດການສິນຄ້າ ແລະ ລາຍງານຍອດຂາຍ",
  "Point of Sale System": "ລະບົບຂາຍໜ້າຮ້ານ",
  "Automatic Bill Calculation": "ຄຳນວນບິນອັດຕະໂນມັດ",
  "Sales Reports": "ລາຍງານຍອດຂາຍ",
  "Stock Management": "ຈັດການສະຕ໋ອກ",
  "School Management System": "School Management System",
  "Web Application": "Web Application",
  "School management system with grade recording, attendance and teacher-student communication.": "ລະບົບຈັດການໂຮງຮຽນ ມີການບັນທຶກຄະແນນ, ການເຂົ້າຮຽນ ແລະ ການສື່ສານລະຫວ່າງຄູ-ນັກຮຽນ",
  "Grade Recording": "ບັນທຶກຄະແນນ",
  "Attendance System": "ລະບົບເຂົ້າຮຽນ",
  "Class Schedule": "ຕາຕະລາງຮຽນ",
  "Academic Reports": "ລາຍງານຜົນການຮຽນ",
  "Meal and Hydration Reminder App": "ແອັບແຈ້ງເຕືອນການກິນເຂົ້າ ແລະ ດື່ມນໍ້າ",
  "Mobile Development": "Mobile Development",
  "An application that sends notifications for meal and water times and tracks daily intake of food and water (cups/glasses).": "ແອັບພລິເຄຊັນທີ່ສົ່ງການແຈ້ງເຕືອນສຳລັບເວລາອາຫານ ແລະ ນໍ້າ ແລະ ບັນທຶກປະລິມານການກິນເຂົ້າ ແລະ ດື່ມນໍ້າປະຈຳວັນ (ຈຳນວນມື້/ຈອກ)",
  "Mealtime Reminders": "ແຈ້ງເຕືອນເວລາອາຫານ",
  "Water Intake Tracking": "ຕິດຕາມການດື່ມນໍ້າ",
  "Daily Intake Log": "ບັນທຶກການກິນປະຈຳວັນ",
  "Progress Statistics": "ສະຖິຕິຄວາມຄືບໜ້າ",
  "Apartment Management System": "ລະບົບບໍລິຫານອາພາດເມັນ",
  "Full-Stack Development": "Full-Stack Development",
  "A comprehensive system for managing apartment rentals, tenant information, lease agreements and maintenance requests.": "ລະບົບສໍາລັບຈັດການການເຊົ່າອາພາດເມັນ, ຂໍ້ມູນຜູ້ເຊົ່າ, ສັນຍາເຊົ່າ ແລະ ການຮ້ອງຂໍການບໍາລຸງຮັກສາ",
  "Tenant Management": "ຈັດການຂໍ້ມູນຜູ້ເຊົ່າ",
  "Lease Agreements": "ຈັດການສັນຍາເຊົ່າ",
  "Rent Collection": "ເກັບຄ່າເຊົ່າ",
  "Maintenance Tracking": "ຕິດຕາມການບໍາລຸງຮັກສາ",
  "Construction Materials Sales System": "ລະບົບຂາຍວັດສະດຸກໍ່ສ້າງ",
  "A specialized system for managing construction materials sales, inventory tracking, supplier management and delivery scheduling.": "ລະບົບສະເພາະສໍາລັບຈັດການການຂາຍວັດສະດຸກໍ່ສ້າງ, ຕິດຕາມສາງ, ຈັດການຜູ້ສະໜອງ ແລະ ກໍານົດການຈັດສົ່ງ",
  "Materials Inventory": "ຄຸ້ມຄອງສາງວັດສະດຸ",
  "Delivery Management": "ຈັດການການຂົນສົ່ງ",
  "Quotation & Invoicing": "ໃບສະເໜີລາຄາ ແລະ ໃບບິນ",
  "Supplier Management": "ຈັດການຜູ້ສະໜອງ"
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
