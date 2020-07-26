// Prodavnica
{
    let cena = 6307
    let novac = 145
    let razlika = novac - cena
    if(cena <= novac){
        console.log(`Uspesno ste kupili proizvod, na Vasem racunu ostalo je jos ${razlika} dinara.`)
    }
    else{
        console.log(`Nemate dovoljno novca, na Vasem racunu imate ${novac} dinara, a cena proizvoda je ${cena} dinara.`)
    }
}
