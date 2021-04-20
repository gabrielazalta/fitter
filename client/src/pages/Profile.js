import React, {useState} from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { QUERY_ME } from '../utils/queries';
import { ADD_ACTIVITY } from '../utils/mutations';
import { ADD_GOAL } from '../utils/mutations';
import '../Profile.css'


const Profile = () => {
  const { data: userData } = useQuery(QUERY_ME);
  const activities = userData?.me?.activities || [];
  const goals = userData?.me?.goals || [];
 
 
    const [addActivity] = useMutation(ADD_ACTIVITY)
    const [addGoal] = useMutation(ADD_GOAL)

    const [weekday, setWeekday] = useState('');
    const [activityName, setActivityName] = useState('');

    const [question, setQuestion] = useState('');
    const [ answer, setAnswer] = useState('');

    const handleChange = (event, dow) => {
      console.log(event.target.value);
      
      setWeekday(dow);
      setActivityName(event.target.value)

      setQuestion(dow);
    setAnswer(event.target.value)
    };

    const handleChange2 = (event, dow) => {
        console.log(event.target.value);

        setQuestion(dow);
        setAnswer(event.target.value)
      };
    

    const handleClick = async event => {

      console.log("addActivity");
      let weekday = event.target.getAttribute("data-weekday");
      let activityName = document.getElementById("textarea-" + weekday).value;

    //   let question = event.target.getAttribute("data-goal");
    //   let answer = document.getElementById("text-" + question).value;

      console.log(activityName);
        try {
            // add reaction to database
            await addActivity({
                variables: { weekday, activityName }
            });
            // clear form value 
            setWeekday(weekday);
            setActivityName('');

        } catch (e) {
                console.error(e);
        }
    };

    const handleClick2 = async event => {
        
        let goal = event.target.getAttribute("data-goal");
        let goalName = document.getElementById("text-" + question).value;
        
          try {
              // add reaction to database
              await addGoal({
                  variables: { goal, goalName }
              });
              // clear form value 
              setQuestion(goal);
              setAnswer('');

          } catch (e) {
                  console.error(e);
          }
      };

  return (

<main className="container body-card m-12 mt-3 pb-1">
    <div className="m-5 row">

            <div className="m-2 p-2 mb-5 col">
                <h3 className="calendar-title text-center border-bottom border-success"> Your Activities</h3>
                {activities &&
                activities.map(activity => (
                <div key={activity._id} className="text4 text-center calendar-input">
                    <div>{activity?.weekday}: {activity?.activityName}</div>
                </div>
                ))}
                <form onSubmit={handleClick}>
                    <div className="mt-5 time-block">
                        <div className="m-1 day">
                            Sunday
                        </div>
                        <input id="textarea-Sunday" onChange={(event)=> handleChange(event, "Sunday")} className="
                        calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Sunday" className="btn saveBtn" type="submit"><i className="fas fa-save save-icon"
                                data-weekday="Sunday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Monday
                        </div>
                        <input id="textarea-Monday" onChange={(event)=> handleChange(event, "Monday")} className="
                        calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Monday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Monday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Tuesday
                        </div>
                        <input id="textarea-Tuesday" onChange={(event)=> handleChange(event, "Tuesday")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Tuesday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Tuesday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Wednesday
                        </div>
                        <input id="textarea-Wednesday" onChange={(event)=> handleChange(event, "Wednesday")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Wednesday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Wednesday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Thursday
                        </div>
                        <input id="textarea-Thursday" onChange={(event)=> handleChange(event, "Thursday")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Thursday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Thursday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Friday
                        </div>
                        <input id="textarea-Friday" onChange={(event)=> handleChange(event, "Friday")} className="
                        calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Friday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Friday"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            Saturday
                        </div>
                        <input id="textarea-Saturday" onChange={(event)=> handleChange(event, "Saturday")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick(event)} data-weekday="Saturday" className="btn saveBtn"><i className="fas fa-save save-icon" data-weekday="Saturday"></i></button>
                    </div>
                </form>
            </div>

            {/* Health questions */}
            <div className="m-2 p-2 mb-5 col">
                <h3 className="calendar-title text-center border-bottom border-success"> Your Goals</h3>
                {goals &&
                goals.map(goal => (
                <div key={goal._id} className="text4 text-center calendar-input">
                    <div>{goal?.goal}: {goal?.goalName}</div>
                </div>
                ))}

                <form onSubmit={handleClick2}>
                    <div className="mt-5 time-block">
                        <div className="m-1 day">
                            1. Current Weight
                        </div>
                        <input id="text-Question-1" onChange={(event)=> handleChange2(event, "Question-1")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-1" className="btn
                            saveBtn"><i className="fas fa-save save-icon" data-goal="Question-1"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            2. Goal Weight
                        </div>
                        <input id="text-Question-2" onChange={(event)=> handleChange2(event, "Question-2")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-2" className="btn saveBtn"><i className="fas fa-save save-icon" data-goal="Question-2"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            3. How many days do you plan on working out this week?
                        </div>
                        <input id="text-Question-3" onChange={(event)=> handleChange2(event, "Question-3")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-3" className="btn saveBtn"><i className="fas fa-save save-icon" data-goal="Question-3"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            4. What's your dietary plan for this week?
                        </div>
                        <input id="text-Question-4" onChange={(event)=> handleChange2(event, "Question-4")} className="
                        calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-4" className="btn saveBtn"><i className="fas fa-save save-icon" data-goal="Question-4"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            5. How many hours of sleep do you plan on getting each night?
                        </div>
                        <input id="text-Question-5" onChange={(event)=> handleChange2(event, "Question-5")}
                        className="calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-5" className="btn saveBtn"><i className="fas fa-save save-icon" data-goal="Question-5"></i></button>
                    </div>

                    <div className="time-block">
                        <div className="m-1 day">
                            6. Do you plan on reducing your alcohol/drug/tobacco intake this week?
                        </div>
                        <input id="text-Question-6" onChange={(event)=> handleChange2(event, "Question-6")} className="
                        calendar-input">
                        </input>
                        <button onClick={(event)=>handleClick2(event)} data-goal="Question-6" className="btn saveBtn"><i className="fas fa-save save-icon" data-goal="Question-6"></i></button>
                    </div>
                </form>
            </div>
    </div>
</main>
  );
};
export default Profile;