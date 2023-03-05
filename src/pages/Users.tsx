import { Box } from "@mui/material"
import Navbar from "../components/Navbar"
import Sidenav from "../components/Sidenav"

export default function Users() {
  return (
    <>
      <div className="bgcolor">
        <Navbar />
        <Box height={30} />
        <Box sx={{ display: 'flex' }}>
          <Sidenav />
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>Users</h1>
          </Box>
        </Box>
      </div>
    </>
  )
}