import React from "react";
import Image from "next/image";

export default function hope() {
  return (
    <>
      <h2>Hope</h2>

      <Image
        src="/hope.jpeg"
        alt="Illustration of hope by Sampada gurung"
        width={500}
        height={500}
      />

      <p>Designed by Sampada Gurung</p>
    </>
  );
}
