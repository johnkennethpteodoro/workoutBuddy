import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { TrashIcon } from "@heroicons/react/24/outline";

// data fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const WorkoutDetails = ({ workout }) => {
	const { dispatch } = useWorkoutsContext();

	const handleClick = async () => {
		const response = await fetch("/api/workouts/" + workout._id, {
			method: "DELETE",
		});

		const json = await response.json();

		if (response.ok) {
			dispatch({ type: "DELETE_WORKOUT", payload: json });
		}
	};
	return (
		<div className="p-5 m-2.5 bg-zinc-800 border border-zinc-700 rounded-xl text-white flex justify-between uppercase shadow-lg">
			<div>
				<h1 className="text-xl font-meduim">{workout.title}</h1>
				<h1 className="mt-2 text-sm font-thin">
					<span className="mr-2 text-white font-meduim">Load (kg):</span> {workout.load}
				</h1>
				<h1 className="text-sm font-thin">
					<span className="mr-2 text-white font-meduim">Reps: </span> {workout.reps}
				</h1>
				<p className="mt-3 text-xs font-thin text-white">
					{formatDistanceToNow(new Date(workout.createdAt), { addSuffex: true })}
				</p>
			</div>
			<div>
				<button
					onClick={handleClick}
					className="p-2 border shadow-lg border-zinc-600 rounded-xl"
				>
					<TrashIcon className="w-5 h-5 text-withDirectives " />
				</button>
			</div>
		</div>
	);
};

export default WorkoutDetails;
