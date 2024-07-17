let text = "Hell,o wo,r,l,d";
let index = -1;

for (let i = 0; i < text.length; i++) {
    if (text[i] === ',') {
    index = i;
    break;
    }
}
console.log("İlk vergülün indeksi:", index);

let text2 = prompt("Metin daxil edin:");
let number = false;
for (let i = 0; i < text2.length; i++) {
    if (!isNaN(text2[i]) && text2[i] !== ' ') {
        number = true;
        break;
    }
}
if (number) {
    console.log("Metində ədədlər vəya ədəd mövcuddur");
} else {
    console.log("Metində ədədlər mövcud deyil.");
}


