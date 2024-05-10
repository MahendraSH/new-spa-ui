import { useUpdateAdminObjectMutation } from "@/app/features/admin-apis/admin-object-api-slice";
import { EditOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormLabel,
  IconButton,
  Paper,
  TextareaAutosize,
  TextField,
  Tooltip,
} from "@mui/material";
import { Field, Form, Formik } from "formik";

import PropTypes from "prop-types";
import React from "react";
import toast from "react-hot-toast";
import * as yup from "yup";

const EditDataObjectDialog = ({ initialData }) => {
  const [open, setOpen] = React.useState(false);
  const [updateAdminObject] = useUpdateAdminObjectMutation();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const validationSchema = yup.object({
    title: yup
      .string()
      .matches(
        /^[A-Za-z0-9_ ]*$/,
        "Title must be alphanumeric, can include underscores and spaces"
      )
      .min(3, "Title must be at least 3 characters")
      .max(64, "Tile must be at most 64 characters")
      .required("Title is required"),
    description: yup
      .string()
      .required("Description is required")
      .min(10, "Description must be at least 10 characters")
      .max(400, "Description must be at most 400 characters"),
    entity: yup.string().required("Entity is required"),
    version: yup.number().required("Version is required"),
    shortName: yup.string().required("Short Name is required").min(3).max(4),
  });

  // ... rest of your component

  return (
    <div>
      <Tooltip title="Edit">
        <IconButton onClick={handleOpen}>
          <EditOutlined />
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle> Edit Data Object </DialogTitle>
        <DialogContent
          sx={{
            p: 2,
          }}
        >
          <Formik
            initialValues={initialData}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              console.log(values);
              const { title, description, entity, version, shortName } = values;
              //        "entity": {
              //     "description": "The object entity name",
              //     "enum": [
              //         "user"
              //     ],
              //     "short_name": "user",
              //     "uniquekey": "user_id",
              //     "display_ui": false
              // },
              // "user_id": {
              //     "description": "The unique identifier of the user object",
              //     "type": "string",
              //     "pattern": "[a-zA-Z0-9_-]*$",
              //     "minLength": 5,
              //     "maxLength": 20,
              //     "searchable": true,
              //     "display_ui": true
              // },
              const object = {
                title,
                description,
                entity,
                version,
                type: "object",
                properties: {
                  entity: {
                    description: "The object entity name",
                    enum: [entity],
                    short_name: shortName,
                    uniquekey: `${entity}_id`,
                    display_ui: false,
                  },
                  [`${entity}_id`]: {
                    description: "The unique identifier of the object",
                    type: "string",
                    pattern: "[a-zA-Z0-9_-]*$",
                    minLength: 5,
                    maxLength: 20,
                    searchable: true,
                    display_ui: true,
                  },
                },
              };
              await updateAdminObject(object)
                .unwrap()
                .then((data) => toast.success(data.message))
                .catch((error) =>
                  toast.error(
                    error.data.message || error.error || "Something went wrong"
                  )
                );
              handleClose();
              setSubmitting(false);
            }}
          >
            {({
              isSubmitting,
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
            }) => (
              <Form>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={2}
                  width={"100%"}
                  component={Paper}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Box width={"50%"}>
                      <FormLabel
                        sx={{
                          color: "text.primary",
                        }}
                      >
                        Title
                      </FormLabel>
                      <Field
                        as={TextField}
                        name="title"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.title}
                        error={Boolean(errors.title && touched.title)}
                        helperText={touched.title && errors.title}
                        fullWidth
                      />
                    </Box>
                    <Box width={"50%"}>
                      <FormLabel>Entity </FormLabel>
                      <Field
                        as={TextField}
                        name="entity"
                        onChange={handleChange}
                        disabled
                        onBlur={handleBlur}
                        value={values.entity}
                        error={Boolean(errors.entity && touched.entity)}
                        helperText={touched.entity && errors.entity}
                        fullWidth
                      />
                    </Box>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 3,
                      alignItems: "center",
                    }}
                  >
                    <Box width={"50%"}>
                      <FormLabel
                        sx={{
                          color: "text.primary",
                        }}
                      >
                        Short Name{" "}
                      </FormLabel>
                      <Field
                        as={TextField}
                        name="shortName"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.shortName}
                        error={Boolean(errors.shortName && touched.shortName)}
                        helperText={touched.shortName && errors.shortName}
                        fullWidth
                      />
                    </Box>
                    <Box width={"50%"}>
                      <FormLabel>Version </FormLabel>
                      <Field
                        as={TextField}
                        name="version"
                        onChange={handleChange}
                        disabled
                        onBlur={handleBlur}
                        value={values.version}
                        error={Boolean(errors.version && touched.version)}
                        helperText={touched.version && errors.version}
                        fullWidth
                      />
                    </Box>
                  </Box>
                  <FormLabel
                    sx={{
                      color: "text.primary",
                    }}
                  >
                    Description
                  </FormLabel>
                  <Field
                    as={TextareaAutosize}
                    minRows={5}
                    name="description"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.description}
                    error={Boolean(errors.description && touched.description)}
                    helperText={touched.description && errors.description}
                    fullWidth
                  />
                </Box>

                <DialogActions
                  sx={{
                    p: 2,
                    gap: 2,
                  }}
                >
                  <Button
                    type="button"
                    variant="outlined"
                    color="secondary"
                    size="small"
                    onClick={handleClose}
                    disabled={isSubmitting}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    size="small"
                    disabled={isSubmitting}
                  >
                    Submit
                  </Button>
                </DialogActions>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

EditDataObjectDialog.propTypes = {
  initialData: PropTypes.object.isRequired,
};

export default EditDataObjectDialog;
