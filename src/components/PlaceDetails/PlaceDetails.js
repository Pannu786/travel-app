export const PlaceDetails = ({ place }) => {
  return (
    <>
      <h1>{place["name"]}</h1>
      <h1>{place.sex}</h1>
    </>
  );
};
