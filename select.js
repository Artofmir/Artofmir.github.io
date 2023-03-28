const entr = document.getElementById('enter');
const outpt = document.getElementById('span');


const calculate = () => {
  
  const operation = document.querySelector('#oper').value;

    switch (operation) {
      case 'a':
        outpt.textContent = '';
        break;
      case 'b':
        outpt.textContent = 'Спасибо за сделанный выбор!';
        break;
    };
};

  

entr.addEventListener('click', calculate);



