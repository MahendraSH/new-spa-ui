import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
const DashCard = ({ items }) => {
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "grid",
        gridTemplateColumns:{ xs:"repeat(1, 1fr)", sm:"repeat(3, 1fr)", md:"repeat(3, 1fr), lg:repeat(4, 1fr) , xl:repeat(4, 1fr)"},

          gap: 2,
        }}
      >
        {items.map((item) => (
          
            <Card  key={item.label}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.grey"
                  fontWeight={600}
                  gutterBottom
                >
                  {item.label}
                </Typography>
                <Typography variant="h6" component="div">
                  Lorem ipsum dolor sit amet, qui minim labore .
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.grey">
                  adjective
                </Typography>
                <Typography variant="body1">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>
            </Card>
        ))}
      </Box>
    </Box>
  );
};
DashCard.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DashCard;
