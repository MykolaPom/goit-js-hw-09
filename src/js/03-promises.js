import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', e => {
  e.preventDefault();

  let DELAY = Number(form.delay.value);

  for (let i = 1; i <= Number(form.amount.value); i += 1) {
    createPromise(i, DELAY)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));

    DELAY += Number(form.step.value);
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {

    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};
