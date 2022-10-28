import { useEffect, useContext } from "react";
import { useAuthContext } from "../../Hooks/useAuthContext";

import { Data } from "../../Context/WorkoutContext";

import "./RecordStyle.css";

const Records = () => {

  const {user} = useAuthContext()
  const { workouts, getWorkouts, deleteWorkout, toggleUpdate } =
    useContext(Data);

  useEffect(() => {
   if(user){
     getWorkouts();
   }
  }, [getWorkouts, user]);

  return (
    <div className="records">
      {workouts &&
        workouts.map((item) => {
          return (
            <div className="record" key={item._id}>
              <h1>{item.title}</h1>
              <p>Reps: {item.reps}</p>
              <p>Load(in kg): {item.load}</p>
              <div className="btns">
                <img
                  onClick={() => toggleUpdate(item)}
                  src={require("../../assets/edit.png")}
                  alt=""
                />

                <img
                  onClick={() => deleteWorkout(item._id)}
                  src={require("../../assets/delete.png")}
                  alt=""
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Records;
