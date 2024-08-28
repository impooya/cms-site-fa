import ErorrMessage from "../components/ErorrMessage";

export default function Orders() {
  if ([].length === 0) {
    return <ErorrMessage />;
  }
  return <div>Orders</div>;
}
