import { Formik,Form,Field, ErrorMessage } from "formik";


const validateEmail = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );
function Formikform()
{
    return(
        <Formik
        initialValues={
            {
                name:"",
                emailId:""
            }}
            validate={values=>{
                const errors={};
                if (values.name.length <= 5) {
                    errors.name = "username should be more than 5 characters";
                  } 
                   else if (values.emailId.length <= 5)
                    errors.emailId = "email should be more than 5 characters";
                  if (!validateEmail.test(values.emailId)) {
                    errors.emailId = "Invalid";
                  }
                  return errors;

            }}
            onSubmit={values=>{
                console.log(values)
            }}>

            {/* {({values,handleSubmit,handleChange,errors,handleBlur}) */}
               {() => {
        return (
          <>
            <Form >
              <div>
                  <label>Username </label>
                  <Field name="name" type="text"></Field>
                {/* <input  
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  name="name"
                  onBlur={handleBlur}
                ></input> */}
                <ErrorMessage name="name"/>
                {/* <span>{errors.name}</span> */}
                {/* {touched.firstName && errors.name ? (<div>{errors.name}</div> ) : null} */}
              </div><br/>
              <div>
              <label>Email </label>
              <Field name="emailId" type="email"></Field>
              {/* <input  
                  type="email"
                  value={values.emailId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  name="emailId"
                ></input> */}
                 <ErrorMessage name="emailId"/>
                {/* <span>{errors.emailId}</span> */}
                {/* {touched.emailId && errors.emailId ? (<div>{errors.emailId}</div> ) : null} */}
              </div><br/>
              <button type="submit">Submit</button>
            </Form>
          </>
        );
      }}
        </Formik>
    )
}

export default Formikform