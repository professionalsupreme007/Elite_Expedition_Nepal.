const destinations = [
  {
    name: "Paris, France",
    image: "images/paris.jpg",
    vr: "images/paris360.jpg",
    price: 1200
  },
  {
    name: "Dubai, UAE",
    image: "images/dubai.jpg",
    vr: "images/dubai360.jpg",
    price: 950
  },
  {
    name: "Nepal Adventure",
    image: "images/nepal.jpg",
    vr: "images/nepal360.jpg",
    price: 800
  }
];

const destContainer = document.getElementById("destinations");
const select = document.getElementById("destinationSelect");

destinations.forEach(d => {
  // cards
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${d.image}">
    <div>
      <h3>${d.name}</h3>
      <p>From $${d.price}</p>
      <button onclick="openVR('${d.vr}')">VR View</button>
    </div>
  `;
  destContainer.appendChild(card);

  // select
  const opt = document.createElement("option");
  opt.value = d.name;
  opt.textContent = d.name;
  select.appendChild(opt);
});

function openVR(src) {
  document.getElementById("vrSky").setAttribute("src", src);
  document.getElementById("vrModal").style.display = "block";
}

function closeVR() {
  document.getElementById("vrModal").style.display = "none";
}

/* PAYMENT (Stripe Test Placeholder) */
document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Redirecting to payment gateway (Stripe test mode)");
  window.open("https://stripe.com/docs/testing", "_blank");
});
