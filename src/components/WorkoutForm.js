import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
	const { dispatch } = useWorkoutsContext();
	const [title, setTitle] = useState("");
	const [load, setLoad] = useState("");
	const [reps, setReps] = useState("");
	const [error, setError] = useState(null);
	const [emptyFields, setEmptyFields] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const workout = { title, load, reps };

		const response = await fetch("/api/workouts", {
			method: "POST",
			body: JSON.stringify(workout),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const json = await response.json();

		if (!response.ok) {
			setError(json.error);
			setEmptyFields(json.emptyFields);
		}
		if (response.ok) {
			setTitle("");
			setLoad("");
			setReps("");
			setError(null);
			setEmptyFields([]);
			console.log("new workout added", json);
			dispatch({ type: "CREATE_WORKOUT", payload: json });
		}
	};

	return (
		<form className="create" onSubmit={handleSubmit} class="w-full h-full">
			<div className="p-5">
				<h6 className="text-xl text-white uppercase font-meduim">Add a new Workout</h6>

				<div className="mt-5">
					<div className="mb-4">
						<label
							className="block mb-2 text-sm font-thin text-white uppercase"
							for="exercise"
						>
							Exersize Title
						</label>
						<select
							name="exercise"
							id="exercise"
							onChange={(e) => setTitle(e.target.value)}
							className={`${
								emptyFields.includes("title") ? "error" : ""
							} border shadow-lg border-zinc-600 rounded-md bg-zinc-800 w-full py-2 px-2 text-white`}
						>
							<option value="">Select Option</option>
							<option value="Deadlift">Deadlift</option>
							<option value="T-Bar Row">T-Bar Row</option>
							<option value="The Bird-Dog">The Bird-Dog</option>
							<option value="30-Degree Lat Pulldown">30-Degree Lat Pulldown</option>
							<option value="Pullups">Pullups</option>
							<option value="Farmer’s Walk & Trap Bar Carry">
								Farmer’s Walk & Trap Bar Carry
							</option>
							<option value="Seated Incline Dumbbell Curl">
								Seated Incline Dumbbell Curl
							</option>
							<option value="Dips">Dips</option>
							<option value="Diamond Pushups">Diamond Pushups</option>
							<option value="Shrugs">Shrugs</option>
							<option value="Dumbbell Lateral Raises">Dumbbell Lateral Raises</option>
							<option value="Presses">Presses</option>
							<option value="Half-Kneeling Landmine Press">
								Half-Kneeling Landmine Press
							</option>
							<option value="Barbell Bench Press">Barbell Bench Press</option>
							<option value="Cable Crossover">Cable Crossover</option>
							<option value="BOSU, Puncher’s, and TRX Pushups">
								BOSU, Puncher’s, and TRX Pushups
							</option>
							<option value="Incline Flye">Incline Flye</option>
							<option value="Squat">Squat</option>

							<option value="Leg Curl">Leg Curl</option>
							<option value="Leg Extension">Leg Extension</option>
							<option value="Bulgarian Split Squat">Bulgarian Split Squat</option>
							<option value="Calf Raise">Calf Raise</option>
							<option value="Planks">Planks</option>
							<option value="Barbell Ab Rollout">Barbell Ab Rollout</option>
							<option value="Cable Woodchop">Cable Woodchop/option/</option>
							<option value="Weighted Decline Situp">Weighted Decline Situp</option>
						</select>
					</div>

					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-white uppercase">
							Load (in Kg)
						</label>
						<input
							type="number"
							onChange={(e) => setLoad(e.target.value)}
							value={load}
							className={`${
								emptyFields.includes("load") ? "error" : ""
							} border shadow-lg border-zinc-600 rounded-md bg-zinc-800 w-full py-1 px-2 text-white`}
						/>
					</div>

					<div className="mb-4">
						<label className="block mb-2 text-sm font-thin text-white uppercase">
							Reps
						</label>
						<input
							type="number"
							onChange={(e) => setReps(e.target.value)}
							value={reps}
							className={`${
								emptyFields.includes("reps") ? "error" : ""
							} border shadow-lg border-zinc-600 rounded-md bg-zinc-800 w-full py-1 px-2 text-white`}
						/>
					</div>
				</div>

				<div className="flex justify-end">
					<button class="px-5 py-3 border shadow-lg border-zinc-600 rounded-md text-sm font-medium text-white focus:outline-none focus:shadow-outline mt-4 uppercase">
						Add Workout
					</button>
				</div>
				{error && <div className="text-white error">{error}</div>}
			</div>
		</form>
	);
};

export default WorkoutForm;
