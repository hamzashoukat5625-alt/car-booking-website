// 3D tilt effect for cards

// Array of car objects
const cars = [
  {
    name: "Toyota Land Cruiser",
    model: "Land Cruiser",
    type: "SUV • Automatic",
    model_year: "2025",
    variant: "ZX",
    seats: 7,
    image: "images/cars/Land_Cruiser.jpg"
  },
   {
    name: "Toyota",
    model: "Corolla",
    type: "Sedan • Automatic",
    model_year: "2024",
    variant: "altis",
    seats: 5,
    image: "images/cars/Altis.jpg"
  },
   {
    name: "Lexus",
    model: "LX series",
    type: "SUV • Automatic",
    model_year: "2005",
    variant: "LX470",
    seats: 7,
    image: "images/cars/lexus.jpg"
  },
   {
    name: "Toyota",
    model: "Yaris",
    type: "Sedan • Automatic",
    model_year: "2023",
    variant: "GLI MT 1.3",
    seats: 5,
    image: "images/cars/yaris.jpg"
  },
   {
    name: "Honda",
    model: "BR-V",
    type: "SUV • Manual",
    model_year: "2021",
    variant: "i-VTEC",
    seats: 7,
    image: "images/cars/brv.jpg"
  },
   {
    name: "Toyota",
    model: "Hiace",
    type: "VAN • Manual",
    model_year: "2005",
    variant: "indus",
    seats: 17,
    image: "images/cars/van.jpg"
  },
   {
    name: "Toyota",
    model: "Coaster",
    type: "Saloon • Manual",
    model_year: "2005",
    variant: "Saloon",
    seats: 20,
    image: "images/cars/Coaster.webp"
  }
  
];

// Select container
const carList = document.getElementById("car-list");

// Loop through cars and generate HTML
cars.forEach(car => {
  const card = `
    <div class="col-md-6 col-lg-4">
      <article class="car-card">
        <figure class="car-media">
          <img src="${car.image}" alt="${car.name} ${car.model}">
        </figure>
        <div class="car-body">
          <div class="title">
            <h3>${car.name}</h3>
            <div class="chips">
                 <span class="chip">Model: ${car.model}</span>
                 <span class="chip">${car.type}</span>
            </div>
          </div>
          <div class="meta">
            <div class="meta-item ">
              <div class="label">Model Year</div>
              <div class="value">${car.model_year}</div>
            </div>
            <div class="meta-item ">
              <div class="label">Variant</div>
              <div class="value">${car.variant}</div>
            </div>
            <div class="meta-item">
              <div class="label">Seats</div>
              <div class="value">${car.seats}</div>
            </div>
            
          </div>
          <div class="cta">
            <button class="btn primary"><a href="contact.html" style="text-decoration:none; color:#17C9ED;">Book Now</a></button>
          </div>
        </div>
      </article>
    </div>
  `;
  carList.innerHTML += card; // Append each card
});

