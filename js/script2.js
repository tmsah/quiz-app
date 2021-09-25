{
  let isShowing = false;

  let overrlay = document.getElementById("overlay");
  let popup1 = document.getElementById("js-popup1");
  let popup2 = document.getElementById("js-popup2");
  let question = document.getElementById("js-questionComment");
  let answer = document.getElementById("answer");
  let choice1 = document.getElementById("choice1");
  let choice2 = document.getElementById("choice2");
  let choice3 = document.getElementById("choice3");
  let yes = document.getElementById("js-confirm-yes");
  let no = document.getElementById("js-confirm-no");
  let toMap = document.getElementById("toMap");

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

  yes.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup1();
    showPopup2();
  });

  no.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup1();
  });

  toMap.addEventListener("click", () => {
    // イベントが発生した時に動かす処理を記述
    hiddenPopup2();
  });
}
