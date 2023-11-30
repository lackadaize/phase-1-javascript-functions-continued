// saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  console.log(saturdayFun());
  console.log(saturdayFun("bathe my dog"));
  
  // mondayWork function
  function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
  }
  
  console.log(mondayWork());
  console.log(mondayWork("work from home"));
  
  // wrapAdjective function
  function wrapAdjective(asterisk = "*") {
    return function innerAdjectiveWrapper (descriptive = "a hard worker") {
      return (`You are ${asterisk}${descriptive}${asterisk}!`)
    }
  }
  
  console.log(wrapAdjective()());