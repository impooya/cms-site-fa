import ErorrMessage from "../components/ErorrMessage";

export default function Users() {
  if ([].length === 0) {
    return <ErorrMessage />;
  }
  return <div>Users</div>;
}
