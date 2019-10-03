var obj = { count: "16", name: "Salsa Picante", price: "12,90" };

var result = Object.keys(obj).map(function(key) {
  return [Number(key), obj[key]];
});

console.log(result);
