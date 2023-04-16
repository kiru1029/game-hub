import { Grid, GridItem, Show } from '@chakra-ui/react'
import { useState } from 'react'
import Navbar from './components/Navbar'

const App = () => {

  const [num, setNum] = useState(0)

  const handleClick = () => {
    const add = num + 1;
    console.log(add)
    setNum(add)
  }

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
