{
  let isShowing = false;

  let overrlay = document.getElementById("overlay");
  let popup = document.getElementById("js-popup");
  let answer1 = document.getElementById("js-answer1");
  let answer2 = document.getElementById("js-answer2");
  let answer3 = document.getElementById("js-answer3");
  let yes = document.getElementById("js-confirm-yes");
  let no = document.getElementById("js-confirm-no");

  // ポップアップ画面を表示させる関数です
  function showPopup() {
    overrlay.style.visibility = "visible";
    popup.style.visibility = "visible";
    isShowing = true;
  }

  // ポップアップ画面を非表示にする関数です
  function hiddenPopup() {
    overrlay.style.visibility = "hidden";
    popup.style.visibility = "hidden";
    isShowing = false;
  }

  answer1.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    answer(1);
  });

  answer2.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    answer(2);
  });

  answer3.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    answer(3);
  });

  yes.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
  });

  no.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup();
  });

  function answer(number) {
    if (isShowing) {
      return;
    }

    showPopup();

    switch (number) {
      case 1:
        break;

      case 2:
        break;

      case 3:
        break;
    }
  }
}
