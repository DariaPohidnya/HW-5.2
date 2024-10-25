const rate = 26;

for (let dollars = 10; dollars <= 100; dollars += 10) {
    const uah = dollars * rate;
    console.log(`${dollars} доларів = ${uah} гривень`);
}

