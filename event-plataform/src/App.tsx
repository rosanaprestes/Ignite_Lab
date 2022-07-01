
import { Event } from "./pages/Event"
import { Router } from "./Router"
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";


function App() {


  return (

    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>


  // <h1 className="text-5xl font-bold text-violet-500">Ola Mundo Rosana aquiii</h1> 
        
  )
}

export default App
