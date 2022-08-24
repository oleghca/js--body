function index() {
  let weight = +Form.value;
  let height = +Fort.value;
  let mass = weight / height ** 2;
  mass = Math.round(mass * 100) / 100;

  if (mass <= 16) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Выраженый дифицит массы тела";
  }
  if (mass <= 18.5 && mass >= 16.1) {
    Formula.innerHTML = mass;

    Format.innerHTML = "Недостаточная масса тела дифицит";
  }
  if (mass <= 25 && mass >= 18.6) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Норма";
  }
  if (mass <= 30 && mass >= 25.1) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Избыточная масса тела(предожирение)";
  }
  if (mass <= 35 && mass >= 30.1) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Ожирение 1 степени";
  }
  if (mass <= 40 && mass >= 35.1) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Ожирение 2 степени";
  }
  if (mass > 40) {
    Formula.innerHTML = mass;
    Format.innerHTML = "Ожирение 3 степени";
  }
}
