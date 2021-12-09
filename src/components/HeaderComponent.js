import { AppBar, Toolbar, Tabs, Tab, Container } from '@mui/material'
import { createStyles } from '@mui/styles'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  const useStyle = createStyles({
    tabStyle: {
      borderRadius: '10px',
      '&:hover': {
        backgroundColor: '$F0BB62',
      },
    },
  })

  const style = useStyle()

  return (
    <>
      <Container>
        <AppBar>
          <Toolbar>
            <Tabs>
              <Tab
                className={style.tabStyle}
                label='Home'
                to='/'
                component={Link}
              />
              <Tab
                className={style.tabStyle}
                label='About'
                to='/About'
                component={Link}
              />
              <Tab
                className={style.tabStyle}
                label='Contact'
                to='/Contact'
                component={Link}
              />
            </Tabs>
            <Tabs sx={{ marginLeft: 'auto' }}>
              <Tab
                className={style.tabStyle}
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
