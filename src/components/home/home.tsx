import { Footer, Navbar } from "../../shared";
// import { Editor, OutputWindow, Tooltip } from ".";

export default function HomeComponent() {
  return (
    <>
      <Navbar />
      {/* {showTooltip && <Tooltip setShowTooltip={setShowTooltip} />} */}
      {/* <Editor getQueryTable={setQueryTableName} /> */}
      {/* <OutputWindow queriedTable={queryTableName} /> */}
      <Footer />
    </>
  );
}
