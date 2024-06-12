document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");
  const closeModal = document.getElementById("closeModal");

  document.querySelectorAll(".card_btn").forEach((button) => {
    button.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const title = card.querySelector(".card-title").textContent;
      const count = card.querySelector(".count").textContent;
      const description = card.querySelector(".description").textContent;
      const image = card.querySelector(".main").src;

      document.getElementById("modalTitle").textContent = title;
      document.getElementById("modalCount").textContent = count;
      document.getElementById("modalDescription").textContent = description;
      document.getElementById("modalImage").src = image;

      modal.classList.add("active");
      modal.querySelector(".modal-card").classList.add("active");
    });
  });

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
    modal.querySelector(".modal-card").classList.remove("active");
  });

  window.addEventListener("click", (event) => {
    if (event.target == modal) {
      modal.classList.remove("active");
      modal.querySelector(".modal-card").classList.remove("active");
    }
  });
});

var swiper = new Swiper(".mySwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const validation1 = new JustValidate("#form1", {
  errorFieldCssClass: "is-invalid",
  errorLabelCssClass: "is-label-invalid",
  focusInvalidField: true,
  lockForm: true,
});

validation1
  .addField('input[name="name"]', [
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Имя должно содержать минимум 3 символа",
    },
  ])
  .addField('input[name="phone"]', [
    {
      rule: "required",
      errorMessage: "Введите ваш телефон",
    },
    {
      rule: "minLength",
      value: 17,
      errorMessage: "Введите корректный номер телефона",
    },
  ])
  .addField('input[name="date"]', [
    {
      rule: "required",
      errorMessage: "Выберите дату",
    },
  ])
  .addField('input[name="guests"]', [
    {
      rule: "required",
      errorMessage: "Введите количество гостей",
    },
    {
      rule: "number",
      errorMessage: "Количество гостей должно быть числом",
    },
  ])
  .addField('input[name="age"]', [
    {
      rule: "required",
      errorMessage: "Введите ваш возраст",
    },
    {
      rule: "number",
      errorMessage: "Возраст должен быть числом",
    },
  ]);

const validation2 = new JustValidate("#form2", {
  errorFieldCssClass: "is-invalid",
  errorLabelCssClass: "is-label-invalid",
  focusInvalidField: true,
  lockForm: true,
});

validation2
  .addField('input[name="name2"]', [
    {
      rule: "required",
      errorMessage: "Введите ваше имя",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: "Имя должно содержать минимум 3 символа",
    },
  ])
  .addField('input[name="phone2"]', [
    {
      rule: "required",
      errorMessage: "Введите ваш телефон",
    },
    {
      rule: "minLength",
      value: 17,
      errorMessage: "Введите корректный номер телефона",
    },
  ])
  .addField('input[name="date2"]', [
    {
      rule: "required",
      errorMessage: "Выберите дату",
    },
  ])
  .addField('input[name="guests2"]', [
    {
      rule: "required",
      errorMessage: "Введите количество гостей",
    },
    {
      rule: "number",
      errorMessage: "Количество гостей должно быть числом",
    },
  ])
  .addField('input[name="age2"]', [
    {
      rule: "required",
      errorMessage: "Введите ваш возраст",
    },
    {
      rule: "number",
      errorMessage: "Возраст должен быть числом",
    },
  ]);

// Предотвращение отправки формы при наличии ошибок
const val1 = document.querySelector("#form1");
val1.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(validation1);

  if (!validation1.isValid) {
    console.log("Форма содержит ошибки");
  } else {
    console.log("Форма успешно отправлена");
    //   form.submit(); // Убедитесь, что это здесь вызывается для отправки формы после валидации
  }
});

const val2 = document.querySelector("#form2");
val2.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(validation2);

  if (!validation2.isValid) {
    console.log("Форма содержит ошибки");
  } else {
    console.log("Форма успешно отправлена");
    //   form.submit(); // Убедитесь, что это здесь вызывается для отправки формы после валидации
  }
});
