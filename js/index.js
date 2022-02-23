const progressBars = document.querySelectorAll('span');

const updateBars = () => {
  for(i=0; i<5; i++) {
    while (parseInt(progressBars[i].innerText) < 100) {
      progressBars[i].style.width = `${parseInt(progressBars[i].innerText) +1}%`;
      progressBars[i].innerText = `${parseInt(progressBars[i].innerText) +1}%`
    }
  }
};

document.querySelector('button').addEventListener ('click', updateBars)
