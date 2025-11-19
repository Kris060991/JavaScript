export default class Delivery {
  _name = "";
  _address = "";
  _distance = 0;

  constructor(name, address, distance) {
    this.name = name;
    this.address = address;
    this.distance = distance;
  }

  getElement() {
    this.cardEl = document.createElement("div");
    this.cardEl.classList.add("card");

    this.nameLabel = document.createElement("span");
    this.nameLabel.classList.add("card__label");
    this.nameLabel.textContent = "Имя";

    this.nameEl = document.createElement("span");
    this.nameEl.classList.add("card__value");
    this.nameEl.textContent = this.name;

    this.addressLabel = document.createElement("span");
    this.addressLabel.classList.add("card__label");
    this.addressLabel.textContent = "Адрес";

    this.addressEl = document.createElement("p");
    this.addressEl.classList.add("card__value");
    this.addressEl.textContent = this.address;

    this.distanceLabel = document.createElement("span");
    this.distanceLabel.classList.add("card__label");
    this.distanceLabel.textContent = "Расстояние";

    this.distanceEl = document.createElement("span");
    this.distanceEl.classList.add("card__value");
    this.distanceEl.textContent = `${this.distance} км`;

    this.cardEl.append(this.nameLabel, this.nameEl, this.addressLabel, this.addressEl, this.distanceLabel, this.distanceEl);

    return this.cardEl;
  }

  set name(value) {
    this._name = value;

    if (this.nameEl) {
      this.nameEl.textContent = this._name;
    }
  }

  get name() {
    return this._name;
  }

  set address(value) {
    this._address = value;

    if (this.addressEl) {
      this.addressEl.textContent = this._address;
    }
  }

  get address() {
    return this._address;
  }

  set distance(value) {
    this._distance = value;

    if (this.distanceEl) {
      this.distanceEl.textContent = this._distance;
    }
  }

  get distance() {
    return this._distance;
  }
}