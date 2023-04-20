import { data } from "./data/data.js";
import fs from "fs";
function criarObjeto(data) {
  const obj = {};
  data.forEach((arrP, iP) => {
    arrP.map((arrF, iF) => {
      obj[`id=${iP}&index=${iF}`] = arrF;
    });
  });
  return [obj];
}

const tx = criarObjeto(data);
fs.writeFileSync("./resultado/arquivo.json", JSON.stringify(tx), (err) => {
  if (err) throw err;
  console.log("O arquivo foi criado!");
});
