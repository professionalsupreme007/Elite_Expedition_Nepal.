const destinations = [
  {
    name: "Paris, France",
    price: "$1,200",
    img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    vr: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/sechelt.jpg"
  },
  {
    name: "Dubai, UAE",
    price: "$950",
    img: "https://images.unsplash.com/photo-1504274066651-8d31a536b11a",
    vr: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/yavapai.jpg"
  },
  {
    name: "Nepal Adventure",
    price: "$800",
    img: "https://images.unsplash.com/photo-1544735716-8f6d3b8dd7f1",
    vr: "https://cdn.aframe.io/360-image-gallery-boilerplate/img/snow.jpg"
  }
];

const grid = document.getElementById("destGrid");
const select = document.getElementById("destinationSelect");

destinations.forEach(d => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${d.img}">
    <div class="card-content">
      <h3>${d.name}</h3>
      <p>Starting from ${d.price}</p>
      <button onclick="openVR('${d.vr}')">VR Experience</button>
    </div>
  `;
  grid.appendChild(card);

  const opt = document.createElement("option");
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

document.getElementById("bookingForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Redirecting to secure payment gateway (Stripe test mode)");
  window.open("https://stripe.com/docs/testing", "_blank");
});
