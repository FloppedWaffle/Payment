//alert("TODO_0: сделать инициализацию пользователя с сервера. Если он госслужащий, то мы добавим кнопочку 'перейти в министерство'(она есть в хтмльке), которая отправит пользователя на страницу министерства (которую мы ща активно делаем. наверно). Если деловой важный человек предприниматель, то мы добавим кнопочку 'перейти в фирму' (она тоже есть в хтмл), которая отправит пользователя на страницу фирмы (которую мы тоже делаем, но не так активно).");

function lightDarkToggle (toggle) { //Переключатель светлого и тёмного режима странички
  if (typeof localStorage["Toggle"] != "string") {
    localStorage["Toggle"] = "true";
  }

  let h1 = document.querySelectorAll("h1");
  let h2 = document.querySelector("#info").querySelectorAll("h2");
  let li = document.querySelectorAll("li");
  let hr = document.getElementById("main-hr");
  let toggle_btn = document.getElementById("lightDarkToggle");
  toggle_anim = [
    { opacity: 0},
    { opacity: 1}
  ]

  if (localStorage["Toggle"] == "true") {
    toggle_btn.textContent = "🌚"; toggle_btn.animate(toggle_anim, { duration: 1000});
    document.body.style.backgroundColor = "#fff"; document.body.animate(toggle_anim, { duration: 1000});
    try { hr.style.backgroundColor = "#000"; hr.animate(toggle_anim, { duration: 1000})} catch {};
    try { for (i = 0; i < h1.length; i++) { h1[i].style.color = "#000"; h1[i].animate(toggle_anim, { duration: 1000})}} catch {}; 
    try { for (i = 0; i < h2.length; i++) { h2[i].style.color = "#000"; h2[i].animate(toggle_anim, { duration: 1000})}} catch{};
    try { for (i = 0; i < li.length; i++) { li[i].style.color = "#000"; li[i].animate(toggle_anim, { duration: 1000})}} catch{};
    if (toggle) {localStorage["Toggle"] = "false"; location.reload();}
  }
  else {
    toggle_btn.textContent = "☀"; toggle_btn.animate(toggle_anim, { duration: 1000});
    document.body.style.backgroundColor = "#000"; document.body.animate(toggle_anim, { duration: 1000});
    try { hr.style.backgroundColor = "#fff"; hr.animate(toggle_anim, { duration: 1000})} catch {};
    try { for (i = 0; i < h1.length; i++) { h1[i].style.color = "#fff"; h1[i].animate(toggle_anim, { duration: 1000})}} catch {};
    try { for (i = 0; i < h2.length; i++) { h2[i].style.color = "#fff"; h2[i].animate(toggle_anim, { duration: 1000})}} catch {};
    try { for (i = 0; i < li.length; i++) { li[i].style.color = "#fff"; li[i].animate(toggle_anim, { duration: 1000})}} catch {};
    if (toggle) {localStorage["Toggle"] = "true"; location.reload();}
  }
}

function nalogi () {
  //Добавление кода на страницу
  let modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.append(modal);
  modal.insertAdjacentHTML("afterbegin", `
  <div id="modal-overlay" class="modal-overlay">
    <div id="modal-window" class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Уплата налогов</span>
      </div>
      <div class="modal-body">
      </div>
      <div class="modal-footer">
        <button id="modal_cancel_id" onclick="modalCancel()" class="btn-orange">Выйти</button>
      </div>
    </div>
  </div>`);

  alert("Уплачены/неуплачены (Если 1 => уплачены, иначе => неуплачены) TODO_1: сделать в зависимости от значения на сервере вывод статуса налогов. В случае неуплаты при нажатии на 'Уплатить' значение на сервере изменится.");
  let taxes = prompt("Вы уплатили налоги?");
  let modalTaxes = document.querySelector(".modal-body"),
    modalTaxesFooter = document.querySelector(".modal-footer");
  if (taxes == "1") {
    modalTaxes.insertAdjacentHTML("afterbegin", `<span class="modal-nalogi" style="background-color: #599d36">Налоги уплачены</span>`);
    modalTaxesFooter.insertAdjacentHTML("afterbegin", `<button type="button" class="btn-orange" disabled>Упллатить</button>`);
  }
  else {
    modalTaxes.insertAdjacentHTML("afterbegin", `<span class="modal-nalogi" style="background-color: #fe5495">Налоги не уплачены</span>`);
    modalTaxesFooter.insertAdjacentHTML("afterbegin", `<button onclick="paytaxes()" type="button" class="btn-orange">Упллатить</button>`);
  };
}

