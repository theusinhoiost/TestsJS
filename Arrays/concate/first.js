const x = ['Matheus', 'Ana', 'Melissa',];
const y = [22, 23, 23, 34];

const z = [...x,'test', ...y,...[2000,3000]]//without spreading operator the array is literal -> [2000,3000]

console.log(z)

z.splice(-1,1);

console.log(z);

console.log(y);