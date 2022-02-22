function calc() {
  const b1 = document.querySelector(".b1").value;
  const b2 = document.querySelector(".b2").value;
  const b0 = document.querySelector(".b0").value;
  const b3 = document.querySelector(".b3").value;
  const b4 = document.querySelector(".b4").value;
  const result = document.querySelector("#result");

  const calculo = (b3 / b4) * b0;

  result.innerHTML = `${b1} a ${b2}: ${b0}KM vc vai gastar: R$${calculo.toFixed(
    2
  )}`;
}
