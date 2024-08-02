document.querySelector(".rec-job-list").childNodes.forEach((li, index) => {
  setTimeout(() => {
    li.click();
    setTimeout(() => {
      const btn1El = document.querySelector(".op-btn.op-btn-chat");
      if (btn1El && btn1El.innerText === "立即沟通") {
        btn1El.click();
      }
      setTimeout(() => {
        const closeButtons = document.querySelectorAll(".close");
        if (closeButtons.length > 4) {
          closeButtons[4].click();
        }
      }, 1000);
    }, 1000);
  }, index * 3000);
});
