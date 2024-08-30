import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Main } from './Pages/Main/Main';

const App = () => {
  return (
    <ChakraProvider>
      <Main/>
    </ChakraProvider>
  );
}

export default App;
