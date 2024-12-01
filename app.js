const body = document.querySelector("body")
const myBtn= document.querySelector(".btn-click")
const myMouse= document.querySelector(".btn-over")
const myColor = document.getElementById("colorInput")
const myText = document.getElementById("colorText")
const myQuote = document.getElementById("quote");

//random hex generator;internetten buldum.(bu fonksiyonu yapamadim)
const randomHex = () => {
    let n = (Math.random() * 0xfffff * 1000000).toString(16);
    return '#' + n.slice(0, 6);
  };

  const quotes = [
    "Kod, sadece bir makineyi değil, bir fikri hayata geçirmenin yoludur.",
    "Her bug, daha iyi bir kod yazma fırsatıdır.",
    "Hatalar, öğrenmenin en hızlı yoludur; hata yapmaktan korkma, kodlamaya devam et.",
    "Küçük adımlarla büyük değişimler yaratabilirsiniz.",
    "Bir sorunu çözmek için saatler harcıyorsan, doğru yoldasın demektir.",
    "Her zaman ileriye bakın, asla pes etmeyin.",
    "Bir programcı, karmaşıklığı basitliğe dönüştürme sanatçısıdır.",
    "Kod temizse, zihin de temizdir.",
    "Yazılım geliştirme bir maraton; sabır ve tutarlılık başarı getirir."
];


// Rastgele bir söz seçici
const randomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

//Sayfa yüklenince
body.onload = function() {
    let color= randomHex()
    body.style.backgroundColor=color
    myColor.value=color
    myText.textContent=`${color}`
    myQuote.textContent = randomQuote();
}

//butona baslinca
myBtn.addEventListener("click",(e)=>{
    let color= randomHex()
    body.style.backgroundColor=color
    myColor.value=color
    myText.textContent=`${color}`
    myQuote.textContent = randomQuote();
   
})

//mouse gelince
myMouse.onmouseover = () =>{
    let color= randomHex()
    body.style.backgroundColor=color
    myColor.value=color
    myText.textContent=`${color}`
    myQuote.textContent = randomQuote();
}

//input ile girilince
myColor.addEventListener("input",()=>{
    let color = myColor.value;
    body.style.backgroundColor=color
    myText.textContent=`${color}`
    myQuote.textContent = randomQuote();
})