function perevod () {
  alert('TODO_2: сделать выпадающее окошечко <datalist> у <input placeholder="Выберите игрока: ">, где будут имена игроков (<options>), получаемые с сервера. Также уже можно заняться реализацией перевода денег на баланс другого игрока + зарплата (вычетание будет происходить с баланса предприятия).');
  let modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.append(modal);
  modal.insertAdjacentHTML("afterbegin", `
  <div id="modal-overlay" class="modal-overlay">
    <div id="modal-window" class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Перевод средств другому игроку</span>
      </div>
      <form id="transferForm" method="post">
        <div class="modal-body">
          <input id="input_1" autocomplete="off" list="player-list" type="text" maxlength="32" placeholder="Выберите игрока: " name="player-name" required>
          <input id="input_2" autocomplete="off" type="number" placeholder="Кол-во талиц: " name="money-amount" required>
        </div>
        <div class="modal-footer">
          <button onclick="pinCode()" type="button" class="btn-orange">Подтвердить</button>
          <button id="modal_cancel_id" type="button" onclick="modalCancel()" class="btn-orange">Выйти</button>
        </div>
      </form>
    </div>
  </div>`);
}

function uslugi () {
  alert("TODO_3: Тут то же самое, что и во втором todo, но тут будут фирмы и услуги.")
  let modal = document.createElement("div");
  modal.classList.add("modal");
  document.body.append(modal);
  modal.insertAdjacentHTML("afterbegin", `
  <div id="modal-overlay" class="modal-overlay">
    <div id="modal-window" class="modal-window">
      <div class="modal-header">
        <span class="modal-title">Оплата услуг фирмы</span>
      </div>
      <form id="serviceForm" method="post">
        <div class="modal-body">
          <input id="input_1" autocomplete="off" maxlength="32" placeholder="Выберите фирму: " name="firm-name" required>
          <input id="input_2" autocomplete="off" maxlength="32" placeholder="Выберите услугу: " name="service-name" required>
        </div>
        <div class="modal-footer">
          <button onclick="pinCode()" type="button" class="btn-orange">Подтвердить</button>
          <button id="modal_cancel_id" type="button" onclick="modalCancel()" class="btn-orange">Выйти</button>
        </div>
      </form>  
    </div>
  </div>`);
}

function pinCode () { //Модальное окно с вводом пин-кода. 
  alert('TODO_4: Нижнюю проверку на кол-во символов надо будет заменить на проверку наличия игрока/фирмы в базе данных. В случае игрока - проверка кол-ва талиц на балансе. В случае фирмы - проверка кол-ва талиц на балансе и проверка наличия услуги у фирмы.');
  let inputForm1 = document.getElementById("input_1");
  let inputForm2 = document.getElementById("input_2");
  if (inputForm1.value.length < 4) {
    inputForm1.style.border = "1px solid #ff483b";
  }
  if (inputForm2.value.length < 4) {
    inputForm2.style.border = "1px solid #ff483b";
  }
  if (inputForm1.value.length > 4 && inputForm2.value.length > 4) {  
    let pin_modal = document.createElement("div");
    pin_modal.classList.add("pin_modal");
    document.body.append(pin_modal);
    pin_modal.insertAdjacentHTML("afterbegin", `    
    <div id="modal-overlay" class="modal-overlay">
      <div id="modal-window" class="modal-window">
        <div class="modal-header">
          <span class="modal-title">Подтверждение действия</span>
        </div>
        <form id="pinForm" method="post">
          <div class="modal-body">
            <input id="pin-input" type="password" autocomplete="off" maxlength="6" placeholder="Введите ваш пин-код: " name="pin-code" required>
          </div>
          <div class="modal-footer">
            <button type="button" onclick="pinCodeVerify()" class="btn-orange">Подтвердить</button>
            <button id="modal_cancel_id" type="button" onclick="modalCancel()" class="btn-orange">Выйти</button>
          </div>
        </form>
      </div>
    </div>`);
    let pinForm = document.getElementById("pinForm");
    pinForm.addEventListener("keydown", function () {
      if (event.keyCode == 13) {
        event.preventDefault();
      }
    });
  }
}
function pinCodeVerify () { //Подтверждение пин-кода.
  let pinForm = document.querySelector("form");
  let pinInput = document.getElementById("pin-input");
  alert('TODO_5: Тут надо запросы к серваку делать на подтверждение пин-кода, а не тот огрызок, который я сделал. PIN=228133');
  if (pinInput.value == "228133" ) {
    pinForm.submit();
  }
  else {
    pinInput.style.border = "1px solid #ff483b";
  }
}

