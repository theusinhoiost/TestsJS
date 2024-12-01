const tellMe = ()=>{
    console.log('THE SECRET')
}


const print1 = function () {
    console.log(1);
}

function exec(param) {
    param()
}

exec(print1);
tellMe();