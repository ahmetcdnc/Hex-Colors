function changeColor(){
    //hex numaralarının oluşması için, hex numaralarının içinde bulunan rakam ve harfleri dizi içine aldık.
    var hexNumbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];

    var hexCode = '';

    //5 kez dönecek bir döngü yaratıyoruz.
    for(var i=0; i<6; i++){

        //Rastgele bir index numarası üretiyoruz ve ondalık olmasını istemediğimiz için "floor" kullanıyoruz. 6 kez random bir index oluşuyor.
        var randomIndex = Math.floor(Math.random()*hexNumbers.length);

        //hexNumbers içinde oluşan bu 6 random indexi "hexCode" içinde üstüne ekleyerek tutuyoruz.
        hexCode+=hexNumbers[randomIndex]
    }

    //hexCode'u element id'ye göre getirdiğimiz "hex-code" içine yerleştiriyoruz.
    document.getElementById("hex-code").innerHTML = hexCode;
    //body background'una #hexCode diyerek renk veriyoruz.
    document.getElementsByTagName("body")[0].style.background = "#" + hexCode; 
}