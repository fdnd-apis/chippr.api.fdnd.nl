-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Gegenereerd op: 18 mrt 2022 om 13:28
-- Serverversie: 5.7.34
-- PHP-versie: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chippr-api`
--

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `projects_id` int(11) NOT NULL,
  `image_url` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Tabelstructuur voor tabel `projects`
--

CREATE TABLE `projects` (
  `id` int(10) NOT NULL,
  `name` text NOT NULL,
  `short_description` text NOT NULL,
  `description` text NOT NULL,
  `logo` varchar(255) NOT NULL,
  `link` text NOT NULL,
  `main_img` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Gegevens worden geëxporteerd voor tabel `projects`
--

INSERT INTO `projects` (`id`, `name`, `short_description`, `description`, `logo`, `link`, `main_img`) VALUES
(1, 'Beyco', 'Beyco brengt koffie koper en verkopers samen en maakt de keten inzichtelijk.', 'Progreso zet zich al meer dan twintig jaar in om kleine boeren huishoudens te ondersteunen bij het produceren en verkopen van kwaliteitskoffie en cacao om hun levensonderhoud te verbeteren. Progreso gelooft dat dit beste gedaan kan worden door duurzame samenwerkingen op te zetten met lokale producentenorganisaties. Ze helpt deze organisaties verder te professionaliseren zodat ze beter in staat zijn deze kleine boeren huishoudens te kunnen ondersteunen.\r\n\r\nProgreso professionaliseert de toegang tot markten via Beyco (‘Beyond coffee and cocoa’), een wereldwijd koffie handelsplatform. Het platform faciliteert de koffie en cacaohandel en genereert automatisch een track record voor zowel de producentenorganisaties, kopers als traders.\r\n', 'https://raw.githubusercontent.com/boudewijnbout/keep-users-in-control-chippr.dev/main/assets/images/beyco-logo.svg', 'http://www.beyco.nl', 'https://avatars.githubusercontent.com/u/45170095?v=4'),
(2, 'FullCharge', 'FullCharge helpt mensen en bedrijven om te werken aan dagelijkse groei door het inbouwen van simpele en leuke routines.', 'FullCharge werkt samen met gedragscoaches, ondernemers en neurowetenschappers om haar gebruikers met 14 daagse challenges stap voor stap te helpen bij het creëren van routines. Deze routines zorgen ervoor dat de gebruikers van FullCharge het beste in zichzelf naar boven halen en genieten van elke dag. Zij krijgen hierbij hulp van een online coach, die via de FullCharge App mensen begeleidt en motiveert. Deelnemers voeren dagelijks een challenge uit, waarbij gebruik wordt gemaakt van de 1% regel. Door dagelijks 1% verbetering aan te brengen, wordt het brein getraind en wordt het deel van een routine. Dit is een beproefde methode die door meer dan honderd wetenschappelijke studies is aangetoond als de beste verandertool.\r\n', 'https://github.com/boudewijnbout/keep-users-in-control-chippr.dev/blob/bf65f1582922ffb4a04f1e140f0e51c5e4807660/assets/images/fullcharge-logo.png', 'https://www.fullcharge.nl', '0'),
(3, 'Orbisk', 'Orbisk helpt professionele keukens grip te krijgen op hun voedselverspilling\r\n', 'Als consument zijn wij uit het oog verloren hoe raar het is om een kip op te laten groeien, naar de slacht te brengen, te bakken en daarna linea recta de prullenbak in te gooien. Voor consumenten is dit al een uitdaging, maar het speelt op een nog veel grotere schaal bij restaurants. Voor koks is het vrij onvoorspelbaar wat gasten gaan bestellen. Ze hebben dus standaard meer in huis dan ze gaan verkopen. En dus gaat er ook meer de prullenbak in. Onze partner, Orbisk, bedacht daar een oplossing voor. \r\n\r\nOrbisk helpt professionele keukens met hun Orbi’s om grip te krijgen op hun voedselverspilling. De Orbi meet en herkent met behulp van image recognition wat voor voedsel er wordt weggegooid, in welke hoeveelheid en op welk tijdstip van de dag. Deze data wordt inzichtelijk gemaakt in het dashboard. Met de inzichten uit het dashboard kunnen restaurants hun voedselverspilling terugbrengen. \r\n\r\nVanuit de samenwerking met studenten van de Hogeschool Utrecht hebben wij Orbisk kunnen helpen met het ontwikkelen van een eerste versie, ofwel een proof of concept, van het dashboard.  Dit is het begin geweest van een mooie samenwerking om met de gebruikers van Orbisk de strijd aan te gaan tegen voedselverspilling.\r\n', 'https://raw.githubusercontent.com/boudewijnbout/keep-users-in-control-chippr.dev/main/assets/images/orbisk-logo.svg', 'https://www.orbisk.com', '0');

--
-- Indexen voor geëxporteerde tabellen
--

--
-- Indexen voor tabel `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_projects_id` (`projects_id`);

--
-- Indexen voor tabel `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT voor geëxporteerde tabellen
--

--
-- AUTO_INCREMENT voor een tabel `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT voor een tabel `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- Beperkingen voor geëxporteerde tabellen
--

--
-- Beperkingen voor tabel `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `fk_projects_id` FOREIGN KEY (`projects_id`) REFERENCES `projects` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
