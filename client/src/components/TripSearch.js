import { useRef, useState, useEffect } from 'react';
// import { useDispath } from 'react-redux';
// import { setDestination } from '../store/actions';

import { Google, Autocomplete } from "@react-google-maps/api";

import {
	BrowserRouter as Router,
	Route,
	Routes,
	// Link
	useNavigate
} from 'react-router-dom'




function TripSearch({ selectedTripOption }) {

	// const dispatch = useDispath();

	const [googleLoaded, setGoogleLoaded] = useState(false);
	const autocompleteRefA = useRef(null);
	const autocompleteRefB = useRef(null);
	const autocompleteRefC = useRef(null);

	useEffect(() => {
		const script = document.createElement('script');
		script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
		script.onload = () => {
			setGoogleLoaded(true);
		};
		document.head.appendChild(script);

		return () => {
			document.head.removeChild(script);
		};
	}, []);

	const [destination, setDestination] = useState({
		type: selectedTripOption,
		start: null,
		midpoint: null,
		end: null,
		tags: null
	});

	const handlePlaceSelect = (place, name) => {
		console.log(destination.selectedTripOption)
		console.log(place)
		const { geometry } = place;
		if (geometry) {
			const { lat, lng } = geometry.location;
			console.log(place, name)
			setDestination((prevDestination) => ({
				...prevDestination,
				type: selectedTripOption,
				[name]: {
					// name: place.name,
					lat: lat(),
					lng: lng()
				}
			}));
		}
	};

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault();


		// const destination = event.target.elements.destination.value
		// dispatch(setDestination(destination))


		console.log(destination)
		navigate('/create')
		// send destination & setDestination to createMap
		//send newTrip values to create map page
		//post values
	};

	return (
		<>
			{/* -------------------------- ONE WAY TRIP ---------------------------------- */}
			{googleLoaded && (
				<>
					{selectedTripOption === 'oneWay' &&
						<div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
							For one-way trips, enter your start and end points.
							<form
								onSubmit={handleSubmit}
								className='flex flex-col items-center justify-center'
							>
								<div>
									<Autocomplete
										apiKey={apiKey}
										onLoad={autocomplete => {
											autocompleteRefA.current = autocomplete;
											autocomplete.setFields(['geometry']);
										}}
										onPlaceChanged={() => handlePlaceSelect(autocompleteRefA.current.getPlace(), 'start')}
									>
										<input
											placeholder="Start"
											className="border border-gray-500 m-2.5"
											name='start'
											value={destination.start ? destination.start.formatted_address : destination.start}
										/>
									</Autocomplete>

									<Autocomplete
										apiKey={apiKey}
										onLoad={autocomplete => {
											autocompleteRefB.current = autocomplete;
											autocomplete.setFields(['geometry']);
										}}
										onPlaceChanged={() => handlePlaceSelect(autocompleteRefB.current.getPlace(), 'end')}
									>
										<input
											placeholder="End"
											className="border border-gray-500 m-2.5"
											name='end'
											value={destination.end ? destination.end.formatted_address : destination.end}
										/>
									</Autocomplete>
								</div>
								<button
									type='submit'
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Go!
								</button>
							</form>
							<p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>

						</div>
					}

					{/* -------------------------- SINGLE DESTINATION ---------------------------------- */}

					{selectedTripOption === 'singleDestination' &&
						<div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
							For a single destination, enter the main location you want to visit.
							<form
								onSubmit={handleSubmit}
								className='flex flex-col items-center justify-center'
							>
								<Autocomplete
									apiKey={apiKey}
									onLoad={autocomplete => {
										autocompleteRefA.current = autocomplete;
										autocomplete.setFields(['formatted_address']);
									}}
								// onPlaceChanged={() => handlePlaceSelect(autocompleteRef.current.getPlace(), 'start')}
								>
									<input
										placeholder="Destination"
										className="border border-gray-500 m-2.5"
										name='start'
										value={destination.start}
									/>
								</Autocomplete>
								<button
									type='submit'
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Go!
								</button>
							</form>
							<p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>
						</div>
					}
					{/* -------------------------- LOOP TRIP ---------------------------------- */}
					{selectedTripOption === 'loopTrip' &&

						<div className="flex flex-col items-center justify-center h-72 border-dashed border-2 border-green-800">
							For round trips, enter the start and end points, and the name of a place half way down.
							<form
								onSubmit={handleSubmit}
								className='flex flex-col items-center justify-center'
							>
								<div>
									<Autocomplete
										apiKey={apiKey}
										onLoad={autocomplete => {
											autocompleteRefA.current = autocomplete;
											autocomplete.setFields(['formatted_address']);
										}}
									// onPlaceChanged={() => handlePlaceSelect(autocompleteRef.current.getPlace(), 'start')}
									>
										<input
											placeholder="Start"
											className="border border-gray-500 m-2.5"
											name='start'
											value={destination.start}
										/>
									</Autocomplete>
									<Autocomplete
										apiKey={apiKey}
										onLoad={autocomplete => {
											autocompleteRefB.current = autocomplete;
											autocomplete.setFields(['formatted_address']);
										}}
									// onPlaceChanged={() => handlePlaceSelect(autocompleteRef.current.getPlace(), 'start')}
									>
										<input
											placeholder="Midpoint"
											className="border border-gray-500 m-2.5"
											name='midpoint'
											value={destination.midpoint}
										/>
									</Autocomplete>
									<Autocomplete
										apiKey={apiKey}
										onLoad={autocomplete => {
											autocompleteRefC.current = autocomplete;
											autocomplete.setFields(['formatted_address']);
										}}
									// onPlaceChanged={() => handlePlaceSelect(autocompleteRef.current.getPlace(), 'start')}
									>
										<input
											placeholder="End"
											className="border border-gray-500 m-2.5"
											name='end'
											value={destination.end}
										/>
									</Autocomplete>
								</div>
								<button
									type='submit'
									className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Go!
								</button>
							</form>
							<p>Not what you want? <a className="text-blue-500 hover:text-blue-700 cursor-pointer">Go back</a></p>

						</div>

					}
				</>
			)}
		</>
	)
}

export default TripSearch