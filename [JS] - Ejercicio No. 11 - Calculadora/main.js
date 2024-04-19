finalmente = () => {
    displayInput.scrollLeft += 123498174891320;
    if (displayInput.textContent !== '0') {
        clear.textContent = 'C';
    }
    else {
        clear.textContent = 'AC';
    }

}
addNumber = (number) => {
    let displayInput = document.getElementById('displayInput');
    if (displayInput.textContent == 'Syntax Error')
        clearDisplay();

    if (displayInput.textContent == '0')
        displayInput.textContent = number;
    else
        displayInput.textContent += number;

    finalmente();
}

addOperator = (operator) => {
    let displayInput = document.getElementById('displayInput');
    if (displayInput.textContent == 'Syntax Error')
        clearDisplay();

    if (displayInput.textContent.endsWith('+') || displayInput.textContent.endsWith('-') || displayInput.textContent.endsWith('*') || displayInput.textContent.endsWith('/')) {
        displayInput.textContent = displayInput.textContent.slice(0, -1);
    }

    displayInput.textContent += operator;
    finalmente();
}

calculate = () => {
    let displayInput = document.getElementById('displayInput');
    try {
        let result = eval(displayInput.textContent);
        if (result === Infinity || result === -Infinity || isNaN(result)) {
            displayInput.textContent = 'Math Error';
        } else {
            displayInput.textContent = result;
        }
    } catch (error) {
        displayInput.textContent = 'Syntax Error';
    }
    finalmente();
}

clearDisplay = () => {
    let displayInput = document.getElementById('displayInput');
    displayInput.textContent = '0';
    displayInput.style.width = displayInput.scrollWidth + 'px';
    finalmente();
}
addMasMenos = () => {
    let displayInput = document.getElementById('displayInput');
    if (displayInput.textContent == 'Syntax Error')
        clearDisplay();

    if (displayInput.textContent.startsWith('-'))
        displayInput.textContent = displayInput.textContent.slice(1);
    else
        displayInput.textContent = '-' + displayInput.textContent;

    displayInput.scrollLeft += 123498174891320;
}
addPorcentaje = () => {
    calculate();
    let displayInput = document.getElementById('displayInput');
    if (displayInput.textContent == 'Syntax Error')
        clearDisplay();

    displayInput.textContent = eval(displayInput.textContent + '/100');
}
addPunto = () => {
    if (displayInput.textContent.endsWith('.'))
        displayInput.textContent = displayInput.textContent.slice(0, -1);
    displayInput.textContent += '.';
}