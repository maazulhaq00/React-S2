import { Container, Typography } from "@mui/material";

function Home() {
    return (
        <>
            <Container sx={{
                bgcolor: "grey", height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around"
            }}>
                <Typography variant="h2"
                    sx={{
                        bgcolor: "wheat",
                        ":hover": { bgcolor: "black", color: "white", p: 3 }
                    }}
                >Home</Typography>
                
                <Typography variant="h2" 
                    sx={{
                        bgcolor: "wheat",
                        ":hover": { bgcolor: "black", color: "white", p: 3 }
                    }}
               >Home</Typography>
                <Typography variant="h2" 
                    sx={{
                        bgcolor: "wheat",
                        ":hover": { bgcolor: "black", color: "white", p: 3 }
                    }}
               >Home</Typography>


            </Container>

        </>
    );
}

export default Home;