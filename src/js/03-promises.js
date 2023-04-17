import { Notify } from 'notiflix/build/notiflix-notify-aio';


const form = document.querySelector(".form");

form.addEventListener("click", onCreatePromise);

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

function onCreatePromise(evt) {
  evt.preventDefault();
  const { delay, step, amount } = evt.currentTarget.elements;
  let fieldDelay = Number(delay.value);
  let fieldStep = Number(step.value);
  let fieldAmount = Number(amount.value);

  for (let i = 1; i <= fieldAmount; i += 1) {
    fieldDelay += fieldStep;

    createPromise(i, fieldDelay)
      .then(({ position, delay }) => {
        Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`,
        );
      })
      .catch(({ position, delay }) => {
        Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`,
        );
      });
  }
}
