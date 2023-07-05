function Hello() {
    console.log('Hello');

    function displayName() {
        console.log('name');
    }

    displayName();

    return 10;
}

const abc = Hello();
console.log('abc::: ', abc);