import { Button, Input } from "./components";

function App() {
  return (
    <div className="App">
      <Button>Fino</Button>

      <Input
        id='title'
        type='text'
        tabIndex={4}
        label='Título'
        placeholder='Pekkin'
        // register={formStatus.register}
        // inputErrors={subcategoryRules.title}
        // messageErrors={formStatus.formState.errors}
      />
    </div>
  );
}

export default App;
