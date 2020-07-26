{
    let N = 5

    for(let x = 1; x <= N; x++){
        let red = ''
        for(let y = 1; y <= x; y++){
            red = ' '.repeat(N - x) + '#'.repeat(y)
        }
        console.log(red)
    }
}
