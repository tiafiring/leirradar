import React from "react";
import { Leirsted } from "../../data/leirsted";

export const MineLeirstederPage = (): React.ReactElement => {
  const leirsted: Leirsted = {
    navn: "Mitt første leirsted",
    beskrivelse: "Flott sted ved vannet. Bålplass. Enkelt å komme se dit.",
    koordinater: "60.042793, 10.751506",
    egnetForTelt: true,
    egnetForHengekoye: true,
  };

  return (
    <div>
      <p className="text-sm text-slate-700 py-6">
        Her kommer det etterhvert informasjon om gode leirsteder.
      </p>
      <h5 className="mt-1 text-lg font-semibold">{leirsted.navn}</h5>
      <p>Beskrivelse: {leirsted.beskrivelse}</p>
      <p>Koordinater: {leirsted.koordinater}</p>
      <p>Egnet for telt: {leirsted.egnetForTelt ? "Ja" : "Nei"}</p>
      <p>Egnet for hengekøye: {leirsted.egnetForHengekoye ? "Ja" : "Nei"}</p>
    </div>
  );
};
