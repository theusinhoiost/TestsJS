const x = ['Matheus', 'Ana', 'Melissa'];
const y = [22, 23, 23, 34];

const z = [...x,'test', ...y]

console.log(z)

z.splice(-1,1);

console.log(z);

console.log(y);