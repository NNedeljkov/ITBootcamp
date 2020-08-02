{
    function lifeSupply(numPerMonth,age){
        if(numPerMonth > 0 && age > 0 && age <= 100){
            let x = (numPerMonth * 12) * (100 - age)
            return x
        }
        else{
            return 'Pogresan unos ili ne ispunjavate uslove za dozivotno snabdevanje picom'
        }
    }
}

lifeSupply(8,31)
console.log(lifeSupply(8,31))