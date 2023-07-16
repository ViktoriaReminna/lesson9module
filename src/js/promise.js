'use strict';

// /*
//  * Проміси
//  */

// //? конструктор new Promise(callback(resolve, reject));

// // const promise = new Promise((resolve, reject) => {
// //   setTimeout(() => {
// //     if (Math.random() > 0.5) {
// //       resolve('Done');
// //     } else {
// //       reject('Error');
// //     }
// //   }, 1000);
// // });
// // console.log(promise);
// //? then(onSuccess, onError)

// // promise

// //   .then(data => {
// //     console.log(`Value is ${data}`);
// //     return 5;
// //   })
// //   .then(value => {
// //     console.log(13);
// //   })
// //   .catch(err => {
// //     console.warn(err);
// //   })
// //   .finally(() => {
// //     console.log('Finally did');
// //   });
// // console.log(promise);
// //
// //
// //

// // console.log(promise);

// //? ланцюжок промісів та catch(onError)

// //? finally()

// //? TASK 01
// // Чи можна "перевиконати" проміс?

// // const promise = new Promise((resolve, reject) => {
// //   console.log(`ss`);
// //   resolve(1);

// //   setTimeout(() => {
// //     resolve(2);
// //   }, 5000);
// // });

// // promise.then(result => {
// //   console.log(result);
// // });

// //? TASK 02
// // Що буде у консолі

// // const promise = new Promise((resolve, reject) => {
// //   resolve('1');
// // });

// // promise
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .then(data => {
// //     console.log(data);
// //     return '2';
// //   })
// //   .then(data => {
// //     console.log(data);
// //   });

// //? TASK 03
// // Що буде у консолі

// // const promise = new Promise((resolve, reject) => {
// //   reject('error');
// // });

// // promise
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .then(data => {
// //     console.log(data);
// //     return '2';
// //   })
// //   .then(data => {
// //     console.log(data);
// //   })
// //   .catch(error => {
// //     console.log(error);
// //   });

// // const promise = new Promise((resolve, reject) => {
// //   const canFulfill = Math.random() > 0.5;

// //   setTimeout(() => {
// //     if (canFulfill) {
// //       resolve('Проміс виконується успішно, з результатом(виконаний fulfilled)');
// //     }
// //     reject('Проміс виконується з помилкою(відхилений, rejected)');
// //   }, 2000);
// // });
// // // promise.then(onFulfilled, onRejected);
// // function onFulfilled(result) {
// //   console.log(`${result}`);
// // }
// // function onRejected(error) {
// //   console.log(`${error}`);
// // }

// // promise
// //   .then(onFulfilled, onRejected)
// //   .then(x => {
// //     console.log(x);

// //     return 10;
// //   })

// //   .then(y => {
// //     console.log(y);
// //   })
// //   .catch(error => console.log(error))
// //   .finally(() => console.log('я буду виконаний завжди'));

// // const makeOrder = (dish, onSuccess, onError) => {
// //   // const DELAY = 1000;

// //   return Promise.resolve('food');

// //   // reject('excuse me don_t have food');

// //   // return promise;
// // };

// // makeOrder('cake').then(onMakeOrderSuccess).catch(onMakeOrderError);

// // function onMakeOrderSuccess(result) {
// //   console.log('onMakeOrderSuccess');
// //   console.log(result);
// // }
// // function onMakeOrderError(error) {
// //   console.log('onMakeOrderError');
// //   console.log(error);
// // }
// //

// //

// // const horses = [
// //   'Secretariat',
// //   'Eclipse',
// //   'West Australian',
// //   'FlyingFox',
// //   'Seabiscuit',
// // ];
// // console.log('заїзд почався, ставки не приймаються');
// // // console.log(`переміг ${1}, фінішував за ${1}часу`);
// // // console.log('заїзд закінчився, ставки  приймаються');

// // const promises = horses.map(run);
// // console.log(promises);

// // Promise.race(promises).then(({ horse, time }) => {
// //   console.log(`переміг ${horse}, фінішував за ${time} часу`);
// // });

// // Promise.all(promises).then(() => {
// //   console.log(`заїзд закінчився, ставки  приймаються`);
// // });

// // function run(horse) {
// //   return new Promise(resolve => {
// //     const time = getRandomTime(2000, 3500);

// //     setTimeout(() => {
// //       resolve({ horse, time });
// //     }, time);
// //   });
// // }
// // // run('Mango').then(x => console.log(x));

// // function getRandomTime(min, max) {
// //   return Math.floor(Math.random() * (max - min + 1) + min);
// // }
