import Arrow from "../assets/images/arrow-right.png"

function Steps() {
  return (
    <main className="StepsGlobal">
      <div id="FirstColumns">
        <h2>PREMIÈRE ÉTAPE</h2>
        <p>Bienvenue dans votre nouvelle vie avec AstroShift.</p>
        <p>
          Vous pourrez accéder à une nouvelle planète accueillante en trois
          étapes faciles.
        </p>
        <p>
          Si vous avez un handicap, nous proposons des fonctions d'accessibilité
          pour améliorer votre expérience, vous pouvez sélectionner l'option qui
          vous convient.
        </p>
        <p>Une fois l'opération terminée, passez à l'ÉTAPE DEUX.</p>
      </div>
      <img src={Arrow} />
      <div id="SecondColumns">
        <h2>DEUXIÈME ÉTAPE</h2>
        <p>
          Vous avez maintenant accès aux planètes disponibles dans le système et
          à leur description.
        </p>
        <p>
          Avant de commencer votre voyage, consulter la liste des objets
          disponibles pour plus de sécurité.
        </p>
        <p>
          Chaque planète a des propriétés différentes et vous disposez d'un
          crédit limité, alors faites attention à ce que vous apportez avec
          vous.
        </p>
        <p>Une fois le voyage terminé, passez à l'ÉTAPE TROIS.</p>
      </div>
      <img src={Arrow} />
      <div id="ThirdColumns">
        <h2>TROISIÈME ÉTAPE</h2>
        <p>
          Maintenant que vous avez choisi votre planète et le contenu de votre
          sac, enregistrez-vous en nous donnant votre prénom et votre nom de
          famille ainsi que votre localisation précédente sur terre.
        </p>
        <p>
          Confirmez votre sélection, sachez que vous ne pourrez plus la modifier
          par la suite.
        </p>
        <p>
          Lorsque c'est fait, allez chercher votre sac et quittez le vaisseau en
          suivant les instructions du vaisseau.
        </p>
      </div>
    </main>
  )
}

export default Steps
