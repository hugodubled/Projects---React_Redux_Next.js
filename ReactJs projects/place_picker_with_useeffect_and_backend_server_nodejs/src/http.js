export async function fetchAvailablePlaces(){
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    if (!response.ok) {
      /*const error = new Error("failed to fetch places");
      throw error*/
      throw new Error("failed to fetch places");
    }
    return resData.places;
}

export async function fetchUsersPlaces(places){
    const response = await fetch('http://localhost:3000/user-places');
        const resUserData = await response.json();
        if (!response.ok) {
          /*const error = new Error("failed to fetch places");
          throw error*/
          throw new Error("failed to fetch user places");
        }
        return resUserData.places;
  }

export async function updateUserPlaces(places){
  const response = await fetch('http://localhost:3000/user-placesss', {
    method: 'PUT',
    body: JSON.stringify({places}),
    headers: {
        'Content-Type':  'application/json',
    },
});

  const resData = await response.json();
  if(!response.ok){
    throw new Error('Failed to update user data.');
  }
  return resData.message;
}