const cron = require('node-cron');


exports.start = (payment) => {
  let num = 0;

  let task = cron.schedule('*/1 * * * * *', () => {
    num += 1;

    console.log(payment);

    if (num == 10) {

      task.stop();
      console.log('stop')
      task.destroy();
    }
  });

  task.start();
};
