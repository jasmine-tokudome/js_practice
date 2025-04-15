function omikuji(){
    let hako = ["大吉","中吉","吉","小吉","凶","大凶"];
    let index = Math.floor(Math.random() * 6);
    let unsei = hako[index];
    console.log(unsei);
}

for (let i = 0;i<10;i++){
    omikuji();
}