- When I start a problem : enter a number from keyboard and draw a pyramid with x character like this
- x
- x x
- x x x
- x x x x
- I don't know how can I enter a number , or a string from keyboard in console interface (Terminal interface)
- So I start research on Goole and I got this solution: https://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin?rq=3

- var stdin = process.openStdin();
- stdin.on('data', function(chunk) { console.log("Got chunk: " + chunk); });

- Or another solution is in this link: https://blog.logrocket.com/using-stdout-stdin-stderr-node-js/

- process.stdin.on("data", data => {
    data = data.toString().toUpperCase()
    process.stdout.write(data + "\n")
})

