const progressBars = document.querySelectorAll('span');

const updateBars = () => {
  let i;

  for (i = 0; i < 5; i += 1) {
    while (parseInt(progressBars[i].innerText, 10) < 100) {
      progressBars[i].style.width = `${parseInt(progressBars[i].innerText, 10) + 1}%`;
      progressBars[i].innerText = `${parseInt(progressBars[i].innerText, 10) + 1}%`;
    }
  }
};

document.querySelector('button').addEventListener('click', updateBars);

document.querySelector('button').addEventListener('click', updateBars);
