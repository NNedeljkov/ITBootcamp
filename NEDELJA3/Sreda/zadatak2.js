function pizzaP(r, cena){
    let P = r * r * Math.PI
    let cenaPocmKv = cena / P
    console.log(`Cena pice po kvadratnom centimetru iznosi ${cenaPocmKv} dinara`);
}
pizzaP(30, 900)
