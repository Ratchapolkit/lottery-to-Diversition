function generateUniqueNumbers3(count, min, max) {
  if (count > (max - min + 1) || max < min) {
    return null;
  }
  const result = [];
  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
}

function generateUniqueNumbers1(count, min, max) {
  if (count > (max - min + 1) || max < min) {
    return null;
  }
  const result = [];
  while (result.length < count) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!result.includes(randomNumber)) {
      result.push(randomNumber);
    }
  }
  return result;
}

function generateRandomTwoDigitNumber() {
  return Math.floor(Math.random() * (999 - 100 + 1) + 100);
}

function checkConditions() {
  const textInput = document.getElementById('text-input').value;
  const row1 = localStorage.getItem('row1');
  const row2 = localStorage.getItem('row2');
  const row3 = localStorage.getItem('row3');
  const row4 = localStorage.getItem('row4');
  const row5 = localStorage.getItem('row5');
  const row6 = localStorage.getItem('row6');
  const row7 = localStorage.getItem('row7');

  if (textInput == row1 || textInput == row2 || textInput == row3 || textInput == row4 || textInput == row5 || textInput == row6 || textInput == row7) {
    alert('Congratulations! You won the first prize.');
  } else {
    alert('Sorry, better luck next time.');
  }
}

function onclicknum() {
  const uniqueRandomNumbers3 = generateUniqueNumbers3(6, 100, 999);
  const uniqueRandomNumbers1 = generateUniqueNumbers1(1, 10, 99);

  localStorage.setItem('row1', uniqueRandomNumbers3[0]);
  localStorage.setItem('row2', uniqueRandomNumbers3[1]);
  localStorage.setItem('row3', uniqueRandomNumbers3[2]);
  localStorage.setItem('row4', uniqueRandomNumbers3[3]);
  localStorage.setItem('row5', uniqueRandomNumbers3[4]);
  localStorage.setItem('row6', uniqueRandomNumbers3[5]);
  localStorage.setItem('row7', uniqueRandomNumbers1[0]);

  document.getElementById('row1').textContent = localStorage.getItem('row1');
  document.getElementById('row2').textContent = localStorage.getItem('row2');
  document.getElementById('row3').textContent = localStorage.getItem('row3');
  document.getElementById('row4').textContent = localStorage.getItem('row4');
  document.getElementById('row5').textContent = localStorage.getItem('row5');
  document.getElementById('row6').textContent = localStorage.getItem('row6');
  document.getElementById('row7').textContent = localStorage.getItem('row7');
}

function clearnum() {
  localStorage.clear();
}

document.getElementById('row1').textContent = localStorage.getItem('row1');
document.getElementById('row2').textContent = localStorage.getItem('row2');
document.getElementById('row3').textContent = localStorage.getItem('row3');
document.getElementById('row4').textContent = localStorage.getItem('row4');
document.getElementById('row5').textContent = localStorage.getItem('row5');
document.getElementById('row6').textContent = localStorage.getItem('row6');
document.getElementById('row7').textContent = localStorage.getItem('row7');