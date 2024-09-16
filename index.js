const stdin = process.openStdin()
stdin.on('data', function (n) {
    n = n * 1
    console.log('n: ', n)
    for (let i = 0; i <= n; i++) {
        const arr = []
        for (let j = 0; j <= i; j++) {
            arr.push('x ')
        }
        console.log(arr.join('') + '\n')
    }
    process.exit()
})
