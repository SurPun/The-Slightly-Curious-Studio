// Import Components
import NavBar from "../components/NavBar";
import MerchComp from "../components/MerchComp";

// --------------------------------------------------------------
export default function Home() {
  return (
    <>
      <h1>The Slightly Curious</h1>

      <NavBar />

      {/* Merch Comp */}
      <MerchComp />
    </>
  );
}
