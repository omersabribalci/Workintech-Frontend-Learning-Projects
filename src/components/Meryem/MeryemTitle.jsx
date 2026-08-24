import Meryem from "./Meryem";

function MeryemTitle({profile}) {
  return (
    <>
    
      <h2>
        ben {profile.firstName} {profile.lastName}
      </h2>
    </>
  );
}

export default MeryemTitle;