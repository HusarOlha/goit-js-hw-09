import Notiflix from 'notiflix';

const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();

  const {
    delay: { value: delay },
    step: { value: step },
    amount: { value: amount },
  } = evt.currentTarget;

  onCount(Number(amount), Number(delay), Number(step));
}

function onCount(amount, delay, step) {
  for (let i = 0; i < amount; i += 1) {
    const promiseNum = i + 1;
    const delayStep = delay + step * i;
    createPromise(promiseNum, delayStep)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
