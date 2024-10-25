import React from 'react';
import Container from 'utils/Container';

const Vita = () => {
  return (
    <Container>
      <div>
        LEBENSLAUF
        <section>
            <h2 style={{ color: '#555', borderBottom: '2px solid #ccc', paddingBottom: '5px', fontSize: '1.2em' }}>Ausbildung</h2>
            <div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        10/2016<br />02/2018
                    </span>
                    Master of Science (m. Auszeichnung), TU Darmstadt
                </div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        09/2015<br />06/2016
                    </span>
                    Austauschstudium, EPF Lausanne
                </div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        10/2011<br />07/2014
                    </span>
                    Bachelor of Science, TU Darmstadt
                </div>
            </div>
        </section>

        <section>
            <h2 style={{ color: '#555', borderBottom: '2px solid #ccc', paddingBottom: '5px', fontSize: '1.2em' }}>Beruflicher Werdegang</h2>
            <div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        01/2024<br />
                    </span>
                    Mitglied der Architektenkammer, Berlin
                </div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        11/2023<br />
                    </span>
                    Selbstständigkeit
                </div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        07/2022<br />12/2023
                    </span>
                    Mitarbeiterin, Müller Reimann Architekten, Berlin
                </div>
                <!-- Weitere Einträge folgen im gleichen Format -->
            </div>
        </section>

        <section>
            <h2 style={{ color: '#555', borderBottom: '2px solid #ccc', paddingBottom: '5px', fontSize: '1.2em' }}>Nebenberufliche Engagements</h2>
            <div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        04/2024
                    </span>
                    Architekturkollektiv &apos;LaPemit&apos;
                </div>
                <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start' }}>
                    <span style={{ fontWeight: 'bold', color: '#888', width: '80px', display: 'inline-block' }}>
                        02/2020<br />03/2020
                    </span>
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
