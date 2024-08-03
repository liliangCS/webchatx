const jobs = document.querySelectorAll(".start-chat-btn");

for (let i = 0; i < jobs.length; i++) {
  setTimeout(() => {
    jobs[i].click();
    setTimeout(() => {
      document.querySelectorAll(".icon-close")[5].click();
      if (i === jobs.length - 1) {
        console.log("执行完了");
      }
    }, 1000);
  }, i * 3000);
}
