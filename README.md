# GoogleScript
 Annual calendar automation
 -------------------
 NOT CONTINUED - OUTDATED

 Premade Google Spreadsheet with script that fills up the planned events to a designated Google calendar once run.

GOOGLE KALENTERIN LUONTI GOOGLE SPREADSHEETISTA
V0.40 BETA
_______________________________________________________________________________________

Kalenteritaulukon täyttöohjeet
---------------------------------

1. pakollinen
Seuraavaan tyhjään soluriviin A pystyriviin kirjoita kalenteritapahtuman otsikko.

2. pakollinen
B ja C pystyriviin aloitusaika sekä lopetusaika muodossa <pp.kk.vvvv hh.mm> 
(jos muotoilu tulee oikein painaessasi enteriä, solu muuttuu siniseksi, jos ei, tarkista muotoilu) 
Jos et laita kellonaikaa, ohjelma lisää automaattisesti (00.00.00 = keskiyö).

-------

3. valinnainen
Osallistujat sarakkeeseen lisää sähköpostit, joihin haluat kalenterikutsun lähettää ohjelman luodessa tapahtuman. 

4. valinnainen
Kuvaus on tapahtuman kuvaus-osioon tuleva teksti (linkit etäkokouksiin yms. lisätiedot).

5. valinnainen
Sijaintikohtaan tulee tapahtuman paikkatiedot, eli esimerkiksi kokoustilan numero.

-----

6. Automaattinen
Lisätty kalenteriin-soluun tulee "kyllä", kun ohjelma on suorittanut tapahtumien lisäyksen kalenteriin onnistuneesti.

7. Automaattinen
ID on tapahtuman tunnistenumero, joka yksilöittää tapahtuman, jolloin on mahdollista päivittää yksittäisiä tapahtumia tai lisätä uusia, vaikka ohjelma on ajettu jo aikaisemmin. ID muodostuu automaattisesti, kun lisäät tapahtuman.

8.
Kun taulukko on täytetty mieleisesti, klikkaa ylävalikosta "Kalenteri"-valikon alta "luo kalenteritapahtumat"-nappia, ja odota, kun ohjelma päivittää tapahtumat kalenteriin.


_____________________________________________________________________________________

Vikatilanteita
-------------

== Harmaalla täytetyt solut sisältävät dataa. Virheen ilmeentyessä tarkista, ettei sinulla ole yksittäisiä soluja, joissa on sisältöä. (harmaa väri paljastaa)
== Sinisellä pohjalla olevien päivämäärien muotoilu on oikein, harmaalla olevat eivät.
== Pakollisia soluja ovat otsikko ja päivämäärät, muut ovat valinnaisia.
== haluat muuttaa kalenterin tapahtumaa? Muuta tiedot ja poista sitten samalta riviltä "lisätty kalenteriin" sekä "eventId"-sarakkeiden arvot. Tällöin päivityksen yhteydessä ohjelma lisää uuden tapahtuman.



____________________________________________________________________________________
Suunniteltuja päivityksiä

- Kaikkien merkintöjen poisto kerralla mahdolliseksi
- aikaisempien kalenterimerkintöjen päivitys: ei luo uutta tapahtumaa vaan päivittää vanhan
- kalenterista tapahtumien tuominen taulukkoon
- tehokkaampi virheidenkäsittely

Googlen päivitysten takia rikkoutunut projekti - ei jatkokäyttöä toistaiseksi.


