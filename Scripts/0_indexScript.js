function sum(a, b) {
  const total = a + b;
  if (total > 100) {
    throw new Error("Toplam 100'den büyük olamaz!!!");
  }

  return total;
}

function power(base, exponent) {
  if (exponent < 0) {
    throw new Error("Üs degeri negatif olamaz");
  }

  return base ** exponent;
}

//Main fonksiyonumuz

function run() {
  const n1 = Number(document.getElementById("num1").value); //ilgili input'un icindeki degeri yakalar
  const n2 = Number(document.getElementById("num2").value);

  const process = document.getElementById("process").value;

  const output = document.getElementById("output"); //dikkat ettiyseniz direkt burada ilgili elementin kendisini yakaladık

  //const deneme = document.getElementsByClassName("div");

  try {
    let result;

    if (process === "sum") {
      result = sum(n1, n2);
    } else if (process === "power") {
      result = power(n1, n2);
    } else {
      throw new Error("Lütfen bir işlem seciniz");
    }

    //Hata  yoksa
    output.innerText = "Sonuc : " + result;
    output.style.color = "green";
  } catch (err) {
    //Hata varsa
    output.innerText = "Hata : " + err.message;
    output.style.color = "red";
  }
}
