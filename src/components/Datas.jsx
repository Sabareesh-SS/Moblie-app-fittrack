import React from 'react';

const Datas = () => {

    const weekly_prog=[
        {id:1, color:'rgb(79, 181, 78)', day:'Mon'},
        {id:2, color:'rgb(79, 181, 78)', day:'Tue'},
        {id:3, color:'rgb(79, 181, 78)', day:'Wed'},
        {id:4, color:'rgb(226, 226, 226)', day:'Thu'}, 
        {id:5, color:'rgb(226, 226, 226)', day:'Fri'},
        {id:6, color:'rgb(226, 226, 226)', day:'Sat'},
        {id:7, color:'rgb(226, 226, 226)', day:'Sun'}
    ]   

    const recent=[
        {id:1, color:'rgb(255, 140, 0)', what:'Morning Run', work:'Cardio', time:'25 min', cal:'320 cal'},
        {id:2, color:'rgb(78, 111, 181)', what:'Upper Body', work:'Strength', time:'45 min', cal:'280 cal'},
        {id:3, color:'rgb(44, 131, 88)', what:'Yoge Flow', work:'Flexibility', time:'30 min', cal:'50 cal'},
        {id:4, color:'rgb(245, 78, 140)', what:'Cycling', work:'Cardio', time:'20 min', cal:'200 cal'}
    ]

    const plans=[
        {id:1, title:'Today', data:['Morning Run', 'Core Workout', 'Evening Stretch']},
        {id:2, title:'Recommended', data:['HIIT Session', 'Upper Body', 'Yoga Flow']},
        {id:3, title:'Popular', data:['Full Body Burn', '30-day Challenge', 'Recovery Day']}
    ]

return(
    {weekly_prog,recent,plans}
);
}

export default Datas;

