document.getElementById('white').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'white';
};

document.getElementById('blue').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'blue';
};

document.getElementById('green').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'green';
};

document.getElementById('amber').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'amber';
};

document.getElementById('rgb-red').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'rgb-red';
};

document.getElementById('rgb-green').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'rgb-green';
};

document.getElementById('rgb-blue').onclick = function () {
  document.getElementsByTagName('pre')[0].className = 'rgb-blue';
};

document.getElementById('slopes').onclick = function () {
  document.getElementById('slopes-img').classList.toggle('show-img');
};
