 const trainers = [
    { name: "Captain Ahmed Salah", experience: "10 Years of Experience", clients: 250, success: 180 },
    { name: "Coach Sara Youssef", experience: "7 Years of Experience", clients: 190, success: 150 },
    { name: "Captain Mohamed Tarek", experience: "12 Years of Experience", clients: 320, success: 270 },
    { name: "Coach Nour Adel", experience: "8 Years of Experience", clients: 210, success: 160 },
    { name: "Captain Omar Khaled", experience: "6 Years of Experience", clients: 170, success: 130 }
  ];

  let currentTrainer = 0;

  const trainerContainer = document.getElementById("trainerContainer");
  const trainerName = document.getElementById("trainerName");
  const trainerExperience = document.getElementById("trainerExperience");
  const trainerClients = document.getElementById("trainerClients");
  const trainerSuccess = document.getElementById("trainerSuccess");

  function showTrainer(index) {
    const t = trainers[index];
    trainerName.textContent = t.name;
    trainerExperience.textContent = t.experience;
    trainerClients.textContent = t.clients;
    trainerSuccess.textContent = t.success;
  }

  function cycleTrainers() {
    trainerContainer.classList.remove("fade-in");
    trainerContainer.classList.add("fade-out");

    setTimeout(() => {
      currentTrainer = (currentTrainer + 1) % trainers.length;
      showTrainer(currentTrainer);
      trainerContainer.classList.remove("fade-out");
      trainerContainer.classList.add("fade-in");
    }, 500);
  }

  // عرض أول مدرب
  showTrainer(currentTrainer);

  // التبديل كل 10 ثوانٍ
  setInterval(cycleTrainers, 10000);


// ==========================
// PLAN DATA (Updated Types)
// ==========================
const plans = [
  { title: "Weight Loss Program", price: "EGP/850 / month", description: "Special workouts & nutrition plans to help you lose weight effectively." },
  { title: "Muscle Building Program", price: "EGP/1000 / month", description: "Focused on strength & hypertrophy for maximum muscle growth." },
  { title: "General Fitness Program", price: "EGP/500/ month", description: "Perfect for staying active, improving endurance, and overall health." },
  { title: "Ladies Program", price: "EGP/1000 / month", description: "Customized workouts designed for women’s fitness goals." },
  { title: "Youth Program", price: "EGP/600 / month", description: "Fun and safe workouts tailored for teens and young adults." },
  { title: "Pro Athlete Program", price: "EGP/2500 / month", description: "Intense, professional-level training for serious athletes (Recommended for athletes)." },
  { title: "Nutrition + Training Plan", price: "EGP/2000 / month", description: "Get a personal meal plan with training for faster results." },
  { title: "VIP Personal Program", price: "EGP/3000 / month", description: "1-on-1 coaching, private sessions, and exclusive facilities." },
  { title: "Annual All-Inclusive", price: "EGP/7000/ year", description: "Unlimited access + save 20% with our annual plan." },
  { title: "Basic Physiotherapy Plan", price: "EGP/900/ month", description: "Includes consultation and 1 weekly session." },
  { title: "Advanced Physiotherapy Plan", price: "EGP/1500 / month", description: "Covers personalized recovery programs and 2 weekly sessions." },
  { title: "Premium Physiotherapy Plan", price: "EGP/2000 / month", description: "Full rehabilitation support with unlimited sessions." },
];

// Sort by price ascending
plans.sort((a, b) => {
  const priceA = parseFloat(a.price.replace(/[^0-9.]/g, ''));
  const priceB = parseFloat(b.price.replace(/[^0-9.]/g, ''));
  return priceA - priceB;
});

let currentIndex = 0;
const planContainer = document.getElementById("planContainer");
const plansPerView = 3;

// Render Function
function renderPlans() {
  planContainer.innerHTML = "";

  for (let i = 0; i < plansPerView; i++) {
    const planIndex = (currentIndex + i) % plans.length;
    const plan = plans[planIndex];

    const col = document.createElement("div");
    col.className = "col-md-4";

    col.innerHTML = `
      <div id="transition" class="p-4 bg-green rounded shadow h-100 d-flex flex-column">
        <h2 class="fw-bold mb-2">${plan.title}</h2>
        <h4 class="pricePlan mb-3">${plan.price}</h4>
        <p class="text-muted flex-grow-1">${plan.description}</p>
       <a href="plans.html?id=${planIndex}" class="btn btn-primary mt-3">Join Now</a>
      </div>
    `;
    planContainer.appendChild(col);
  }
}

// Event Listeners
document.getElementById("prevPlan").addEventListener("click", () => {
  currentIndex = (currentIndex - plansPerView + plans.length) % plans.length;
  renderPlans();
});

document.getElementById("nextPlan").addEventListener("click", () => {
  currentIndex = (currentIndex + plansPerView) % plans.length;
  renderPlans();
});

// Initial Render
renderPlans();

// Counter Animation
  const counters = document.querySelectorAll('.counter');
  const speed = 50;
  const animateCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const updateCount = () => {
        const current = +counter.innerText;
        const increment = Math.ceil(target/speed);

        if (current < target) {
          counter.innerText = current + increment;
          setTimeout(updateCount, 30);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };

  let started = false;
  window.addEventListener('scroll', () => {
    const section = document.getElementById('achievements');
    const sectionTop = section.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 100;
    if (sectionTop < triggerPoint && !started) {
      animateCounters();
      started = true;
    }
  });
    // Hide The Button
     const backToTopBtn = document.getElementById("backToTopBtn");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) { 
      backToTopBtn.style.display = "flex";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });