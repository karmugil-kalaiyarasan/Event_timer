import React, { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("Apr 30, 2022 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / (1000));



      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        if (days < 10) {
          let a = 0;
          let s1 = a.toString();
          let s2 = hours.toString();
          let s = s1 + s2;
          setTimerHours(s);
        } else {
          setTimerDays(days);
        }
        if (hours < 10) {
          let a = 0;
          let s1 = a.toString();
          let s2 = hours.toString();
          let s = s1 + s2;
          setTimerHours(s);
        } else {
          setTimerHours(hours);
        }
        if (minutes < 10) {
          let a = 0;
          let s1 = a.toString();
          let s2 = minutes.toString();
          let s = s1 + s2;
          setTimerMinutes(s);
        } else {
          setTimerMinutes(minutes);
        }
        if (seconds < 10) {
          let a = 0;
          let s1 = a.toString();
          let s2 = seconds.toString();
          let s = s1 + s2;
          // let concatSeconds = parseInt(s);
          setTimerSeconds(s);
        } else {
          setTimerSeconds(seconds);
        }
      }



    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="timer-container">
      <section className="timer">
        <div>
          <span className="mdi mdi-calendar-clock timer-icon"></span>
          <h2>Event Timer</h2>
          <p>Event starts in!</p>
        </div>
        <div>
          <section>
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </section>
          <span>:</span>
          <section>
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </section>
        </div>
      </section>
    </section>
  );
}

export default App;
