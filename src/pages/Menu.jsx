import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { DataList } from '../data/Data.jsx'

const MainMenu = () => {
  return (
    <>
      <Layout>
        <Box sx={{display: "flex", flexWrap: "wrap", justifyContent: "center"}}>
          {
              DataList.map(menu => (
                <Card key={menu.id} sx={{maxWidth: "390px", display:"flex", m: 2}}>
                  <CardActionArea>
                    <CardMedia sx={{minHeight: '400px'}}
                    component ={"img"}
                    src={menu.image}
                    alt={menu.name}
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom conponent={"div"}>{menu.name}</Typography>
                      <Typography variant='body'>
                        {menu.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
          }
        </Box>
      </Layout>
    </>
  )
}

export default MainMenu
