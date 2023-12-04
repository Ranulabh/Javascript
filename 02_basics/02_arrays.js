const marval_heros = ["thor", "spiderMan", "IronMan"]
const dc_heros = ["flast", "superman", "batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);
// console.log(marval_heros[3][1]);

// const allheros = marval_heros.concat(dc_heros)
// console.log(allheros);

const all_New_Heros = [...marval_heros, ...dc_heros]
// console.log(all_New_Heros);

const another_Array = [1,2,3,[4,5],6,[6,7,[2,9]]]

const real_another_array = another_Array.flat(Infinity)

// console.log(real_another_array);

console.log(Array.isArray("Ramesh"));
console.log(Array.from("Ramesh"));
console.log(Array.from({name :"Ramesh"}));

