import RegisterForm from "@/components/auth-forms/RegisterForm";
import { Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
          <Typography variant="h3">Sign Up</Typography>
          <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: "none" }} color="primary">
            Already have an account?
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
};

export default RegisterPage;
