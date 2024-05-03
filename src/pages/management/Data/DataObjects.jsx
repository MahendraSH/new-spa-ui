import AddDataObjectDialog from "@/components/Dashboard-components/data-comp/add-data-object-dialog";
import HeadingNav from "@/components/heading-nav";
import { AddOutlined, DeleteOutline, EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Typography,
  IconButton,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";

const DataObjects = () => {
  return (
    <Box>
      <HeadingNav
        navLinks={[
          { link: "/", label: "Dashboard" },
          { link: "/data-management", label: "Data Management" },
        ]}
      />
      <Box
        sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4">Data Objects</Typography>
        <AddDataObjectDialog />
      </Box>

      <Box
        sx={{
          height: "100%",
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            sm: "repeat(3, 1fr)",
            md: "repeat(4, 1fr), lg:repeat(4, 1fr) , xl:repeat(4, 1fr)",
          },
          pt: 2,
          gap: 2,
        }}
      >
        {/* Card */}

        <Card>
          <CardContent>
            <Box
              sx={{
                display: "flex",
                width: "100%",
                justifyContent: "between",
                alignItems: "center",
                gap: 3,
              }}
            >
              <Typography variant="h5">Role</Typography>
              <Badge
                badgeContent={10}
                color="primary"
                sx={{
                  ml: "auto",
                }}
              ></Badge>{" "}
            </Box>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "start",
              alignItems: "center",
            }}
          >
            <Button startIcon={<EditOutlined />} variant="text" size="small">
              Edit
            </Button>
            <Button> view</Button>
            <Link to={`/data-management/${"role"}`}>
              <Button
                startIcon={<AddOutlined />}
                variant="outlined"
                size="small"
              >
                {" "}
                add column
              </Button>
            </Link>
            <IconButton
              color="error"
              sx={{
                ml: "auto",
              }}
            >
              {" "}
              <DeleteOutline />{" "}
            </IconButton>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
        <Card>
          <CardContent>
            <Typography variant="h5">Data Object Name</Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure,
            ratione alias. Soluta alias nemo necessitatibus illum amet
          </CardContent>
          <Box>
            <Button>Edit</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DataObjects;
