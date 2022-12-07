let tableauUn = [1, 2, 3, 4, 5];
let tableauDeux = ["valeur1", "valeur2", "valeur3", "valeur4", "valeur5", "bidulemachin", "tatayoyo"];
console.table(tableauUn)
console.table(tableauDeux)
/* Votre code ici bas */
let newTable = [tableauUn[0] ** tableauUn[0],
                tableauUn[1] ** tableauUn[1],
                tableauUn[2] ** tableauUn[2],
                tableauUn[3] ** tableauUn[3],
                tableauUn[4] ** tableauUn[4]];

console.table(newTable);

let newTable2 = [tableauUn[0] * 10,
                tableauUn[1] * 10,
                tableauUn[2] * 10,
                tableauUn[3] * 10,
                tableauUn[4] * 10];

console.table(newTable2)

let newTable3 = [(tableauUn[0] + 2) / 31 ,
                (tableauUn[1] + 2) / 31,
                (tableauUn[2] + 2) / 31,
                (tableauUn[3] + 2) / 31,
                (tableauUn[4] + 2) / 31];

console.table(newTable3)
