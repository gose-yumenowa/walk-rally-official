const questions = document.querySelectorAll('.qa-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const parentItem = question.parentElement;

    // 既に開いている場合は閉じる
    if(parentItem.classList.contains('active')){
      answer.style.maxHeight = null;
      parentItem.classList.remove('active');
    } else {
      // 他の開いている回答を閉じる
      document.querySelectorAll('.qa-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.qa-answer').style.maxHeight = null;
      });

      // 開く
      answer.style.maxHeight = answer.scrollHeight + "px";
      parentItem.classList.add('active');
    }
  });
});
