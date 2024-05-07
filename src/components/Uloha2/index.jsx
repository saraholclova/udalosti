import hradUrl from './hrad.svg';

/*
Zadání: Po najetí myši, `onMouseEnter` na obrázek zobrazte alert s textem „Na hradě je myš!“
*/

export const Uloha2 = () => {
  const najetiMysi = () => {
    alert('Na hradě je myš!');
  };

  return (
    <img
      onMouseEnter={najetiMysi}
      src={hradUrl}
      width={60}
      height={60}
      alt="hrad"
    />
  );
};
