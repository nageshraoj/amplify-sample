import { AppBar, Toolbar, Tabs, Tab, Container } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  const useStyle = makeStyles((theme) => ({
    tabStyle: {
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '#D8B6A4',
        borderRadius: '10px',
      },
    },
  }))

  const tabstyle = useStyle()

  return (
    <>
      <Container>
        <AppBar>
          <Toolbar>
            <Tabs>
              <Tab
                className={tabstyle.tabStyle}
                label='Home'
                to='/'
                component={Link}
              />
              <Tab
                className={tabstyle.tabStyle}
                label='About'
                to='/About'
                component={Link}
              />
              <Tab
                className={tabstyle.tabStyle}
                label='Contact'
                to='/Contact'
                component={Link}
              />
            </Tabs>
            <Tabs sx={{ marginLeft: 'auto' }}>
              <Tab
                className={tabstyle.tabStyle}
                label='Login'
                to='/Login'
                component={Link}
              />
            </Tabs>
          </Toolbar>
        </AppBar>
        <div style={{ marginBottom: '80px' }} />
      </Container>
    </>
  )
}

export default HeaderComponent
