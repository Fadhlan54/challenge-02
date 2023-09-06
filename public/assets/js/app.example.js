class App {
  constructor() {
    this.daftarMobilSection = document.getElementById("daftar-mobil-section")
    this.cariButton = document.getElementById("btn-cari-mobil");
    this.daftarMobilRow = document.getElementById("daftar-mobil-row");

  }

  async init() {
    await this.load();
    this.cariButton.onclick = this.run;

  }

  run = () => {
    this.cariButton.addEventListener('click', () => {

      let child = this.daftarMobilRow.firstElementChild;
      while (child) {
        child.remove();
        child = this.daftarMobilRow.firstElementChild;
      }


      // mendapatkan data dari input user
      const tipeDriver = document.getElementById('tipe-driver').value;
      const tanggal = document.getElementById('tanggal').value;
      const jam = document.getElementById('jam-jemput').value;

      let jumlahPenumpang = document.getElementById('jumlah-penumpang').value;
      if (jumlahPenumpang === "") {
        jumlahPenumpang = 1;
      }
      const [year, month, date] = tanggal.split('-');
      const waktuJemput = new Date(year, month - 1, date, jam);

      // menampilkan data ke console
      console.log(`Menampilkan data mobil: `);
      console.log('- car.available = true')
      console.log(`- tipe driver : ${tipeDriver}`);
      console.log(`- Tersedia pada tangal : ${waktuJemput}`);
      if (jam === 8 || jam === 9) {
        console.log(`- jam jemput: 0${jam}.00 WIB`);
      } else {
        console.log(`- jam jemput: ${jam}.00 WIB`)
      }

      if (tipeDriver === true) {
        console.log(`- kapasitas mobil : ${jumlahPenumpang} penumpang + 1 supir`);
      } else {
        console.log(`- kapasitas mobil : ${jumlahPenumpang} penumpang`)
      }
      console.log("")

      // memfilter data
      if (tipeDriver == 'Dengan Supir') {
        jumlahPenumpang = parseInt(jumlahPenumpang) + 1;
      }
      Car.list.forEach((car) => {
        if (car.availableAt < waktuJemput && car.capacity >= jumlahPenumpang && car.available === true) {
          const node = document.createElement("div");
          node.classList.add("col-lg-4", "card-container");
          node.innerHTML = car.render();
          this.daftarMobilRow.appendChild(node);
        }
      });
      this.daftarMobilSection.style.display = "block";
    })
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    console.log('function clear');
    let child = this.daftarMobilRow.firstElementChild;
    while (child) {
      child.remove();
      child = this.daftarMobilRow.firstElementChild;
    }
  };
}
