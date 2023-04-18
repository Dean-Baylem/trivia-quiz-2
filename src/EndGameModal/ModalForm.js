import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { TextField } from "@mui/material";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Please enter your name"),
});

const ModalForm = props => {

      const formik = useFormik({
        initialValues: {
          name: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          try {
            const responseData = await fetch(
              "http://localhost:5000/scores/postscore",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name: values.name,
                  score: props.score, // add to props
                }),
              }
            );
            console.log(responseData);
            props.setSaveFinished(true);
            props.setStartSave(false); // add to props
          } catch (err) {
            console.log(err);
          }
        },
      });

    return (
      <div className="save-form-container">
        <form
          id="saveForm"
          className="save-form"
          onSubmit={formik.handleSubmit}
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            label="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </form>
      </div>
    );
}

export default ModalForm;

