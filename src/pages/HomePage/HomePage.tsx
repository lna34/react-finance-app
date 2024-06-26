import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="hero-section">
        <h1>Bienvenue sur Finance App</h1>
        <p>
          Votre solution de référence pour gérer vos finances de manière
          efficace et efficiente.
        </p>
        <button className="cta-button">Commencer</button>
      </header>
      <section className="features-section">
        <div className="feature">
          <h2>Suivre Vos Dépenses</h2>
          <p>Gardez le contrôle de vos dépenses avec un suivi en temps réel.</p>
        </div>
        <div className="feature">
          <h2>Gérer Les Budgets</h2>
          <p>
            Créez et gérez vos budgets pour atteindre vos objectifs financiers.
          </p>
        </div>
        <div className="feature">
          <h2>Analyses Financières</h2>
          <p>
            Obtenez des informations sur votre santé financière avec des
            rapports et des analyses détaillés.
          </p>
        </div>
      </section>
      <footer className="footer">
        <p>&copy; 2024 Finance App. Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default HomePage;
