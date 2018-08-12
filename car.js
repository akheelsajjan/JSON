var car= {
        "cars": {
            "Nissan": [
                {
                    "model":"Sentra", 
                    "doors":4
                },
                {
                    "model":"Maxima",
                     "doors":4
                },
                 {
                     "model":"Skyline",
                      "doors":2
                }
                ],
            "Ford": [
                {"model":"Taurus", "doors":4},
                {"model":"Escort", "doors":4}
                ]
        }
}

for(i in car){
    alert("car: "+i)
}

for(drive in car.cars){
    alert(drive)
    for(i=0;i<car.cars[drive].length;i++){
        alert(car.cars[drive][i].model)
        alert(car.cars[drive][i].doors)

    }
}