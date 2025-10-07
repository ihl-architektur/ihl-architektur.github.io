import React from 'react';
import Container from 'utils/Container';

const Vita = () => {
  return (
    <Container>
      <div className="flex flex-row">
        <div className="py-6 text-base font-semibold uppercase">VISION</div>
        <div className="py-6 pl-[100px]">
          <p>Architektur mit dem Ziel, Konzepte und Räume zu entwickeln, </p>
          <p>die Menschen zusammenbringen, ihren Austausch fördern und</p>
          <p>zu einer positiven sowie nachhaltigen Veränderung beitragen.</p>
        </div>
      </div>
      <div className="text-base font-semibold uppercase">VITA</div>
      <table>
        <tr>
          <th></th>
          <th className="pl-4 italic font-light text-left">Ausbildung</th>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>10|2016</div> <div>-</div> <div>02|2018</div>
          </td>
          <td className="pl-4">
            Master of Science (m. Auszeichnung), TU Darmstadt
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>09|2015</div> <div>-</div> <div>06|2016</div>
          </td>
          <td className="pl-4">Austauschstudium, EPFL Lausanne</td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>10|2011</div> <div>-</div> <div>07|2014</div>
          </td>
          <td className="pb-10 pl-4">Bachelor of Science, TU Darmstadt</td>
        </tr>
        <th></th>
        <th className="pl-4 italic font-light text-left">
          Beruflicher Werdegang
        </th>

        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>01|2024 -</div>
          </td>
          <td className="pl-4">Mitglied der Architektenkammer, Berlin</td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>11|2023 -</div>
          </td>
          <td className="pl-4">Selbstständigkeit</td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>07|2022</div> <div>-</div> <div>12|2023</div>
          </td>
          <td className="pl-4">
            Mitarbeiterin, Müller Reimann Architekten, Berlin
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>04|2019</div> <div>-</div> <div>04|2022</div>
          </td>
          <td className="pl-4">
            Mitarbeiterin, Heneghan peng architects, Berlin
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>04|2018</div> <div>-</div> <div>08|2018</div>
          </td>
          <td className="pl-4">
            Wiss. Mitarbeiterin, Entwerfen und Baukonstruktion, TU Darmstadt
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>06|2017</div> <div>-</div> <div>01|2018</div>
          </td>
          <td className="pl-4">
            Praktikantin, Waechter + Waechter Architekten, Darmstadt
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>06|2016</div> <div>-</div> <div>11|2016</div>
          </td>
          <td className="pl-4">
            Praktikantin, Dreier Frenzel Architekten, Lausanne
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>10|2014</div> <div>-</div> <div>08|2015</div>
          </td>
          <td className="pl-4">
            Tutorin, Entwerfen und Gebäudetechnologie, TU Darmstadt
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>10|2013</div> <div>-</div> <div>07|2014</div>
          </td>
          <td className="pb-10 pl-4">
            Tutorin, Entwerfen und Stadtentwicklung, TU Darmstadt
          </td>
        </tr>
        <tr>
          <th></th>
          <th className="pl-4 italic font-light text-left">
            Nebenberufliche Engagements
          </th>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>06|2025 -</div>
          </td>
          <td className="pl-4">
            Vertreterversammlung der Architektenkammer Berlin
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>04|2024 -</div>
          </td>
          <td className="pl-4">Architekturkollektiv &apos;Lattemit&apos;</td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>01|2024 -</div>
          </td>
          <td className="pl-4">
            Berliner Netzwerk für Stadt, Land und Architektur &apos;AfA&apos;
          </td>
        </tr>
        <tr>
          <td className="font-light flex flex-row justify-between min-w-[140px]">
            <div>02|2020</div> <div>-</div> <div>03|2020</div>
          </td>
          <td className="pl-4">
            Soziales Projekt &apos;Thusanang&apos;, Südafrika
          </td>
        </tr>
      </table>
    </Container>
  );
};

export default Vita;
