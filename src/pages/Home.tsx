import { Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidenav from "../components/Sidenav"
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
// import CardMedia from '@mui/material/CardMedia'
// import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import '../Dash.css'
import StorefrontIcon from '@mui/icons-material/Storefront'
import CreditCardIcon from '@mui/icons-material/CreditCard'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from "../components/AccordionDash"

export default function Home() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={70} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Stack spacing={2} direction='row'>
                  <Card sx={{ minWidth: 49 + '%', height: 150 }} className='gradient'>
                    <CardContent>
                      <div className="iconstyle"><CreditCardIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                        $500.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                        Total Earnings
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 49 + '%', height: 150 }} className='gradientlight'>
                    <CardContent>
                      <div className="iconstyle"><ShoppingBagIcon /></div>
                      <Typography gutterBottom variant="h5" component="div" sx={{ color: '#fff' }}>
                        $900.00
                      </Typography>
                      <Typography gutterBottom variant="body2" component="div" sx={{ color: '#ccd1d1' }}>
                        Total Orders
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={4}>
                <Stack spacing={2}>
                  <Card className='gradientlight'>
                    <Stack spacing={2} direction='row'>
                      <div className="iconstyle">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className='pricetitle'>$203K</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                  <Card>
                    <Stack spacing={2} direction='row'>
                      <div className="iconstyleblack">
                        <StorefrontIcon />
                      </div>
                      <div className="paddingall">
                        <span className='pricetitle'>$203K</span>
                        <br />
                        <span className='pricesubtitle'>Total Income</span>
                      </div>
                    </Stack>
                  </Card>
                </Stack>
              </Grid>
            </Grid>
            <Box height={20} />
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Card sx={{ height: 50 + 'vh' }}>
                  <CardContent></CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 50 + 'vh' }}>
                  <CardContent>
                    <div className="paddingall">
                      <span className='pricetitle'>Popular Products</span>
                    </div>
                    <AccordionDash />
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </div>
    </>
  )
}