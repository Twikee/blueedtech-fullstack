const loading = (function () {
    const P = [
      'Loading.    ',
      'Loading..   |',
      'Loading...  /',
      'Loading.... -',
    ];
  
    const stopCondition = 30;
    let currentCondition = 0;
    let indexArray = 0;
  
    return setInterval(function () {
      process.stdout.write('\r' + P[indexArray++]);
  
      indexArray &= 3;
  
      currentCondition++;
  
      if (currentCondition == stopCondition) {
        clearInterval(loading);
      }
    }, 250);
  })();
