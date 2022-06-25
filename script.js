let timeData = 
`[
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
  ]`

//put json data into variables
const workDailyCurrent = JSON.parse(timeData)[0].timeframes["daily"]["current"];
const workDailyPrev = JSON.parse(timeData)[0].timeframes["daily"]["previous"];
const workWeeklyCurrent = JSON.parse(timeData)[0].timeframes["weekly"]["current"];
const workWeeklyPrev = JSON.parse(timeData)[0].timeframes["weekly"]["previous"];
const workMonthlyCurrent = JSON.parse(timeData)[0].timeframes["monthly"]["current"];
const workMonthlyPrev = JSON.parse(timeData)[0].timeframes["monthly"]["previous"];

const playDailyCurrent = JSON.parse(timeData)[1].timeframes["daily"]["current"];
const playDailyPrev = JSON.parse(timeData)[1].timeframes["daily"]["previous"];
const playWeeklyCurrent = JSON.parse(timeData)[1].timeframes["weekly"]["current"];
const playWeeklyPrev = JSON.parse(timeData)[1].timeframes["weekly"]["previous"];
const playMonthlyCurrent = JSON.parse(timeData)[1].timeframes["monthly"]["current"];
const playMonthlyPrev = JSON.parse(timeData)[1].timeframes["monthly"]["previous"];

const studyDailyCurrent = JSON.parse(timeData)[2].timeframes["daily"]["current"];
const studyDailyPrev = JSON.parse(timeData)[2].timeframes["daily"]["previous"];
const studyWeeklyCurrent = JSON.parse(timeData)[2].timeframes["weekly"]["current"];
const studyWeeklyPrev = JSON.parse(timeData)[2].timeframes["weekly"]["previous"];
const studyMonthlyCurrent = JSON.parse(timeData)[2].timeframes["monthly"]["current"];
const studyMonthlyPrev = JSON.parse(timeData)[2].timeframes["monthly"]["previous"];

const exerciseDailyCurrent = JSON.parse(timeData)[3].timeframes["daily"]["current"];
const exerciseDailyPrev = JSON.parse(timeData)[3].timeframes["daily"]["previous"];
const exerciseWeeklyCurrent = JSON.parse(timeData)[3].timeframes["weekly"]["current"];
const exerciseWeeklyPrev = JSON.parse(timeData)[3].timeframes["weekly"]["previous"];
const exerciseMonthlyCurrent = JSON.parse(timeData)[3].timeframes["monthly"]["current"];
const exerciseMonthlyPrev = JSON.parse(timeData)[3].timeframes["monthly"]["previous"];

const socialDailyCurrent = JSON.parse(timeData)[4].timeframes["daily"]["current"];
const socialDailyPrev = JSON.parse(timeData)[4].timeframes["daily"]["previous"];
const socialWeeklyCurrent = JSON.parse(timeData)[4].timeframes["weekly"]["current"];
const socialWeeklyPrev = JSON.parse(timeData)[4].timeframes["weekly"]["previous"];
const socialMonthlyCurrent = JSON.parse(timeData)[4].timeframes["monthly"]["current"];
const socialMonthlyPrev = JSON.parse(timeData)[4].timeframes["monthly"]["previous"];

const selfcareDailyCurrent = JSON.parse(timeData)[5].timeframes["daily"]["current"];
const selfcareDailyPrev = JSON.parse(timeData)[5].timeframes["daily"]["previous"];
const selfcareWeeklyCurrent = JSON.parse(timeData)[5].timeframes["weekly"]["current"];
const selfcareWeeklyPrev = JSON.parse(timeData)[5].timeframes["weekly"]["previous"];
const selfcareMonthlyCurrent = JSON.parse(timeData)[5].timeframes["monthly"]["current"];
const selfcareMonthlyPrev = JSON.parse(timeData)[5].timeframes["monthly"]["previous"];



let selected;
const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');

//obtain activity hours
const workHours = document.getElementsByClassName('item-activity-content-hours')[0];
const workHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[0];

const playHours = document.getElementsByClassName('item-activity-content-hours')[1];
const playHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[1];

const studyHours = document.getElementsByClassName('item-activity-content-hours')[2];
const studyHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[2];

const exerciseHours = document.getElementsByClassName('item-activity-content-hours')[3];
const exerciseHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[3];

