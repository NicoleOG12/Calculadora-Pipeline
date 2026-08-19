let currentExpression = '';
let shouldResetDisplay = false;

const expressionEl = document.getElementById('expression');
const resultEl = document.getElementById('result');

function updateDisplay() {
  expressionEl.textContent = currentExpression
    .replace(/\*/g, '×')
    .replace(/\//g, '÷');
}

function appendNumber(num) {
  if (shouldResetDisplay) {
    currentExpression = '';
    shouldResetDisplay = false;
  }
  currentExpression += num;
  resultEl.textContent = currentExpression;
  updateDisplay();
}

function appendOperator(op) {
  shouldResetDisplay = false;
  const last = currentExpression.slice(-1);
  if (['+', '-', '*', '/', '%'].includes(last)) {
    currentExpression = currentExpression.slice(0, -1);
  }
  currentExpression += op;
  updateDisplay();
  resultEl.textContent = currentExpression
    .replace(/\*/g, '×')
    .replace(/\//g, '÷');
}

function appendDecimal() {
  if (shouldResetDisplay) {
    currentExpression = '0';
    shouldResetDisplay = false;
  }
  const parts = currentExpression.split(/[\+\-\*\/]/);
  const lastPart = parts[parts.length - 1];
  if (lastPart.includes('.')) return;
  if (lastPart === '') currentExpression += '0';
  currentExpression += '.';
  resultEl.textContent = currentExpression;
  updateDisplay();
}

function clearAll() {
  currentExpression = '';
  resultEl.textContent = '0';
  expressionEl.textContent = '';
  shouldResetDisplay = false;
}

function deleteLast() {
  if (shouldResetDisplay) {
    clearAll();
    return;
  }
  currentExpression = currentExpression.slice(0, -1);
  resultEl.textContent = currentExpression || '0';
  updateDisplay();
}

function calculate() {
  if (!currentExpression) return;

  try {
    const expression = currentExpression;
    const result = Function('"use strict"; return (' + expression + ')')();

    if (!isFinite(result)) {
      resultEl.textContent = 'Erro';
      expressionEl.textContent = expression;
      currentExpression = '';
      return;
    }

    expressionEl.textContent = expression
      .replace(/\*/g, '×')
      .replace(/\//g, '÷') + ' =';
    resultEl.textContent = parseFloat(result.toFixed(10));
    currentExpression = String(parseFloat(result.toFixed(10)));
    shouldResetDisplay = true;
  } catch {
    resultEl.textContent = 'Erro';
    currentExpression = '';
  }
}

document.addEventListener('keydown', (e) => {
  if (e.key >= '0' && e.key <= '9') appendNumber(e.key);
  else if (e.key === '+') appendOperator('+');
  else if (e.key === '-') appendOperator('-');
  else if (e.key === '*') appendOperator('*');
  else if (e.key === '/') { e.preventDefault(); appendOperator('/'); }
  else if (e.key === '%') appendOperator('%');
  else if (e.key === '.') appendDecimal();
  else if (e.key === 'Enter' || e.key === '=') calculate();
  else if (e.key === 'Backspace') deleteLast();
  else if (e.key === 'Escape') clearAll();
});
