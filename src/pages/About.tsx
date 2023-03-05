import { Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidenav from "../components/Sidenav"

export default function About() {
  return (
    <>
      <Navbar />
      <Box height={30} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <h1>About</h1>
        </Box>
      </Box>
    </>
  )
}