import { useRef, useState, useCallback, useEffect } from "react";

import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { sortPlacesByDistance } from "./loc.js";
import { fetchUsersPlaces, updateUserPlaces } from "./http.js";
import Error from "./components/Error.jsx";

function App() {
  const selectedPlace = useRef();

  const [userPlaces, setUserPlaces] = useState([]);

  const [errorUpdatingPlaces, setErrorUpdatingPlaces]= useState();

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const [error, setError] = useState();

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

 
    useEffect(() => {
      async function fetchUserPlaces() {
       setIsFetching(true);
        try {
          const places = await fetchUsersPlaces();
  
          navigator.geolocation.getCurrentPosition((position) => {
            const sortedPlaces = sortPlacesByDistance(
              places,
              position.coords.latitude,
              position.coords.longitude,
            );
            setUserPlaces(sortedPlaces);
             setIsFetching(false);
          });
        } catch (error) {
          setError({
            message: error.message || "Could not fetch user places, please try again later",
          });
          setIsFetching(false);
        }
      }
      fetchUserPlaces();  
    }, []);

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });

    try{
      if (userPlaces.some((place) => place.id === selectedPlace.id)){
        return userPlaces;
      }
       await updateUserPlaces([selectedPlace, ...userPlaces]);
    }
    catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({
        message: error.message || 'failed to updated places',
      })
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );

    try{
      await updateUserPlaces(
        userPlaces.filter((place) => place.Id !== selectedPlace.current.id)
      )
    }catch(error){
      setUserPlaces(userPlaces);
      setErrorUpdatingPlaces({message: error.message || 'failed to delete place'})
    }

    setModalIsOpen(false);
  }, []);

  function handleError(){
    setErrorUpdatingPlaces(null);
  }

  return (
    <>
      <Modal  open={errorUpdatingPlaces}  onClose={handleError}>
        {errorUpdatingPlaces&&(
        <Error 
            title="An error occcured"
            message= {errorUpdatingPlaces.message}
            onConfirm={handleError}
        />)}
      </Modal>

      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
      {error && <Error
         title="An error occured"
          message={error.message}
          onConfirm={true}
         />}
        {!error&&<Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          isLoading={isFetching}
          loadingText='fetching your places ...'
          onSelectPlace={handleStartRemovePlace}
        />}

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}
export default App;
