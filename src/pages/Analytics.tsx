import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import Sidenav from '../components/Sidenav'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import GeoChart from '../charts/GeoChart'
import PieChart from '../charts/PieChart'
import HbarChart from '../charts/HbarChart'
import CountUp from 'react-countup'

export default function Analytics() {
  return (
    <>
      <div className='bgcolor'>
        <Navbar />
        <Box height={60} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={5}>
                <Stack spacing={2} direction='row'>
                  <Card sx={{ minWidth: 48 + '%', height: 110 }} className='gradient'>
                    <CardContent>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Visitors
                      </Typography>
                      <Typography gutterBottom variant='h5' component='div' sx={{ color: '#fff' }}>
                        <CountUp delay={0.2} end={22000} duration={0.3} />
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 48 + '%', height: 110 }} className='gradientlight'>
                    <CardContent>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Visitors
                      </Typography>
                      <Typography gutterBottom variant='h5' component='div' sx={{ color: '#fff' }}>
                        <CountUp delay={0.2} end={22000} duration={0.4} />
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
                <Box height={15} />
                <Stack spacing={2} direction='row'>
                  <Card sx={{ minWidth: 48 + '%', height: 110 }} className='gradient'>
                    <CardContent>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Visitors
                      </Typography>
                      <Typography gutterBottom variant='h5' component='div' sx={{ color: '#fff' }}>
                        <CountUp delay={0.2} end={22000} duration={0.5} />
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                  <Card sx={{ minWidth: 48 + '%', height: 110 }} className='gradientlight'>
                    <CardContent>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Visitors
                      </Typography>
                      <Typography gutterBottom variant='h5' component='div' sx={{ color: '#fff' }}>
                        <CountUp delay={0.2} end={22000} duration={0.6} />
                      </Typography>
                      <Typography gutterBottom variant='body2' component='div' sx={{ color: '#ccd1d1' }}>
                        Since last week
                      </Typography>
                    </CardContent>
                  </Card>
                </Stack>
              </Grid>
              <Grid item xs={7}>
                <Stack spacing={2}>
                  <Card sx={{ height: 235 }}>
                    <HbarChart />
                  </Card>
                </Stack>
              </Grid>
              <Box height={20} />
              <Grid item xs={8}>
                <Card sx={{ height: 220 }}>
                  <CardContent>
                    <GeoChart />
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={4}>
                <Card sx={{ height: 220 }}>
                  <CardContent>
                    <PieChart />
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