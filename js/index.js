const progressBars = document.querySelectorAll('span');

const timer = (ms) => new Promise((res) => setTimeout(res, ms));

const updateBars = async () => {
  let i;

  while (parseInt(progressBars[4].innerText, 10) < 100) {
    for (i = 0; i < 5; i += 1) {
      progressBars[i].style.width = `${parseInt(progressBars[i].innerText, 10) + 1}%`;
      progressBars[i].innerText = `${parseInt(progressBars[i].innerText, 10) + 1}%`;
      // eslint-disable-next-line no-await-in-loop
      await timer(3);
    }
  }
};

document.querySelector('button').addEventListener('click', updateBars);