import { AddOutlined } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormLabel, Paper, TextField } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from 'yup'

const AddDataObjectDialog = () => {
    const [open , setOpen]=React.useState(false)
    const handleOpen=()=>{
        setOpen(true)
    }
    const handleClose=()=>{
        setOpen(false)
    }
    const validationSchema=yup.object({
        name:yup.string().required("Name is required"),
        description:yup.string().required("Description is required")

    })
    const intialData = {
        name:"",
        description:""
    }
  return (
    <div>
    <Button startIcon={<AddOutlined/>} variant='contained'onClick={handleOpen} >Add Data Object</Button>
    <Dialog open={open} onClose={handleClose} fullWidth >
        <DialogTitle> Add Data Object </DialogTitle>
        <DialogContent sx={{
          p:2
        }}>
          <DialogContentText>
            Add Data Object here
          </DialogContentText>
                
                <Formik
                    initialValues={intialData}
                    validationSchema={validationSchema}
                    onSubmit={(values)=>{
                        console.log(values)
                        handleClose()
                    }}
                >{({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                })=>(
                    <Form>
                      <Box display={'flex'} flexDirection={'column'} gap={2} width={"100%"} component={Paper} >

                      <FormLabel>Name</FormLabel>
                        <Field  
                            as={TextField}
                            name="name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                            error={Boolean(errors.name && touched.name)}
                            helperText={touched.name && errors.name}
                            fullWidth
                            />
                        <FormLabel>Description</FormLabel>
                        <Field
                            as={TextField}
                            name="description"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.description}
                            error={Boolean(errors.description && touched.description)}
                            helperText={touched.description && errors.description}
                            fullWidth
                            />
                            </Box>
                       
                       <DialogActions sx={{
                        p:2,
                        gap:2
                       }}>


                        <Button type='button' variant='outlined'color='secondary' size='small'  onClick={handleClose}>Cancel</Button>
                        <Button type="submit" variant='contained' size='small'>Submit</Button>
                       </DialogActions>
                    </Form>
                )}
                </Formik>


        </DialogContent>

    </Dialog>
      
    </div>
  )
}

export default AddDataObjectDialog
