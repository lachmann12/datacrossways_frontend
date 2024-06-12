import { Container, Grid, Typography } from "@mui/material";

const HEADER_NAME = "Roles";
const HEADER_DESCRIPTION = "Search and create roles.";

export const MainRolesHeader = ({ user }) => {
  return (
    <Container>
      <Grid
        container
        sx={{ justifyContent: "flex-start", alignItems: "center" }}
      >
        <Grid item>
          <Typography
            variant="subtitle1"
            sx={{ textAlign: "left", margin: "24px auto 8px auto" }}
          >
            {HEADER_NAME}
          </Typography>
        </Grid>
      </Grid>

      <Typography variant="body4" sx={{ margin: "0px auto" }}>
        {HEADER_DESCRIPTION}
      </Typography>
    </Container>
  );
};
