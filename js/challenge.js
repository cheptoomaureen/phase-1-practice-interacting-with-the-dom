document.addEventListener("DOMContentLoaded", function() {
    // Counter
    let counter = document.getElementById('counter');
    let count = 0;
    let isPaused = false;
    let intervalId;
  
    function updateCounter() {
      counter.textContent = count;
    }
  
    function startCounter() {
      intervalId = setInterval(function() {
        if (!isPaused) {
          count++;
          updateCounter();
        }
      }, 100);
    }
  startCounter();
  // Button Events
    document.getElementById('plus').addEventListener('click', function() {
      if (!isPaused) {
        count++;
        updateCounter();
      }
    });
  
    document.getElementById('minus').addEventListener('click', function() {
      if (!isPaused) {
        count--;
        updateCounter();
      }
    });
    // the heart  Button
    let likesList = document.querySelector('.likes');
    document.getElementById('heart').addEventListener('click', function() {
      if (!isPaused) {
        let like = document.createElement('li');
        like.textContent = `${count} ❤️`;
        likesList.appendChild(like);
      }
    });
    //  Implementing pause Button
    let pauseButton = document.getElementById('pause');
    pauseButton.addEventListener('click', function() {
      isPaused = !isPaused;
      if (isPaused) {
        clearInterval(intervalId);
        pauseButton.textContent = 'resume';
      } else {
        startCounter();
        pauseButton.textContent = 'pause';
      }
    });
  //  working on the comment Form
    document.getElementById('comment-form').addEventListener('submit', function(event) {
      event.preventDefault();
      let commentInput = document.getElementById('comment-input');
      let comment = commentInput.value.trim();
      if (!isPaused && comment !== '') {
        let commentDiv = document.createElement('div');
        commentDiv.textContent = comment;
        document.getElementById('list').appendChild(commentDiv);
        commentInput.value = '';
      }
    });
  });
  