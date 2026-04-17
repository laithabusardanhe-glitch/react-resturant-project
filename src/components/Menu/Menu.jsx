import {Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material"
import App from "../../App"
function Menu() {
    return(

        <>
        <Container>
      <Typography variant="h1">Menu</Typography>
     <Grid container>
        <Grid size={4}>
            <Card>
                <CardMedia
                image=""
                 sx={{
                   display:"flex",
                 }}/>
                <CardContent>
                    <Typography variant="h3">menu1</Typography>
                    <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab doloribus culpa id non nam, aperiam ipsum quasi autem consequatur iusto illum at rerum accusantium, voluptatum veritatis a eaque soluta!</Typography>
                </CardContent>
            </Card>
             <Card>
                <CardMedia
                image=""
                />
                <CardContent>
                    <Typography variant="h3">menu1</Typography>
                    <Typography variant="body1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam ab doloribus culpa id non nam, aperiam ipsum quasi autem consequatur iusto illum at rerum accusantium, voluptatum veritatis a eaque soluta!</Typography>
                </CardContent>
            </Card>
        </Grid>
       </Grid>


        </Container>
        
        </>
    )
}
export default Menu ;