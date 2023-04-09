let someMap = new Map();
for (let value of someMap.keys()) {
    console.log(value)
}
someMap.forEach((value, key, someMap) => {
    console.log(`Ключ — ${key}, значение — ${value}`)
});
