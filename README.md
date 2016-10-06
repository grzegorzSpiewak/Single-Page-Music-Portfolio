# Sass &ndash; zadania

## Zadanie 1. Tworzenie projektu
* Dodaj w pliku **index.html** nagłówek **h1** z tekstem, np.  „Hello, Sassy!” i otwórz go w przeglądarce.
* Utwórz katalog o nazwie **scss**, a w nim plik &ndash; **style.scss**. W pliku określ kolor nagłówka oraz kolor tła całej strony. Najlepiej tak, aby nagłówek był czytelny.
* W pliku **index.html** wczytaj wygenerowany arkusz styli (z odpowiednim rozszerzeniem).
* Skompiluj plik Sassa w znany Ci sposób (np. za pomocą Gulpa).
* Sprawdź, czy wygenerował się odpowiedni katalog z plikiem **css**.
* Odśwież stronę w przeglądarce.
* Zmień kolor nagłówka w pliku **scss** i ponownie odśwież stronę.


## Zadanie 2. Nadpisywanie zmian
Bezpośrednio w wygenerowanym pliku **css** zmień kolor nagłówka i wprowadź dodatkową właściwość, np. margines. Sprawdź zmiany w przeglądarce. Przejdź do pliku **scss** i wprowadź dowolną zmianę inną od tej wprowadzonej w pliku **css**, np. padding. Zapisz plik i sprawdź rezultat zarówno w wynikowym pliku **css**, jak i w przeglądarce. Co się zmieniło?

Odp: Zmiany wprowadzone w pliku scss mają nadrzędne znaczenie i podmieniają wszystkie pliku css.

## Zadanie 3. Formatowanie styli wyjściowych
Przetestuj różne opcje formatowania styli wyjściowych (nested, expanded, compact, compressed). Który Ci najbardziej odpowiada?

## Zadanie 4. Mapy kodu źródłowego
Wygeneruj sourcemaps dla Twojego pliku **scss** i przetestuj jej działanie w przeglądarce.

## Zadanie 5. Komentarze
Dodaj oba rodzaje komentarzy do pliku **scss** i sprawdź, które są kompilowane do CSS, a które nie.

// nie będzie
/* bedzie */
//

## Zadanie 6. Zmienne
* Zdefiniuj dwie zmienne przechowujące główne kolory strony.
* W pliku **index.html** jest zdefiniowana lista **ul** o **klasie** ```menu```. Zmień kolor jej tekstu na jeden ze zdefiniowanych kolorów głównych. Ten sam kolor ustaw dla nagłówka.
* Dodaj kolejną zmienną, w której zdefiniujesz padding górny i dolny. Ustaw padding dla elementów **section**.

## Zadanie 7. Zagnieżdżanie
* Ostyluj elementy listy o **klasie** ```menu``` w taki sposób, aby były obok siebie, ustaw im lewy padding na **10px**. Całej liście ustaw tło. Wybierz kolor ze zmiennych, które zdefiniowałeś.
* Ustaw border dla elementu **header**. Skorzystaj z kolorów, które zdefiniowałeś.
* Ostyluj element **main-width**. Szerokość strony ustaw na **1000px** i wstaw do zmiennej.

Pamiętaj o rozsądnym zagnieżdżaniu.

## Zadanie 8. Selektor rodzica &
Stwórz w jednej z sekcji listę z linkami do swoich trzech ulubionych stron. Spraw, aby:
* po najechaniu na linki zmieniał się ich kolor na czerwony,
* dla pierwszego elementu listy ustaw kolor pomarańczowy,
* dla ostatniego elementu listy ustaw kolor zielony.

## Zadanie 9. Selektor rodzica & &ndash; jeszcze raz
Oscyluj listę z nawigacją, która znajduje się w stopce. Jej elementy mają wyświetlać się obok siebie i być wyrównane do lewej.
Po najechaniu kursorem na element listy powinien zmienić się jej kolor lub tło. Spraw też, aby ostatni element był wyrównany do prawej.

## Zadanie 10. Schemat prezentacji
Zorganizuj pliki Sass według schematu prezentacji. Jeśli nie potrzebujesz któregoś z plików bądź katalogów &ndash; nie twórz go. Przeglądarka powinna wysłać tylko jedno zapytanie do serwera dotyczące plików CSS.

## Zadanie 11. Mixiny
Zastosuj mixiny do zastąpienia prefiksów przeglądarek.
Dodaj do elementów listy zaokrąglone obramowanie, użyj vendor prefixes (-webkit, -moz). Napisz i wykorzystaj do tego mixin z argumentem, którym będzie wielkość zaokrąglenia. Pamiętaj o odpowiednim zagnieżdżeniu elementów.
Sprawdź, czy **border-radius** potrzebuje jeszcze prefixów [Can I use / border-radius](http://caniuse.com/#search=border-radius).

## Zadanie 12. Dziedziczenie
W prezentacji rozmawialiśmy o problemach związanych z extend. Omawialiśmy następujące problemy:
* z niezamierzonymi stylami, każda **klasa** ```error``` była podkreślana i zmieniała kolor przy najeżdżaniu kursorem,
* z niezamierzonymi i zbędnymi selektorami.
Spróbuj naprawić oba te problemy.

## Zadanie 13. Placeholder
Stwórz w jednej z sekcji trzy boksy reprezentujące: success, error i info.

![Placeholder](images/placeholder.jpg)

Ostyluj je za pomocą Sass. Spróbuj wykorzystać w tym zadaniu **placeholder**, aby nie generować dodatkowej reguły w CSS. Niech Twój kod HTML wygląda w następująco:

```HTML
  <div class="success">success</div>

	<div class="error">error</div>

	<div class="info">info</div>
```

## Zadanie 14. Interpolacja i logika
Wstaw na stronie kilka nagłówków, np. od **h1** do **h4**. Zapisz za pomocą zmiennej wysokość linii i podstawowy rozmiar tekstu, a następnie zastosuj te style dla całego dokumentu.

Ostyluj nagłówki w taki sposób, aby na podstawie zdefiniowanego rozmiaru tekstu zmieniała się ich wielkość. Wykorzystaj pętle i interpolację.
Użyj funkcji do obliczania rozmiaru nagłówka z mnożnikiem 1,3, pamiętaj o ich hierarchii (**h1** powinien być największy).

Ustaw kolory nagłówków tak, by każdy kolejny był jaśniejszy od poprzedniego o **15%**.

## Zadanie 15. Interpolacja i logika
Za pomocą pętli określ kolor obramowania dla dziesięciu kontenerów. Niech kolor będzie pomarańczowy dla parzystych kontenerów, a niebieski dla nieparzystych.
Określ im **klasy** od ```block_1``` do ```block_10```. Wykorzystaj pętlę.

## Zadanie 16. Mapy
Stwórz mapę z pięcioma wybranymi kolorami. Wykorzystaj ją do ustawienia koloru tła dla zadania z okienkami (success, error, info).
