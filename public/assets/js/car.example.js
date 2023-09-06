class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  formatIdr = (jumlah) => {
    const formatter = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    });
    return formatter.format(jumlah);
  }

  render() {
    return `
          <div class="card">
            <div class="car-pict-container">
              <img src="${this.image}" class="card-img-top car-pict" alt="${this.manufacture}">
            </div>

              <div class="card-body">
                  <p class="nama-mobil">${this.manufacture} ${this.model}</p>
                  <h5 class="harga">${this.formatIdr(this.rentPerDay)} / hari</h5>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. </p>
                  <div class="rent">
                      <img src="assets/img/fi_users.svg" alt="">
                      <p>${this.capacity} Orang</p>
                  </div>
                  <div class="rent">
                      <img src="assets/img/fi_settings.svg" alt="">
                      <p>${this.transmission}</p>
                  </div>
                  <div class="rent">
                      <img src="assets/img/fi_calendar.svg" alt="">
                      <p>tahun ${this.year}</p>
                  </div>
                  <a href="#" class="btn">Pilih Mobil</a>
              </div>
          </div>
    `;
  }


}
