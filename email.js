import summary from './temp/allure-report/widgets/summary.json';
import sgMail from '@sendgrid/mail';

const sendGridKey = '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';
const total = summary.statistic.total;
const passed = summary.statistic.passed;
const failed = total - passed;
const percentPassed = passed / total * 100;
const percentFailed = 100 - percentPassed;
const runTimeMin = parseInt(summary.time.duration / 60000);
const runTimeSec = parseInt((summary.time.duration % 60000) / 1000);

const messageHTML = `
<div><strong>Total:</strong> ${total}</div>
<div><strong style="color: green;">Passed:</strong> ${passed} (${percentPassed}%)</div>
<div><strong style="color: red;">Failed:</strong> ${failed} - (${percentFailed}%)</div>
<div><strong>Duration:</strong> ${runTimeMin} min ${runTimeSec} sec</div>
<div><strong>Environment:</strong> http://qa.intgames.org</div>`

sgMail.setApiKey(sendGridKey)
const msg = {
    to: 'vlbelov96@gmail.com', // Change to your recipient
    from: 'vlbelov96@gmail.com', // Change to your verified sender
    subject: 'test AT',
    html: `${messageHTML}`,
}
sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent')
    })
    .catch((error) => {
        console.error(error)
    })