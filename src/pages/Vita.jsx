import React from 'react';
import Container from 'utils/Container';

const Vita = () => {
  return (
    <Container>
      <div>
      <!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lebenslauf</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
        }
        h1, h2 {
            color: #555;
            border-bottom: 2px solid #ccc;
            padding-bottom: 5px;
        }
        h2 {
            font-size: 1.2em;
        }
        section {
            margin-bottom: 20px;
        }
        .content {
            padding-left: 20px;
        }
        .entry {
            margin-bottom: 10px;
        }
        .date {
            font-weight: bold;
            color: #888;
            width: 150px;
            display: inline-block;
        }
    </style>
</head>
<body>

    <header>
        <h1>Lebenslauf</h1>
    </header>

    <section>
        <h2>Ausbildung</h2>
        <div class="content">
            <div class="entry">
                <span class="date">10/2016 - 02/2018</span>
                Master of Science (m. Auszeichnung), TU Darmstadt
            </div>
            <div class="entry">
                <span class="date">09/2015 - 06/2016</span>
                Austauschstudium, EPF Lausanne
            </div>
            <div class="entry">
                <span class="date">10/2011 - 07/2014</span>
                Bachelor of Science, TU Darmstadt
            </div>
        </div>
    </section>

    <section>
        <h2>Beruflicher Werdegang</h2>
        <div class="content">
            <div class="entry">
                <span class="date">01/2024 -</span>
                Mitglied der Architektenkammer, Berlin
            </div>
            <div class="entry">
                <span class="date">11/2023 -</span>
                Selbstständigkeit
            </div>
            <div class="entry">
                <span class="date">07/2022 - 12/2023</span>
                Mitarbeiterin, Müller Reimann Architekten, Berlin
            </div>
            <div class="entry">
                <span class="date">04/2019 - 04/2022</span>
                Mitarbeiterin, Heneghan peng architects, Berlin
            </div>
            <div class="entry">
                <span class="date">04/2018 - 08/2018</span>
                Wiss. Mitarbeiterin, Entwerfen und Baukonstruktion, TU DA
            </div>
            <div class="entry">
                <span class="date">06/2017 - 01/2018</span>
                Praktikantin, Waechter + Waechter Architekten, Darmstadt
            </div>
            <div class="entry">
                <span class="date">06/2016 - 11/2016</span>
                Praktikantin, Dreier Frenzel Architekten, Lausanne
            </div>
            <div class="entry">
                <span class="date">10/2014 - 08/2015</span>
                Tutorin, Entwerfen und Gebäudetechnologie, TU DA
            </div>
            <div class="entry">
                <span class="date">10/2013 - 07/2014</span>
                Tutorin, Entwerfen und Stadtentwicklung, TU DA
            </div>
        </div>
    </section>

    <section>
        <h2>Nebenberufliche Engagements</h2>
        <div class="content">
            <div class="entry">
                <span class="date">04/2024</span>
                Architekturkollektiv 'LaPemit'
            </div>
            <div class="entry">
                <span class="date">02/2020 - 03/2020</span>
                Soziales Projekt 'Thusanang', Südafrika
            </div>
        </div>
    </section>

</body>
</html>
        <p>das ist ein P</p>
      </div>
    </Container>
  );
};

export default Vita;
