import ErorrMessage from "../components/ErorrMessage";
export default function MainPage() {
  if ([].length === 0) {
    return <ErorrMessage />;
  }
  return (
    <>
      <div>MainPage</div>
    </>
  );
}
