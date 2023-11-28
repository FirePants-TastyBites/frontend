import "./StaffProfile.scss";
const StaffProfile = () => (
  <section className="profile-section">
    <div className="profile-container">
      <img className="profile-picture" src="/maria.png" alt="Profile" />
      <section className="profile-details">
        <p className="profile-name">Maria Gomez</p>
        <p className="profile-email">Maria@Tastybites.se</p>
      </section>
      <p className="profile-description">
        Stay on top of your daily tasks and manage your workflow efficiently
        with the Staff Task Manager.
      </p>
    </div>
  </section>
);

export default StaffProfile;