function modalCancel () { //Кнопка "Выйти" в модалках
  let modal_btn = document.querySelectorAll("#modal_cancel_id");
  for (let i = 0; i < modal_btn.length; i++) {modal_btn[i].setAttribute("disabled", "disabled");}
  let modal = document.querySelector(".modal");
  let pin_modal = document.querySelector(".pin_modal");
  let modal_animate = [
    {opacity: "1"},
    {opacity: "0"}
  ]

  if (modal != null && pin_modal != null) {
    modal.animate(modal_animate, {duration: 1000})
    pin_modal.animate(modal_animate, {duration: 1000})
    setTimeout(() => {  modal.remove(); pin_modal.remove() }, 970);
  }
  else {
    modal.animate(modal_animate, {duration: 1000})
    setTimeout(() => {  modal.remove();}, 970);
  }
}

function playerTransfers () {
  try {log_values = document.getElementById("log-values").remove();} catch {};
  let prifirmTransfersId = document.getElementById("prifirmTransfersId");
  prifirmTransfersId.insertAdjacentHTML("afterend", `
  <div id="log-values">
  <h2>|Сумма и время|</h2>
  <h2>|Отправитель|</h2>
  <h2>|Получатель|</h2>
  <hr>
  <!--Образец вывода-->
  <p>|228 талиц, 14:34|</p>
  <p>|Пельмень Андреевич|</p>
  <p>|Бекмамбет Трахтенбергович|</p>
  <hr>
  <p>|1337 талиц, 13:53|</p>
  <p>|Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas|</p>
  <p>|У чувака выше ахринеть какое длинное имя. У меня длиннее ;p|</p>
  <hr>
  <p>|4321 талиц, 12:13|</p>
  <p>|Копипастим, пока руки не отвалятся|</p>
  <p>|Да-да, не отвалятся|</p>
  <hr>
  <p>|1234 талиц, 11:43|</p>
  <p>|Босс, я устал|</p>
  <p>|Давай-давай, вилкой чисти-чисти, раз-раз-раз-раз|</p>
  </div>`);
}
function pubfirmTransfers () {
  try {document.getElementById("log-values").remove();} catch {};
  let prifirmTransfersId = document.getElementById("prifirmTransfersId");
  prifirmTransfersId.insertAdjacentHTML("afterend", `
  <div id="log-values">
  <h2>|Сумма и время|</h2>
  <h2>|Отправитель|</h2>
  <h2>|Получатель|</h2>
  <hr>
  <!--Образец вывода-->
  <p>|338 талиц, 15:51|</p>
  <p>|Дофига важный|</p>
  <p>|Х#й бумажный|</p>
  <hr>
  <p>|777 талиц, 12:12|</p>
  <p>|Uvuvwevwevwe Onyetenyevwe Ugwemuhwem Osas-старший|</p>
  <p>|Еб#ть пизд#тый|</p>
  <hr>
  <p>|4321 талиц, 11:52|</p>
  <p>|Еб#ть комплимент|</p>
  <p>|В жопе цемент|</p>
  <hr>
  <p>|1341 талиц, 10:43|</p>
  <p>|Х#я крутой|</p>
  <p>|Вытри ♂ cum ♂ под губой|</p>
  </div>`);
}
function prifirmTransfers () { 
  try {document.getElementById("log-values").remove();} catch {console.log(" ")};
  let prifirmTransfersId = document.getElementById("prifirmTransfersId");
  prifirmTransfersId.insertAdjacentHTML("afterend", `
  <div id="log-values">
  <h2>|Сумма и время|</h2>
  <h2>|Отправитель|</h2>
  <h2>|Получатель|</h2>
  <hr>
  <!--Образец вывода-->
  <h1>|Заполняем хоть бы как|</h1>
  <hr>
  <h2>|Пук-среньк|</h2>
  <hr>
  <h3>|Хи-хи|</h3>
  <hr>
  <h4>|Ха-ха|</h4>
  <hr>
  <h5>|Шизофрения какая-то. Бывает ¯\\_(ツ)_/¯|</h5>
  <style>.log-table h1, h3, h4, h5 {color: #fe9654;}</style>`);
}


//Жёстко заспидранил stuckoverflow за день.