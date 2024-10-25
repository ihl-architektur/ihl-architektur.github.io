import React from 'react';
import Container from 'utils/Container';

const Vita = () => {
  return (
    <Container>
      <div>
        LEBENSLAUF
        <section>
          <h2
            style={{
              color: '#555',
              borderBottom: '2px solid #ccc',
              paddingBottom: '5px',
              fontSize: '1.2em',
            }}
          >
            Ausbildung
          </h2>
          <div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>10/2016</span>
                <span style={{ display: 'block' }}>-</span>
                <span style={{ display: 'block' }}>02/2018</span>
              </span>
              Master of Science (m. Auszeichnung), TU Darmstadt
            </div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>09/2015</span>
                <span style={{ display: 'block' }}>-</span>
                <span style={{ display: 'block' }}>06/2016</span>
              </span>
              Austauschstudium, EPF Lausanne
            </div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>10/2011</span>
                <span style={{ display: 'block' }}>-</span>
                <span style={{ display: 'block' }}>07/2014</span>
              </span>
              Bachelor of Science, TU Darmstadt
            </div>
          </div>
        </section>
        <section>
          <h2
            style={{
              color: '#555',
              borderBottom: '2px solid #ccc',
              paddingBottom: '5px',
              fontSize: '1.2em',
            }}
          >
            Beruflicher Werdegang
          </h2>
          <div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>01/2024</span>
              </span>
              Mitglied der Architektenkammer, Berlin
            </div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>11/2023</span>
              </span>
              Selbstständigkeit
            </div>
            <div
              style={{
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{
                  fontWeight: 'bold',
                  color: '#888',
                  width: '80px',
                  textAlign: 'center',
                }}
              >
                <span style={{ display: 'block' }}>07/2022</span>
                <span style={{ display: 'block' }}>-</span>
                <span style={{ display: 'block' }}>12/2023</span>
              </span>
              Mitarbeiterin, Müller Reimann Architekten, Berlin
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                04/2019 - 04/2022
              </span>{' '}
              Mitarbeiterin, Heneghan peng architects, Berlin
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                04/2018 - 08/2018
              </span>{' '}
              Wiss. Mitarbeiterin, Entwerfen und Baukonstruktion, TU DA
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                06/2017 - 01/2018
              </span>{' '}
              Praktikantin, Waechter + Waechter Architekten, Darmstadt
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                06/2016 - 11/2016
              </span>{' '}
              Praktikantin, Dreier Frenzel Architekten, Lausanne
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                10/2014 - 08/2015
              </span>{' '}
              Tutorin, Entwerfen und Gebäudetechnologie, TU DA
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                10/2013 - 07/2014
              </span>{' '}
              Tutorin, Entwerfen und Stadtentwicklung, TU DA
            </div>
          </div>
        </section>
        <section>
          <h2
            style={{
              color: '#555',
              borderBottom: '2px solid #ccc',
              paddingBottom: '5px',
              fontSize: '1.2em',
            }}
          >
            Nebenberufliche Engagements
          </h2>
          <div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>04/2024</span>{' '}
              Architekturkollektiv &apos;LaPemit&apos;
            </div>
            <div style={{ marginBottom: '10px' }}>
              <span style={{ fontWeight: 'bold', color: '#888' }}>
                02/2020 - 03/2020
              </span>{' '}
              Soziales Projekt &apos;Thusanang&apos;, Südafrika
            </div>
          </div>
        </section>
        <p>das ist ein P</p>
      </div>
    </Container>
  );
};

export default Vita;
