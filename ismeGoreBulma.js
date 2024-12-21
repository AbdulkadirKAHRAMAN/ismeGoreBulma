const ogrenciler = [
    {
        id: 1,
        firstName: "abdulkadir",
        lastName: "Kahraman",
        age: 15
    },
    {
        id: 2,
        firstName: "burak",
        lastName: "Kırca",
        age: 26
    },
    {
        id: 3,
        firstName: "eren",
        lastName: "Kahraman",
        age: 17
    },
    {
        id: 4,
        firstName: "onur",
        lastName: "Pehlivan",
        age: 19 
    },
    {
        id: 5,
        firstName: "caner",
        lastName: "Özgür",
        age: 16 
    }
]
function ismeGoreBulma(){
    let arananKisi= prompt("Bulmak istediğiniz kişinin ismini giriniz").toLocaleLowerCase("tr");

    const arananOgrenci = ogrenciler.find(ogrenciler => ogrenciler.firstName === arananKisi);
    console.log(arananOgrenci);
    
}

ismeGoreBulma();
