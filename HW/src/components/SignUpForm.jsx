import React from "react";
import {
    Box,
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    Link,
    TextField,
    Typography,
} from "@mui/material";

function SignUpForm() {
    return (
        <Box
            sx={{
                bgcolor: "white",
                borderRadius: 2,
                boxShadow: 3,
                p: 4,
            }}
        >
            <Typography variant="h5" component="h1" gutterBottom>
                Sign up
            </Typography>

            <TextField
                fullWidth
                margin="normal"
                label="Full name"
                defaultValue="Jon Snow"
            />
            <TextField
                fullWidth
                margin="normal"
                label="Email"
                type="email"
                placeholder="your@email.com"
            />
            <TextField
                fullWidth
                margin="normal"
                label="Password"
                type="password"
            />

            <FormControlLabel
                control={<Checkbox />}
                label="I want to receive updates via email."
            />

            <Button
                fullWidth
                variant="contained"
                sx={{
                    mt: 2,
                    mb: 2,
                    background: "linear-gradient(to right, #000000, #3c3c3c)",
                }}
            >
                Sign up
            </Button>

            <Divider>or</Divider>

            <Button
                fullWidth
                variant="outlined"
                startIcon={
                    <img
                        src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                        alt="Google"
                        width="20"
                        height="20"
                    />
                }
                sx={{ mt: 2 }}
            >
                Sign up with Google
            </Button>

            <Button
                fullWidth
                variant="outlined"
                startIcon={
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                        alt="Facebook"
                        width="20"
                    />
                }
                sx={{ mt: 2 }}
            >
                Sign up with Facebook
            </Button>

            <Typography variant="body2" align="center" sx={{ mt: 3 }}>
                Already have an account?{" "}
                <Link href="#" underline="hover">
                    Sign in
                </Link>
            </Typography>
        </Box>
    );
}

export default SignUpForm;
