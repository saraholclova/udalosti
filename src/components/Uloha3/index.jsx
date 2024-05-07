import kvetinaUrl from './kvetina.svg';
import listUrl from './list.svg';
import slunceUrl from './slunce.svg';
import vlockaUrl from './vlocka.svg';

/*
Zadání: Doplňte komponentu tak, aby každé tlačítko po kliknutí vypsalo, jakou volbu uživatel
  vybral. Například pro poslední `console.log('Uživatel zvolil zimu')`.
*/

export const Uloha3 = () => {
  const jaro = () => {
    console.log('Vybráno jaro');
  };

  const leto = () => {
    console.log('Vybráno léto');
  };

  const podzim = () => {
    console.log('Vybrán podzim');
  };

  const zima = () => {
    console.log('Vybrána zima');
  };

  return (
    <>
      Které roční období je ve střední Evropě nejteplejší?
      <ol>
        <li>
          <button onClick={jaro}>
            <img src={kvetinaUrl} width={16} height={16} alt="květina" />
            jaro (březen až květen)
          </button>
        </li>
        <li>
          <button onClick={leto}>
            <img src={slunceUrl} width={16} height={16} alt="slunce" />
            léto (červen až srpen)
          </button>
        </li>
        <li>
          <button onClick={podzim}>
            <img src={listUrl} width={16} height={16} alt="list" />
            podzim (září až listopad)
          </button>
        </li>
        <li>
          <button onClick={zima}>
            <img src={vlockaUrl} width={16} height={16} alt="vločka" />
            zima (prosinec až únor)
          </button>
        </li>
      </ol>
    </>
  );
};
