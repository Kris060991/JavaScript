import Delivery from "./Delivery.js";

export default class EditDelivery extends Delivery {
  _status = "delivery";
  constructor(name, address, distance, status) {
    super(name, address, distance);
    this.status = status;
  }

  // Статический метод для расчета общего расстояния
  static getTotalDistance(deliveries) {
    return deliveries.reduce((total, delivery) => {
      // Не суммируем отмененные доставки
      if (delivery.status !== "canceled") {
        return total + delivery.distance;
      }
      return total;
    }, 0);
  }

  getEditBtnEl() {
    this.editBtn = document.createElement("button");
    this.editBtn.classList.add("card__edit-btn");
    this.editBtn.textContent = "Изменить";

    this.editBtn.addEventListener("click", () => {
      this.showEditModal();
    });

    return this.editBtn;
  }

  getElement() {
    this.cardEl = super.getElement();
    this.editBtn = this.getEditBtnEl();
    this.cardEl.append(this.editBtn);

    if (this._status === "delivered") {
      this.cardEl.classList.add("delivered");
    }
    if (this._status === "canceled") {
      this.cardEl.classList.add("canceled");
    }

    return this.cardEl;
  }

  showEditModal() {
    // Создаем модальное окно
    this.modal = document.createElement("div");
    this.modal.classList.add("card-change");
    this.modal.innerHTML = `
            <div class="card-change__content">
            <button class="close-btn">&times;</button>
                <h3 class="card-change__title">Изменить</h3>
                <div class="form-group">
                    <input type="text" class="form-group__input" id="edit-name" value="${
                      this._name
                    }">
                </div>
                <div class="form-group">
                    <input type="text" class="form-group__input"  id="edit-address" value="${
                      this._address
                    }">
                </div>
                <div class="form-group">
                    <input type="number" class="form-group__input" id="edit-distance" value="${
                      this._distance
                    }">
                </div>
                <div class="form-group">
                    <select id="edit-status" class="form-group__input">
                        <option value="delivery" ${
                          this._status === "delivery" ? "selected" : ""
                        }>Доставляется</option>
                        <option value="delivered" ${
                          this._status === "delivered" ? "selected" : ""
                        }>Доставлен</option>
                        <option value="canceled" ${
                          this._status === "canceled" ? "selected" : ""
                        }>Отменён</option>
                    </select>
                </div>
                    <button class="card-change__btn" id="save-changes">Сохранить</button>

            </div>
        `;

    document.body.classList.add("modal-open");

    document.body.append(this.modal);
    const closeBtn = this.modal.querySelector(".close-btn");
    const changeBtn = document.getElementById("save-changes");

    closeBtn.addEventListener("click", () => {
      this.closeModal();
    });

    changeBtn.addEventListener("click", () => {
      this.saveChanges();
    });
  }

  saveChanges() {
    const name = document.getElementById("edit-name").value;
    const address = document.getElementById("edit-address").value;
    const distance = parseInt(document.getElementById("edit-distance").value);
    const status = document.getElementById("edit-status").value;

    // Обновляем свойства
    this.name = name;
    this.address = address;
    this.distance = distance;
    this.status = status;

    this.closeModal();
  }

  closeModal() {
    if (this.modal) {
      document.body.removeChild(this.modal);
      this.modal = null;
      document.body.classList.remove("modal-open");
    }
  }

  set status(value) {
    this._status = value;
    if (this.cardEl) {
      if (this.cardEl.classList.contains("canceled")) {
        this.cardEl.classList.remove("canceled");
      }
      if (this.cardEl.classList.contains("delivered")) {
        this.cardEl.classList.remove("deliveled");
      }
      if (this._status === "delivered") {
        this.cardEl.classList.add("delivered");
      }
      if (this._status === "canceled") {
        this.cardEl.classList.add("canceled");
      }
    }
  }

  get status() {
    return this._status;
  }
}