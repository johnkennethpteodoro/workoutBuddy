import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
	const { workouts, dispatch } = useWorkoutsContext();

	useEffect(() => {
		const fetchWorkouts = async () => {
			const response = await fetch("/api/workouts");
			const json = await response.json();

			if (response.ok) {
				dispatch({ type: "SET_WORKOUTS", payload: json });
			}
		};

		fetchWorkouts();
	}, [dispatch]);

	return (
		<div className="grid grid-cols-3 gap-4">
			<div className="col-span-2">
				<div class="sm:hidden">
					<label for="tabs" class="sr-only">
						Select your country
					</label>
					<select
						id="tabs"
						class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					>
						<option>Profile</option>
						<option>Dashboard</option>
						<option>setting</option>
						<option>Invoioce</option>
					</select>
				</div>
				<ul class="hidden text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400 mt-5 mx-5">
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white"
							aria-current="page"
						>
							All
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Back
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Arms
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Shoulders
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Chest
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-r border-gray-200 dark:border-gray-700  hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Legs
						</a>
					</li>
					<li class="w-full focus-within:z-10">
						<a
							href="#"
							class="inline-block w-full p-4 bg-white border-s-0 border-gray-200 dark:border-gray-700 rounded-e-lg hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
						>
							Core
						</a>
					</li>
				</ul>
				<div className="grid grid-cols-3 mt-2.5 mx-2.5">
					{workouts &&
						workouts.map((workout) => (
							<WorkoutDetails key={workout._id} workout={workout} />
						))}
				</div>
			</div>
			<div className="h-screen border-l bg-zinc-800 border-zinc-700">
				<WorkoutForm />
			</div>
		</div>
	);
};

export default Home;
