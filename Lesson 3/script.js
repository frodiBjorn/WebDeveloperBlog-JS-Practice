function fun1() {
    let rangeTopLeft = document.getElementById('rangeTopLeft').value,
        rangeTopRight = document.getElementById('rangeTopRight').value,
        rangeBottomRight = document.getElementById('rangeBottomRight').value,
        rangeBottomLeft = document.getElementById('rangeBottomLeft').value,
        textTopLeft = document.getElementById('textTopLeft'),
        textTopRight = document.getElementById('textTopRight'),
        textBottomRight = document.getElementById('textBottomRight'),
        textBottomLeft = document.getElementById('textBottomLeft'),
        block = document.getElementById('block');

        textTopLeft.value = rangeTopLeft;
        textTopRight.value = rangeTopRight;
        textBottomRight.value = rangeBottomRight;
        textBottomLeft.value = rangeBottomLeft;

        block.style.borderRadius= rangeTopLeft + 'px ' +rangeTopRight + 'px ' + rangeBottomRight + 'px ' + rangeBottomLeft + 'px ';
        

}