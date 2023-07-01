import { TableDemo } from "./components/ExampleSimpleTable";
import TaskPage from "./components/ExampleTable";
import { Separator } from "./components/ui/separator";

function App() {
  return (
    <div className="px-10 py-10">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome!</h2>
        <p className="text-muted-foreground">This is a complex table example</p>
      </div>
      <TaskPage />
      <Separator />
      <div className="mt-5 px-5">
        <p className="text-muted-foreground">This is a simple table example</p>
        <div className="mt-5 px-5 border-2 rounded-lg">
          <TableDemo />
        </div>
      </div>
    </div>
  );
}

export default App;
