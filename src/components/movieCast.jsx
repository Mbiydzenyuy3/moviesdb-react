import PropTypes from "prop-types";

export default function CastList({ cast }) {
  return (
    <>
      <section className="cast-section">
        <div className="container">
          <h2>Cast</h2>
          <div className="cast-grid">
            {cast.map((member) => (
              <div key={member.id} className="cast-member">
                <img
                  src={
                    member.profile_path
                      ? `https://image.tmdb.org/t/p/w185${member.profile_path}`
                      : "/placeholder-profile.jpg"
                  }
                  alt={member.name}
                />
                <div className="cast-info">
                  <h4>{member.name}</h4>
                  <p>{member.character}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

CastList.propTypes = {
  cast: PropTypes.object,
};
