class Book {
  constructor() {
    this._reservations = [];
  }

  get reservations() {
    return this._reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

const book = new Book();
book.addReservation({ name: "mikan", time: new Date() });
console.log(book.reservations);
