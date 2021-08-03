pizzas = [];

function PizzaItem(size, toppings, crust, individualCost) {
    this.sizeName = size,
    this.toppingsType = toppings,
    this.crustName = crust,
    this.cost = individualCost
}



let options, size, crust, toppings;

run = () => {
    options = document.querySelectorAll("[name='toppings']:checked");
    size = document.querySelector("[name='sizes']:checked").value;
    crust = document.querySelector("[name='crust']:checked").value;
    console.log(size);

}

createPizzaItem = () => {
    run();
    toppings = [];
    for (let i = 0; i < options.length; i++) {
        toppings.push(options[i].value);
    };

    individualCost = myFunction();
    
    function myFunction() {
        let crustCost
        let sizeCost
        let toppingsCost

        if (size == 'Small') {
            sizeCost = 100;
        }
        else if (size == 'Medium') {
            sizeCost = 200;
        }
        else if (size == 'Large') {
            sizeCost = 400;
        }
        else if (size == 'X-Large') {
            sizeCost = 600;
        }

        console.log(sizeCost);

        if (crust == 'Crispy') {
            crustCost = 200;
        } else if (crust == 'Stuffed') {
            crustCost = 400;
        }

        console.log(crustCost);
        
        toppingsCost=0;

        toppings.forEach(element => {
            if (element == 'BBQ-Steak') {
                toppingsCost += 300;

            } 
            if (element == 'Peri-Peri') {
                toppingsCost += 300;

            } 
            if (element == 'Vegan') {
                toppingsCost += 200;
                
            }          
            console.log(toppingsCost);
        });

        totalCost=crustCost + sizeCost + toppingsCost
        console.log(totalCost)
        return totalCost
    };

    const newPizza = new PizzaItem(size, toppings, crust, individualCost)

    pizzas.push(newPizza);
    
    totalcost = 0;
    for (let i = 0; i < pizzas.length; i++) {
        totalcost += pizzas[i].cost;
    }

    //Output
    console.log(pizzas);
    console.log(newPizza);
    console.log(totalcost);
    console.log(newPizza.toppingsType.toString())

    div = document.createElement('div')
    div.setAttribute('class', 'list')
    document.getElementById('item-list').appendChild(div)

    p = document.createElement('p');
    let orderText = document.createTextNode(newPizza.crustName + ' ' + newPizza.toppingsType + ' ' + newPizza.sizeName);
    p.setAttribute('id', 'item');
    p.appendChild(orderText);
    div.appendChild(p);

    p = document.createElement('p');
    let subTotalText = document.createTextNode(newPizza.cost);

    p.setAttribute('id', 'sub-total');
    p.appendChild(subTotalText);
    div.appendChild(p);

    document.getElementById('total').innerHTML = `<p>` + 'TOTAL' +  `</p>` + `<p>` + totalcost +  `</p>`
};

deliver = () => {
    address = prompt('Which address do we deliver to? Please note we have a delivery fee of Ksh 150 within environs')
    if (address == "" || address == null) {
        alert('Please input your delivery address')
    } else {
        alert('Thank you! Your order will be delivered to ' + address + '. Please prepare a total of ' + (totalcost+150) + ' for the rider')
    }
}

pickUp = () => {
    alert('Thank you! Your order will be ready in 45 mins. See you at Marsabit Plaza, Ground Floor. Please prepare a total of Ksh ' + totalcost + ' with you')
}