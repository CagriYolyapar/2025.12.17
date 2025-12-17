document.addEventListener("DOMContentLoaded", () => {
  const btn = document.createElement("button");

  btn.innerText = "Tıkla";
  btn.type = "button"; //buttonun tipi

  //event ekliyoruz
  btn.addEventListener("click", () => {
    alert("Runtime'da yaratılan button!!");
  });

  //DOM'a ekliyoruz
  document.getElementById("container").appendChild(btn);

  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  //span
  const span = document.createElement("span");
  span.innerText = " Kabul ediyorum";

  //Checkbox'a event ekleyelim
  checkBox.addEventListener("change", () => {
    console.log("Checkbox durumu", checkBox.checked);
  });

  container.appendChild(checkBox);
  container.appendChild(span);
});
