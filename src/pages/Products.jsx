import ErorrMessage from "../components/ErorrMessage";

export default function Products() {
  if ([].length === 0) {
    return <ErorrMessage />;
  }
  return <div>Products</div>;
}
