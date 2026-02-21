let dates = "12.25.2000 05.13.2025 -1.00.1000 ab.five.20215 06.06.2006 28.12.1000 95.12.2012"
finder = /^([1-12])[.]([1-31])[.]([1000-2999])$/
let passwords = "234567 1234abcd abcd1234 password 9876543210 qwertyuiop";
let passfinder = /(?=[a-z]+)(?=[0-9]+)[a-z0-9]{8,}/
let link = "codewars.com"
let pattern = /(^[a-zA-Z][a-zA-Z0-9]*)\.([a-zA-Z]+)*\.*(com+$|COM+$)/
let result = pattern.test(link)
console.log(result)
