import HeadingNav from '@/components/heading-nav'
import { AddOutlined, DeleteOutline } from '@mui/icons-material'
import { Box, Button, Card, CardActionArea, CardContent, IconButton, Typography } from '@mui/material'

const DataObjects = () => {
  return (
    <Box>

        <HeadingNav navLinks={[
                  { link: "/", label: "Dashboard" },
                  { link: "/data-management", label: "Data Management" },
        ]}/>
        <Box sx={{
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",

        }}>

    <Typography variant="h4">Data Objects</Typography>
    <Button startIcon={<AddOutlined/>} variant='contained'>Add Data Object</Button>
        </Box>

    <Box sx={{
        height: '100%',
        width: '100%',
        display:"grid",
        gridTemplateColumns:{ xs:"repeat(1, 1fr)", sm:"repeat(3, 1fr)", md:"repeat(3, 1fr), lg:repeat(4, 1fr) , xl:repeat(4, 1fr)"},
        pt: 2,
        gap: 2
    }}>

      {/* Card */}

      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea sx={{
          display: "flex",
          width: "100%",
          justifyContent: "start",
          alignItems: "center"
        }}>
        <Button>Edit</Button>
        <Button > view</Button>
        <IconButton color="error" sx={{
          ml: "auto"
        }} > <DeleteOutline/>  </IconButton>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>
      <Card>
        <CardContent>
        <Typography variant="h5">Data Object Name</Typography>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure, ratione alias. Soluta alias nemo necessitatibus illum amet
        </CardContent>
        <CardActionArea>
        <Button>Edit</Button>
        </CardActionArea>
      </Card>


    </Box>
        </Box>
  )
}

export default DataObjects
