import { AppBar, Toolbar, Tabs, Tab, Container } from '@mui/material'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <>
      <Container>
        <AppBar>
          <Toolbar>
            <Tabs>
              <Tab label='Home' to='/' component={Link} />
              <Tab label='About' to='/About' component={Link} />
              <Tab label='Contact' to='/Contact' component={Link} />
            </Tabs>
            <Tabs sx={{ marginLeft: 'auto' }}>
              <Tab label='Contact' to='/Login' component={Link} />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div style={{ marginBottom: '80px' }} />
      </Container>
    </>
  )
}

export default HeaderComponent
