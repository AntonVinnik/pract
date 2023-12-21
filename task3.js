const ADMIN_PASSWORD = "jqueryismyjam";
let message;

const UserPassword = prompt("Введіть пароль:");

if (UserPassword === null) {
  message = "Скасовано користувачем!";
} else if (UserPassword === ADMIN_PASSWORD) {
  message = "Ласкаво просимо!";
} else {
  message = "Доступ заборонений, невірний пароль!";
}

alert(message);