const socialHours = document.getElementsByClassName('item-activity-content-hours')[4];
const socialHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[4];

const selfcareHours = document.getElementsByClassName('item-activity-content-hours')[5];
const selfcareHoursPrevious = document.getElementsByClassName('item-activity-content-previous')[5];

//Highlight options
daily.addEventListener('click', selectOption);
weekly.addEventListener('click', selectOption);
monthly.addEventListener('click', selectOption);

function selectOption (event) {
    event.target.style.color = 'white';
    selected = event.target

    if (selected.id == "daily"){
        //remove non selected options
        document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';

        //change item activity content hours (Daily)
        workHours.textContent = workDailyCurrent + "hrs";
        workHoursPrevious.textContent = "Yesterday - " + workDailyPrev + "hrs";

        playHours.textContent = playDailyCurrent + "hrs";
        playHoursPrevious.textContent = "Yesterday - " + playDailyPrev + "hrs";

        studyHours.textContent = studyDailyCurrent + "hrs";
        studyHoursPrevious.textContent = "Yesterday - " + studyDailyPrev + "hrs";

        exerciseHours.textContent = exerciseDailyCurrent + "hrs";
        exerciseHoursPrevious.textContent = "Yesterday - " + exerciseDailyPrev + "hrs";

        socialHours.textContent = socialDailyCurrent + "hrs";
        socialHoursPrevious.textContent = "Yesterday - " + socialDailyPrev + "hrs";

        selfcareHours.textContent = selfcareDailyCurrent + "hrs";
        selfcareHoursPrevious.textContent = "Yesterday - " + selfcareDailyPrev + "hrs";
    }
    else if (selected.id == "weekly"){
        //remove non selected options
        document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('monthly').style.color = 'hsl(235, 45%, 61%)';

        //change item activity content hours (Weekly)
        workHours.textContent = workWeeklyCurrent + "hrs";
        workHoursPrevious.textContent = "Last Week - " + workWeeklyPrev + "hrs";

        playHours.textContent = playWeeklyCurrent + "hrs";
        playHoursPrevious.textContent = "Last Week - " + playWeeklyPrev + "hrs";

        studyHours.textContent = studyWeeklyCurrent + "hrs";
        studyHoursPrevious.textContent = "Last Week - " + studyWeeklyPrev + "hrs";

        exerciseHours.textContent = exerciseWeeklyCurrent + "hrs";
        exerciseHoursPrevious.textContent = "Last Week - " + exerciseWeeklyPrev + "hrs";

        socialHours.textContent = socialWeeklyCurrent + "hrs";
        socialHoursPrevious.textContent = "Last Week - " + socialWeeklyPrev + "hrs";

        selfcareHours.textContent = selfcareWeeklyCurrent + "hrs";
        selfcareHoursPrevious.textContent = "Last Week - " + selfcareWeeklyPrev + "hrs";
    }
    else if (selected.id == "monthly"){
        //remove non selected options
        document.getElementById('daily').style.color = 'hsl(235, 45%, 61%)';
        document.getElementById('weekly').style.color = 'hsl(235, 45%, 61%)';

        //change item activity content hours (Monthly)
        workHours.textContent = workMonthlyCurrent + "hrs";
        workHoursPrevious.textContent = "Last Month - " + workMonthlyPrev + "hrs";

        playHours.textContent = playMonthlyCurrent + "hrs";
        playHoursPrevious.textContent = "Last Month - " + playMonthlyPrev + "hrs";

        studyHours.textContent = studyMonthlyCurrent + "hrs";
        studyHoursPrevious.textContent = "Last Month - " + studyMonthlyPrev + "hrs";

        exerciseHours.textContent = exerciseMonthlyCurrent + "hrs";
        exerciseHoursPrevious.textContent = "Last Month - " + exerciseMonthlyPrev + "hrs";

        socialHours.textContent = socialMonthlyCurrent + "hrs";
        socialHoursPrevious.textContent = "Last Month - " + socialMonthlyPrev + "hrs";

        selfcareHours.textContent = selfcareMonthlyCurrent + "hrs";
        selfcareHoursPrevious.textContent = "Last Month - " + selfcareMonthlyPrev + "hrs";
    }
}