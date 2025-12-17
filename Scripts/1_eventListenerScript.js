//addeventListener (bir tag'e event davranısını JS yoluyla eklemektir...Bunun avantajı henüz dom'da tanımlanmamıs (runtime'da dokumantasyona girecek taglerin davranısını belirlemektir..Normal bir fonksiyon cagrısıyla o davranısı belirleyemezsiniz))

// const btn = document.getElementById("btn");

// btn.addEventListener("click",() => {
//     alert("Merhaba");
// });

//btn => kimi dinliyorum
//click => neyi dinliyorum
//function => bu gerçekleşirse ne yapayım

/*

  HTML yüklenir
      
  DOM  Olusuyor

  JS DOM'a dokunabilir


  BU durumda ya odaklandıgınız script'i sona koyacaksınız...

  Ya da :



*/

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    alert("Merhaba");
  });
});
