import React, { useCallback, useState } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { TextField, Box, Grid, Button, Typography } from '@mui/material';
import { AppApiProvider as Api } from '@/providers/app-api.provider';
import * as Yup from 'yup';
import { StyledBox } from '@/components/styled-box/styled-box.component';
import swal from 'sweetalert2';

interface FormData {
    name: string;
    imageUrl: string;
}

interface FormProps {
}

const MuscleGroupForm: React.FC<FormProps> = () => {
    const api = new Api();
    const [imageUrl, setImageUrl] = useState('');

    const onSubmit = useCallback(
        async (values: FormData, actions: FormikHelpers<FormData>) => {
            console.log("values", values);
            try {
                const result = await api.makeHttpRequest({
                    method: 'POST',
                    url: '/muscle-group',
                    data: values
                });
                if (result) {
                    console.log(result);
                    await setTimeout(() => { }, 300);
                    window.location.href = '/muscle-group';
                }
            } catch (error) {
                swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Ocorreu um erro ao salvar o grupo muscular',
                });
            }
        },
        []
    );

    const initialValues: FormData = {
        name: '',
        imageUrl: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Nome do grupo muscular é obrigatório'),
        imageUrl: Yup.string().url('Deve ser uma URL válida').required('URL da imagem é obrigatória'),
    });

    return (
        <StyledBox>
            <Typography variant="h5" component="h1" gutterBottom
                sx={{
                    fontWeight: 'bold',
                }}
            >
                Novo Grupo Muscular
            </Typography>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ errors, touched, setFieldValue }) => (
                    <Form>
                        <Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
                            <Grid container spacing={2}>
                                {/* Campo nome */}
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        label="Nome do Grupo Muscular"
                                        name="name"
                                        error={touched.name && Boolean(errors.name)}
                                        helperText={touched.name && errors.name}
                                        style={{
                                            width: '100%',
                                            marginBottom: '1rem'
                                        }}
                                    />
                                </Grid>
                                {/* Campo imageUrl */}
                                <Grid item xs={12}>
                                    <Field
                                        as={TextField}
                                        label="URL da Imagem"
                                        name="imageUrl"
                                        error={touched.imageUrl && Boolean(errors.imageUrl)}
                                        helperText={touched.imageUrl && errors.imageUrl}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const value = e.target.value;
                                            setFieldValue('imageUrl', value);
                                            setImageUrl(value);
                                        }}
                                        style={{
                                            width: '100%',
                                            marginBottom: '1rem'
                                        }}
                                    />
                                    {imageUrl && (
                                        <Box sx={{
                                            my: 2, textAlign: 'center',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <img src={imageUrl} alt="Preview"
                                                style={{
                                                    maxWidth: '400px',
                                                    maxHeight: '300px',
                                                    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)'
                                                }} />
                                        </Box>
                                    )}
                                </Grid>
                                <Grid item xs={12}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end'
                                    }}
                                >
                                    <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                                        Salvar
                                    </Button>
                                </Grid>
                            </Grid>
                        </Box>
                    </Form>
                )}
            </Formik>
        </StyledBox>
    );
};

export default MuscleGroupForm;