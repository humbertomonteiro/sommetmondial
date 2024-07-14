import logo from "../imgs/logo/logoWhite.jpg";

export const arrayPatrocinadores = [
  {
    name: "Default",
    img: logo,
  },
];

const numberOfPatrocinadores = () => {
  for (let i = 1; i < 16; i++) {
    arrayPatrocinadores.push({
      name: "Default",
      img: logo,
    });
  }

  return arrayPatrocinadores;
};

numberOfPatrocinadores();
