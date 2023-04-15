function pizzaPriceCost() {
    let form = document.getElementById("pizzaForm");
    let size = 0.0;
    for (var i = 0; i < form.pizzaSize.length; i++) {
        if (document.pizza.pizzaSize[i].checked) {
            size = parseFloat(form.pizzaSize[i].value);
        }
    }
    

    let pizzaTopping = parseFloat(form.topping.value);
    let price = size + pizzaTopping;
    document.getElementById("result").innerHTML = "Your pizza price cost $" + price + ".";
}

