import React from "react";

// AWS
import { DataStore } from "@aws-amplify/datastore";
import { Merch } from "../../models";

// --------------------------------------------------------------
export default function MerchComp() {
  const getMerch = async function () {
    const merchData = await DataStore.query(Merch);

    console.log(merchData[0]);
  };

  return <button onClick={getMerch}>Get Merch</button>;
}
