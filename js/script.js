// Знаходимо кнопку за її ID та додаємо слухача подій
document.getElementById("submit-btn").addEventListener("click", function() {
    
    // Отримуємо значення з поля вводу
    let networkName = document.getElementById("nn-name").value;
    
    // Перевіряємо, чи поле не порожнє (перевірка даних)
    if(networkName.trim() === "") {
        alert("Будь ласка, введіть назву нейромережі перед відправкою!");
    } else {
        // Динамічна зміна контенту (виведення спливаючого вікна)
        alert("Дякуємо! Нейромережа '" + networkName + "' успішно запропонована до довідника.");
        
        // Очищаємо поле після успішної "відправки"
        document.getElementById("nn-name").value = "";
    }
});