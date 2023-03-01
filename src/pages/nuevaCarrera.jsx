import {Formik, Field, Form} from "formik";

const initialValues = {
    codcar: '',
    codare: '',
    modo: '',
    nombre: '',
    nombreCorto: '',
    idSede: '',
    activo: 's',
    idCarrera: ''

}

function NuevaCarrera(){

    return (
        <div className="container">
            <h1>Nueva Carrera</h1>
            <Formik initialValues={initialValues} onSubmit={values => console.log(values)}>
                <Form>
                    <div className="grid">
                        <label htmlFor="codcar">
                            Codcar
                            <Field name="codcar" type="text" placeholder="Código de Carrera"></Field>
                        </label>

                        <label htmlFor="codare">Codare
                            <Field name="codare" type="text" placeholder="Código de Área"></Field>
                        </label>

                        <label htmlFor="idSede">
                            Sede
                            <Field name="idSede" type="text" placeholder="Lugar"></Field>
                        </label>

                        <label htmlFor="modo">
                            Modo
                            <Field name="modo" type="text" placeholder="Modo"></Field>
                        </label>
                    </div>
                    <div className="grid">
                        <label htmlFor="nombre">
                            Nombre
                            <Field name="nombre" type="text" placeholder="Carrera"></Field>
                        </label>
                        <label htmlFor="nombreCorto">
                            Nombre Corto
                            <Field name="nombreCorto" type="text" placeholder="Nombre Corto"></Field>
                        </label>
                    </div>

                </Form>
            </Formik>


        </div>
    )
}

export default NuevaCarrera
