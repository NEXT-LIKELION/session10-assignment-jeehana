import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    Box,
    Container,
} from "@mui/material";
import SignUpForm from "./components/SignUpForm";

function App() {
    return (
        <>
            {/* 상단 AppBar */}
            <AppBar position="static" color="default" elevation={1}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <span style={{ color: "#1976d2", fontWeight: 700 }}>
                            Sitemark
                        </span>
                    </Typography>
                    <Button color="primary" variant="outlined">
                        Sign in
                    </Button>
                </Toolbar>
            </AppBar>

            {/* 본문 */}
            <Box sx={{ bgcolor: "#f5faff", minHeight: "100vh", py: 5 }}>
                <Container maxWidth="sm">
                    <SignUpForm />
                </Container>
            </Box>
        </>
    );
}

export default App;
