document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calculate").addEventListener("click", function () {
        const price = parseInt(document.getElementById("product").value);
        const quantity = parseInt(document.getElementById("quantity").value);

        if (Number.isNaN(quantity) || quantity < 1) {
            document.getElementById("result").innerText = "Некорректно!";
        } else {
            const total = price * quantity;
            document.getElementById("result").innerText = "Итого: " + total + " р.";
        }
    });
});
