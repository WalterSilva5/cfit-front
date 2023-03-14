import { useParams } from "react-router-dom";
export function WorkoutPage() {
  const { workoutId } = useParams<{ workoutId: string }>();
  return (
    <div>
      <h1>WORKOUT ! {workoutId}</h1>
    </div>
  );
}
