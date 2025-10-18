// ==========================
// PLAN DATA (Sorted)
// ==========================
const plans = [
  { title: "General Fitness Program", price: "EGP 500 / month", description: "Perfect for staying active, improving endurance, and overall health." },
  { title: "Youth Program", price: "EGP 600 / month", description: "Fun and safe workouts tailored for teens and young adults." },
  { title: "Weight Loss Program", price: "EGP 850 / month", description: "Special workouts & nutrition plans to help you lose weight effectively." },
  { title: "Basic Physiotherapy Plan", price: "EGP 900 / month", description: "Includes consultation and 1 weekly session." },
  { title: "Muscle Building Program", price: "EGP 1000 / month", description: "Focused on strength & hypertrophy for maximum muscle growth." },
  { title: "Ladies Program", price: "EGP 1000 / month", description: "Customized workouts designed for women’s fitness goals." },
  { title: "Advanced Physiotherapy Plan", price: "EGP 1500 / month", description: "Covers personalized recovery programs and 2 weekly sessions." },
  { title: "Nutrition + Training Plan", price: "EGP 2000 / month", description: "Get a personal meal plan with training for faster results." },
  { title: "Premium Physiotherapy Plan", price: "EGP 2000 / month", description: "Full rehabilitation support with unlimited sessions." },
  { title: "Pro Athlete Program", price: "EGP 2500 / month", description: "Intense, professional-level training for serious athletes." },
  { title: "VIP Personal Program", price: "EGP 3000 / month", description: "1-on-1 coaching, private sessions, and exclusive facilities." },
  { title: "Annual All-Inclusive", price: "EGP 7000 / year", description: "Unlimited access + save 20% with our annual plan." }
];

// ==========================
// INDEX PAGE RENDER
// ==========================
if (document.getElementById("planContainer")) {
  let currentIndex = 0;
  const plansPerView = 3;
  const planContainer = document.getElementById("planContainer");

  function renderPlans() {
    planContainer.innerHTML = "";
    for (let i = 0; i < plansPerView; i++) {
      const planIndex = (currentIndex + i) % plans.length;
      const plan = plans[planIndex];

      const col = document.createElement("div");
      col.className = "col-md-4";

      col.innerHTML = `
        <div class="p-4 bg-light rounded shadow h-100 d-flex flex-column text-center">
          <h2 class="fw-bold mb-2">${plan.title}</h2>
          <h4 class="text-primary mb-3">${plan.price}</h4>
          <p class="text-muted flex-grow-1">${plan.description}</p>
          <a href="plans.html?id=${planIndex}" class="btn btn-primary mt-3">Join Now</a>
        </div>
      `;
      planContainer.appendChild(col);
    }
  }

  document.getElementById("prevPlan").addEventListener("click", () => {
    currentIndex = (currentIndex - plansPerView + plans.length) % plans.length;
    renderPlans();
  });

  document.getElementById("nextPlan").addEventListener("click", () => {
    currentIndex = (currentIndex + plansPerView) % plans.length;
    renderPlans();
  });

  renderPlans();
}

// ==========================
// PLAN DETAILS PAGE
// ==========================
if (document.getElementById("planDetails")) {
  const urlParams = new URLSearchParams(window.location.search);
  const planId = parseInt(urlParams.get("id"));

  if (!isNaN(planId) && plans[planId]) {
    const plan = plans[planId];
    document.getElementById("planTitle").textContent = plan.title;
    document.getElementById("planPrice").textContent = plan.price;
    document.getElementById("planDescription").textContent = plan.description;
  } else {
    document.getElementById("planDetails").innerHTML = `<p class="text-danger">Plan not found.</p>`;
  }
}
const reviewForm = document.getElementById("reviewForm");
  const reviewMessage = document.getElementById("reviewMessage");

  reviewForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // في نسخة متقدمة ممكن تبعت البيانات للسيرفر أو Google Sheet هنا

    reviewMessage.style.display = "";
    reviewForm.reset();

    setTimeout(() => {
      reviewMessage.style.display = "none";
    }, 3000);
  });
