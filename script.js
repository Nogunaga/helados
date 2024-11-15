let helados = ["Chocolate», “Fresa”, “Vainilla”, “Pistacho”, “Napolitana”, “Granizado”, »Frambuesa"];

let iceCreamFlavors = [
    { name: "Chocolate", type: "Chocolate", price: 2 }, 
    { name: "Fresa", type: "Fruta", price: 1 }, 
    { name: "Vainilla", type: "Vainilla", price: 3 }, 
    { name: "Pistachio", type: "Nueces", price: 1.5 }, 
    { name: "Napolitana", type: "Chocolate", price: 2}, 
    { name: "Granizado", type: "Chocolate", price: 1.5 },
    { name: "Frambuesa", type: "Fruta", price: 1},
   ];

   // { scoops: [], total: }
let transacciones = []

transacciones.push({ scoops: ["Chocolate", "Vanilla", "Granizado"], total: 5.5 })
transacciones.push({ scoops: ["Pistachio", "Frambuesa"], total: 2 })
transacciones.push({ scoops: ["Vanilla", "Vanilla"], total: 4 })

const total = transacciones.reduce((acc, curr) => acc + curr.total, 0);
console.log(`Hoy he ganado $  ${total} `); // You've made 11.5 $ today

let flavorDistribution = transacciones.reduce((acc, curr) => {
    curr.scoops.forEach(scoop => {
      if (!acc[scoop]) {
        acc[scoop] = 0;
      }
      acc[scoop]++;
    })
    return acc;
  }, {}) // { Chocolate: 1, Vainilla: 3, Menta: 1, Frambuesa: 1, Fresa: 1 }

  