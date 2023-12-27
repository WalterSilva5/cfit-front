import React, { useCallback, useState, useEffect } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { TextField, Box, Grid, Button, Typography } from '@mui/material';
import { AppApiProvider as Api } from '@/providers/app-api.provider';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledBox } from '@/components/styled-box/styled-box.component';
import swal from 'sweetalert2';

interface FormData {
	name: string;
	imageUrl: string;
}

interface FormProps {}

const MuscleGroupForm: React.FC<FormProps> = () => {
	const api = new Api();
	const [isLoading, setIsLoading] = useState(false);
	const { id } = useParams();
	console.log(id);
	const [initialFormValues, setInitialFormValues] = useState<FormData>({
		name: '',
		imageUrl: ''
	});

	useEffect(() => {
		if (id && id !== 'new') {
			setIsLoading(true);
			api
				.makeHttpRequest({
					method: 'GET',
					url: `/muscle-group/${id}`
				})
				.then((result) => {
					setInitialFormValues({
						name: result.name || '',
						imageUrl: result.imageUrl || ''
					});
					setIsLoading(false);
				});
		}
		console.log('id', id);
	}, [id]);

	const onSubmit = useCallback(
		async (values: FormData, actions: FormikHelpers<FormData>) => {
			console.log('values', values);
			try {
				let result;
				if (id) {
					result = await api.makeHttpRequest({
						method: 'PATCH',
						url: `/muscle-group/${id}`,
						data: values
					});
				} else {
					result = await api.makeHttpRequest({
						method: 'POST',
						url: '/muscle-group',
						data: values
					});
				}

				if (result) {
					console.log(result);
					await setTimeout(() => {}, 300);
					window.location.href = '/muscle-group';
				}
			} catch (error) {
				swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Ocorreu um erro ao salvar o grupo muscular'
				});
			}
		},
		[id]
	);

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Nome do grupo muscular é obrigatório'),
		imageUrl: Yup.string()
			.url('Deve ser uma URL válida')
			.required('URL da imagem é obrigatória')
	});

	return (
		<StyledBox>
			<Typography
				variant="h5"
				component="h1"
				gutterBottom
				sx={{
					fontWeight: 'bold'
				}}
			>
				{id ? 'Editar' : 'Novo'} Grupo Muscular
			</Typography>
			{/* isLoading */}
			{isLoading ? (
				<Typography
					variant="h5"
					component="h1"
					gutterBottom
					sx={{
						fontWeight: 'bold'
					}}
				>
					Carregando...
				</Typography>
			) : (
				<Formik
					initialValues={initialFormValues}
					validationSchema={validationSchema}
					onSubmit={onSubmit}
				>
					{({ values, errors, touched, setFieldValue }) => {
						return (
							<Form>
								<Box sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
									<Grid container spacing={2}>
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
												value={values.name}
											/>
										</Grid>
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
												}}
												style={{
													width: '100%',
													marginBottom: '1rem'
												}}
												value={values.imageUrl}
											/>
										</Grid>
										<Grid
											item
											xs={12}
											sx={{
												display: 'flex',
												justifyContent: 'flex-end'
											}}
										>
											<Button
												type="submit"
												variant="contained"
												color="primary"
												sx={{ mt: 2 }}
											>
												Salvar
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Form>
						);
					}}
				</Formik>
			)}
		</StyledBox>
	);
};

export default MuscleGroupForm;
