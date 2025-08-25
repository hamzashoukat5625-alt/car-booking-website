// 3D tilt effect for cards

// Array of car objects
const cars = [
  {
    name: "Toyota Corolla",
    model: "2022",
    type: "AC • Automatic",
    brand: "Toyota",
    variant: "Corolla 1.6",
    seats: 5,
    driver: "Ahmad Khan",
    image: "https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg"
  },
  {
    name: "Honda Civic",
    model: "2021",
    type: "AC • Manual",
    brand: "Honda",
    variant: "Civic 1.8",
    seats: 5,
    driver: "Ali Raza",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
  },
  {
    name: "Kia Sportage",
    model: "2023",
    type: "SUV • Automatic",
    brand: "Kia",
    variant: "Sportage AWD",
    seats: 7,
    driver: "Sara Malik",
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
  },
   {
    name: "Kia Sportage",
    model: "2023",
    type: "SUV • Automatic",
    brand: "Kia",
    variant: "Sportage AWD",
    seats: 7,
    driver: "Sara Malik",
    image: "https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg"
  },{
    name: "Honda Civic",
    model: "2021",
    type: "AC • Manual",
    brand: "Honda",
    variant: "Civic 1.8",
    seats: 5,
    driver: "Ali Raza",
    image: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg"
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
              <div class="label">Brand</div>
              <div class="value">${car.brand}</div>
            </div>
            <div class="meta-item ">
              <div class="label">Model</div>
              <div class="value">${car.variant}</div>
            </div>
            <div class="meta-item">
              <div class="label">Seats</div>
              <div class="value">${car.seats}</div>
            </div>
            <div class="meta-item">
              <div class="label">Driver</div>
              <div class="value">${car.driver}</div>
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

