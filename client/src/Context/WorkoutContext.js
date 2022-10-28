import { createContext, useState } from "react";
import axios from "axios";
import {useAuthContext} from "../Hooks/useAuthContext"
export const Data = createContext();

const WorkoutContext = ({ children }) => {
const {user} = useAuthContext()

  //GET REQUEST STATE
  const [workouts, setWorkouts] = useState(null);
  //GET REQUEST FUNCTION
  const getWorkouts = async () => {
    const response = await axios.get(
      "/api/workouts",
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    const data = response.data;

    setWorkouts(data);
  };

  //POST REQUEST STATE
  const [form, setForm] = useState({
    title: "",
    reps: "",
    load: "",
  });

  //DELETE REQUEST FUNCTION
  const deleteWorkout = async (_id) => {
    await axios.delete(
      `http://localhost:4000/api/workouts/${_id}`,
      {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      }
    );
    getWorkouts();
  };

  //UPDATE REQUEST STATE
  const [updateForm, setUpdateForm] = useState({
    _id: null,
    title: "",
    reps: "",
    load: "",
  });

  const toggleUpdate = (item) => {
    setUpdateForm({
      _id: item._id,
      title: item.title,
      reps: item.reps,
      load: item.load,
    });
  };

  return (
    <Data.Provider
      value={{
        workouts,
        setWorkouts,
        getWorkouts,
        form,
        setForm,
        deleteWorkout,
        updateForm,
        setUpdateForm,
        toggleUpdate,
      }}
    >
      {children}
    </Data.Provider>
  );
};

export default WorkoutContext;
