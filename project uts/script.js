function showPlantingTime() {
    var plant = document.getElementById("plant").value; 
    var plantingTimeText = document.getElementById("planting-time"); //untuk menampilkan hasil atau teks waktu tanam tanaman.


    switch (plant) { //untuk memeriksa nilai dari variabel plant (tanaman yang dipilih).
        case "padi":
            plantingTimeText.textContent = "Waktu tanam padi: Musim hujan (November - April).";
            break;
        case "jagung":
            plantingTimeText.textContent = "Waktu tanam jagung: Musim kemarau (April - September).";
            break;
        case "kedelai":
            plantingTimeText.textContent = "Waktu tanam kedelai: Musim kemarau (April - September).";
            break;
        case "tomat":
            plantingTimeText.textContent = "Waktu tanam tomat: Musim hujan (Desember - Maret).";
            break;
        case "kentang":
            plantingTimeText.textContent = "Waktu tanam kentang: Musim hujan (November - Februari).";
            break;
        case "cabai":
            plantingTimeText.textContent = "Waktu tanam cabai: Musim kemarau (Maret - Agustus).";
            break;
        case "wortel":
            plantingTimeText.textContent = "Waktu tanam wortel: Musim kemarau (Maret - September).";
            break;
        case "melon":
            plantingTimeText.textContent = "Waktu tanam melon: Musim kemarau (April - September).";
            break;
        case "semangka":
            plantingTimeText.textContent = "Waktu tanam semangka: Musim kemarau (April - September).";
            break;
        case "apel":
            plantingTimeText.textContent = "Waktu tanam apel: Musim hujan (November - Maret).";
            break;
        case "stroberi":
            plantingTimeText.textContent = "Waktu tanam stroberi: Musim hujan (November - Januari).";
            break;
        case "mawar":
            plantingTimeText.textContent = "Waktu tanam mawar: Musim hujan (November - Maret).";
            break;
        case "anggrek":
            plantingTimeText.textContent = "Waktu tanam anggrek: Musim kemarau (Maret - Oktober).";
            break;
        default:
            plantingTimeText.textContent = "";
            break;
    }
}
