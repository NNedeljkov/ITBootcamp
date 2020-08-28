class covek {
    constructor(ime, prezime, godinaRodjenja){
    this.ime = ime
    this.prezime = prezime
    this.godinaRodjenja = godinaRodjenja 
    }
}

class student extends covek {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek){
        super(ime, prezime, godinaRodjenja)
        this.trenutnaGodinaStudija = trenutnaGodinaStudija
        this.trenutniProsek = trenutniProsek
    }
}

class studentOsnovnih extends student {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek)
        this.smerOsnovnihStudija = smerOsnovnihStudija
    }
}

class studentMaster extends studentOsnovnih {
    constructor(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija, smerMasterStudija){
        super(ime, prezime, godinaRodjenja, trenutnaGodinaStudija, trenutniProsek, smerOsnovnihStudija)
        this.smerMasterStudija = smerMasterStudija
    }
}

class zaposleni extends covek {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata){
        super(ime, prezime, godinaRodjenja)
        this.godinaZaposlenja = godinaZaposlenja
        this.plata = plata
    }
}

class nastavnik extends zaposleni {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, predaje = [matematika, fizika, hemija]){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata)
        this.omiljeniPredmet = omiljeniPredmet
        this.predaje = predaje
    }
}

class profesor extends nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, predaje = [matematika, fizika, hemija], titula = [docent, vanredni, redovni]){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, predaje = [matematika, fizika, hemija])
        this.titula = titula
    }
}

class asistent extends nastavnik {
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, predaje = [matematika, fizika, hemija], smerDoktorskihStudija){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, omiljeniPredmet, predaje = [matematika, fizika, hemija])
        this.smerDoktorskihStudija = smerDoktorskihStudija
    }
}

class sluzbenik extends zaposleni{
    constructor(ime, prezime, godinaRodjenja, godinaZaposlenja, plata, odsek){
        super(ime, prezime, godinaRodjenja, godinaZaposlenja, plata)
        this.odsek = odsek
    }
}