import { Grid, GridItem } from '@chakra-ui/react'

export function Layout(props) {
  return (
    <Grid
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'50px 1fr 30px'}
      gridTemplateColumns={'150px 1fr'}
      h="200px"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="green.300" area={'main'}>
        {props.children}
      </GridItem>
    </Grid>
  )
}
