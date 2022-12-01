[IMPORT-REACT]
-- Antes era necessário, pois na hora de transpilação de um arquivo JSX o React
 era utilizado, mesmo não sendo explicito.
Ex:

```jsx
function App() {
  return <h1>Teste</h1>;
}
// Na hora de transpilar usava-se algo como React.creatElement("h1");

```


