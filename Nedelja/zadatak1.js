// povrsina pice
{
    let R = 40
    let cena = 1150
    let r = R / 2
    let P = r * r * Math.PI
    let cenaPoCmKv = cena / P
    console.log(`Cena pice po centimetru kvadratnom iznosi ${cenaPoCmKv} dinara.`)
    console.log(`Ukupna cena pice iznosi ${cenaPoCmKv * P} dinara.`) //trebalo bi da ispise cenu pice (vrednost varijable "cena"), cisto zbog provere}
}