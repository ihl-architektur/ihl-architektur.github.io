import React from 'react';
import Container from 'utils/Container';

const Imprint = () => {
  return (
    <Container>
      <div>
        <h1 className="py-6 text-base font-semibold uppercase">IMPRESSUM</h1>
        <p>
          Isabelle Ihl
          <br />
          Damaschkestr. 34
          <br />
          D- 10711 Berlin
          <br />
          +49 15733927022
          <br />
          info@ihl-architektur.de
        </p>

        <h2 className="pt-6">BERUFSBEZEICHNUNG</h2>

        <p>Architekt*in</p>

        <h2 className="pt-6">ARCHITEKTENKAMMER UND AUFSICHTBEHÖRDE</h2>

        <p>Isabelle Ihl ist Mitglied der Architektenkammer Berlin</p>

        <h2 className="pt-6">BERUFSRECHTLICHE REGELUNGEN</h2>

        <p>
          Abrufbar unter:{' '}
          <a href="https://www.ak-berlin.de/architektenkammer-berlin/regelwerke.html">
            https://www.ak-berlin.de/architektenkammer-berlin/regelwerke.html
          </a>
        </p>

        <ul>
          <li>Berliner Architekten- und Baukammergesetz (ABKG);</li>
          <li>Satzung der Architektenkammer Berlin;</li>
          <li>Berufsordnung der Architektenkammer Berlin;</li>
          <li>Eintragungsordnung der Architektenkammer Berlin;</li>
          <li>Berufsanerkennungsordnung der Architektenkammer Berlin;</li>
          <li>
            Fortbildungs- und Praktikumsordnung der Architektenkammer Berlin.
          </li>
        </ul>

        <h2 className="pt-6">VERBRAUCHERSCHLICHTUNGSSTELLE</h2>

        <p>
          Plattform der EU-Kommission zur Online-Streitbeilegung:
          <a href="https://ec.europa.eu/consumers/odr">
            https://ec.europa.eu/consumers/odr
          </a>
          . Wir sind zur Teilnahme an einem Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle weder verpflichtet noch bereit.
        </p>

        <h2 className="pt-6">URHEBERRECHT</h2>

        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
          diesen Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
          außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
          Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien
          dieser Seite sind nicht gestattet. Gegenteiliges ist ausdrücklich
          vermerkt. Soweit die Inhalte auf dieser Seite nicht von der
          Betreiberin erstellt wurden, werden die Urheberrechte Dritter
          beachtet. Insbesondere werden Inhalte Dritter als solche
          gekennzeichnet.
        </p>
      </div>
    </Container>
  );
};

export default Imprint;
