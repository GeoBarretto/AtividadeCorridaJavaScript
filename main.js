let car1 = new Carro(new MotorFusca(), "Fusca");
let car2 = new Carro(new MotorCarroça(), "Carroça");
let car3 = new Carro(new MotorFerrari(), "Ferrari");
let car4 = new Carro(new MotorRangeRover(), "Range Rover");

document.write(car1.nome + ": " + car1.acelerar() + "</br>");
document.write(car2.nome + ": " + car2.acelerar() + "</br>");
document.write(car3.nome + ": " + car3.acelerar() + "</br>");
document.write(car4.nome + ": " + car4.acelerar() + "</br>");

