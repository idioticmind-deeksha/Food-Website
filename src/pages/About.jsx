import { Box, Typography } from "@mui/material";
import Layout from "../components/layout/Layout";

const AboutPage = () => {
    return (
        <>
        <Layout >
            <Box sx={{
                my: 15, textAlign:"center", p: 2,
                "& h4" : {
                    fontWeight: "bold",
                    my: 2,
                    fontSize:"2.5rem"
                } ,
                "& p": {
                    textAlign: "justify",
                    pb: 2,
                },
                "@media(max-width: 600px)":{
                    mt: 0,
                    "& h4": {
                        fontSize: "1.5rem",
                    },
                }
            }}>
                <Typography variant="h4">
                    Welcome to my Food Website
                </Typography>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse, non sapiente, quas culpa laboriosam corrupti soluta totam at ad, optio obcaecati cumque rerum? Delectus recusandae optio itaque iste mollitia quidem quia beatae sed nobis ad iusto ratione doloremque iure, laborum repudiandae vitae totam. Dolorem odio ipsa sed adipisci, porro quae a. Deserunt atque quidem blanditiis numquam sunt? Deserunt similique eaque in quam consequatur doloribus, praesentium eligendi voluptates, fugit at doloremque, porro optio tempore aliquam soluta recusandae officiis. Fugiat perspiciatis, enim possimus quam architecto pariatur consectetur rerum nam nihil totam suscipit beatae similique earum quas repudiandae veniam distinctio delectus sed.
                </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque accusantium possimus accusamus provident aliquam, dicta quisquam odit. Eaque quam molestiae iusto provident esse! Quibusdam natus, numquam ea ut consectetur non beatae est nemo nulla molestiae dolores quia nisi magnam nam vero deleniti labore odio consequatur. Saepe veritatis cum optio. Eligendi quis non asperiores tempore recusandae nobis quibusdam tempora aliquam eos aspernatur molestias modi dolore quam unde est, magni dicta harum nostrum molestiae deleniti similique quae odit reiciendis repudiandae! A harum praesentium, nisi, facere illum incidunt inventore quis ipsam minima dignissimos numquam? Alias aperiam ab quisquam iste incidunt itaque debitis reprehenderit?</p>
            </Box>
        </Layout>
        </>
    );
}
export default AboutPage;