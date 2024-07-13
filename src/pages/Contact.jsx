import React from 'react'
import Layout from '../components/layout/Layout'
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Paper } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MailIcon from '@mui/icons-material/Mail';
import CallIcon from '@mui/icons-material/Call';

const ContactPage = () => {
  return (
    <>
      <Layout >
        <Box sx={{my: 5, ml:10, "$ h4": { fontWeight: "bold", mb: 2, }, "@media(max-width: 600px)": {
          mx: 2,
        }}}>
          <Typography variant="h4">Contact my Food </Typography>
          <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum veritatis esse? Placeat quam reprehenderit atque officia dicta eius, blanditiis fugit? Animi culpa pariatur temporibus soluta a quod reiciendis sequi.
            </p>
        </Box>
        <Box sx={{m: 3, width: "600px", ml:10, "@media (max-width: 600px)": {maxWidth: "300px", margin: "0 auto 40px",}}}>
          <TableContainer component={Paper}> 
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor: "black", color: "white"}}
                  align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{ color:"red", pt: 1 }}/> 12345989 (tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <MailIcon sx={{ color:"red", pt: 1 }}/> help@myfood.com
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{ color:"red", pt: 1 }}/> +91-1234567890
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Layout>
    </>
  )
}

export default ContactPage
