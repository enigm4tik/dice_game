function throwDice() {
    /*
    The user throws a d6 die. 
    return: int
    */
    let die = Math.round((Math.random() * 5) + 1);
    let currentThrow = document.getElementById('current_throw');
    if (currentThrow.parentElement.classList.contains('hidden')) {
      currentThrow.parentElement.classList.remove('hidden');
    }
    currentThrow.innerHTML = die;
  }
  
  function placeDice() {
    /*
    The user places the thrown die in their field if an open field is available.
    */
    
  }