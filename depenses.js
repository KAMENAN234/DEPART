// J06 — Bilan des dépenses
// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
 let a = 0
 for(let i =0;i<depensesSemaine.length;i++){
  a = depenses [i]+a}
return a;
}const total =calculerTotal(depensesSemaine);
console.log(total);
  
// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
let moy= calculerTotal(depenses);
let moyenne = moy/depenses.length;
return moyenne;
}const moy= calculerMoyenne (depensesSemaine);
console.log(moy);

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses){ 
 let sup=[];
  for(let i=0;i< depenses.length;i++){
    if( depenses[i]>2000){
    sup.push(depenses[i]);}
}
return sup;  
}


const dep = filtrerGrossesDepenses(depensesSemaine);
console.log(dep);

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
  if(depenses.length===0) return 0;
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
console.log("TODO : complétez l’analyse des dépenses.");
console.log("Total des depenses:",calculerTotal(depensesSemaine),"FCFA");
console.log("Moyenne par jour:",calculerMoyenne(depensesSemaine),"FCFA");
console.log("Grosses depenses (>2000):", filtrerGrossesDepenses(depensesSemaine),"FCFA");
console.log("Depenses maximale:",trouverMaximum (depensesSemaine),"FCFA");
console.log("Depenses triees:",[...depensesSemaine].sort((a,b)=>a-b),"FCFA");