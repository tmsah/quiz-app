{
  let isShowing = false;

  let overrlay = document.getElementById("overlay");
  let popup1 = document.getElementById("js-popup1");
  let popup2 = document.getElementById("js-popup2");
  let popup3 = document.getElementById("js-popup3");
  let answer1 = document.getElementById("js-answer1");
  let answer2 = document.getElementById("js-answer2");
  let answer3 = document.getElementById("js-answer3");
  let yes = document.getElementById("js-confirm-yes");
  let no = document.getElementById("js-confirm-no");
  let toMap = document.getElementById("js-confirm-toMap");
  let retry = document.getElementById("js-confirm-retry");

  // ポップアップ画面1を表示させる関数です
  function showPopup1() {
    overrlay.style.visibility = "visible";
    popup1.style.visibility = "visible";
    isShowing = true;
  }

  // ポップアップ画面1を非表示にする関数です
  function hiddenPopup1() {
    overrlay.style.visibility = "hidden";
    popup1.style.visibility = "hidden";
    isShowing = false;
  }

  // ポップアップ画面2を表示させる関数です
  function showPopup2() {
    overrlay.style.visibility = "visible";
    popup2.style.visibility = "visible";
    isShowing = true;
  }

  // ポップアップ画面2を非表示にする関数です
  function hiddenPopup2() {
    overrlay.style.visibility = "hidden";
    popup2.style.visibility = "hidden";
    isShowing = false;
  }

  // ポップアップ画面3を表示させる関数です
  function showPopup3() {
    overrlay.style.visibility = "visible";
    popup3.style.visibility = "visible";
    isShowing = true;
  }

  // ポップアップ画面3を非表示にする関数です
  function hiddenPopup3() {
    overrlay.style.visibility = "hidden";
    popup3.style.visibility = "hidden";
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
    //回答が正しいか判定する
    hiddenPopup1();
  });

  no.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup1();
  });

  toMap.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    //mapへGO!!
  });

  retry.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup3();
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
