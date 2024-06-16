import React from 'react';

const LeaderboardFragment = () => {
  return (
    <div className="leaderboard-fragment">
      <span className="fragment-title">Leaderboard</span>
      <div className="list">
        <div className="leaderboard-list-item">
          <div className="container">
            <div className="place-container">
              <img className="medal" src="/ce875649195a602284f6.png" />
            </div>
            <img className="photo" src="https://lh3.googleusercontent.com/a/ACg8ocLU-vI50ws-O_0kzrLSWuoig9pr25e5dR8OxZlcrCyPWH9oCqIH=s96-c" />
            <span className="name">You</span>
            <div className="car-container" style={{ left: '0%' }}>
              <img src="/2ab4e4988964a67c00fa.png" className="car-image" />
            </div>
            <span className="points">75</span>
          </div>
        </div>
      </div>
      <a href="/us/ak-car/settings/manage-account" previewlistener="true">
        <button className="connect-button">
          <span className="label">Invite Friends</span>
        </button>
      </a>
    </div>
  );
};

export default LeaderboardFragment;