import React, { useCallback, useState, useEffect } from 'react';
import { Formik, Form, Field, FormikHelpers } from 'formik';
import { TextField, Box, Grid, Button, Typography } from '@mui/material';
import { AppApiProvider as Api } from '@/providers/app-api.provider';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { StyledBox } from '@/components/styled-box/styled-box.component';
import swal from 'sweetalert2';
// import { Exercise } from '@/types/exercise.type';

interface FormData {
	name: string;
	imageUrl: string;
	videoUrl?: string;
	description?: string;
	muscleGroupId?: string;
}

interface FormProps { }

const ExerciseForm: React.FC<FormProps> = () => {
	const api = new Api();
	const [isLoading, setIsLoading] = useState(false);
	const [muscleGroupOptions, setMuscleGroupOptions] = useState<any[]>([]);
	const { id } = useParams();
	const [initialFormValues, setInitialFormValues] = useState<FormData>({
		name: '',
		imageUrl: '',
		videoUrl: '',
		description: '',
		muscleGroupId: ''
	});

	useEffect(() => {
		if (id && id !== 'new') {
			setIsLoading(true);
			api
				.makeHttpRequest({
					method: 'GET',
					url: `/exercise/${id}`
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

	useEffect(() => {
		api
			.makeHttpRequest({
				method: 'GET',
				url: '/muscle-group'
			})
			.then((result) => {
				console.log('result', result);
				setMuscleGroupOptions(
					result.data.map((muscleGroup: any) => ({
						value: muscleGroup.id,
						label: muscleGroup.name
					}))
				);
			});
	}, []);

	const onSubmit = useCallback(
		async (values: FormData, _actions: FormikHelpers<FormData>) => {
			console.log('values', values);
			try {
				let result;
				if (id) {
					result = await api.makeHttpRequest({
						method: 'PATCH',
						url: `/exercise/${id}`,
						data: values
					});
				} else {
					result = await api.makeHttpRequest({
						method: 'POST',
						url: '/exercise',
						data: values
					});
				}

				if (result) {
					console.log(result);
					await setTimeout(() => { }, 300);
					window.location.href = '/exercise';
				}
			} catch (error) {
				swal.fire({
					icon: 'error',
					title: 'Oops...',
					text: 'Ocorreu um erro ao salvar o exercicio'
				});
			}
		},
		[id]
	);

	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Nome do exercicio é obrigatório'),
		imageUrl: Yup.string()
			.url('Deve ser uma URL válida')
			.required('URL da imagem é obrigatória')
	});

	return (
		<>
			<StyledBox>
				<Typography
					variant="h5"
					component="h1"
					gutterBottom
					sx={{
						fontWeight: 'bold'
					}}
				>
					{id ? 'Editar' : 'Novo'} Exercicio
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
													label="Nome do Exercicio"
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
											<Grid item xs={12}>
												<Field
													as={TextField}
													label="URL do Video"
													name="videoUrl"
													error={touched.videoUrl && Boolean(errors.videoUrl)}
													helperText={touched.videoUrl && errors.videoUrl}
													onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
														const value = e.target.value;
														setFieldValue('videoUrl', value);
													}}
													style={{
														width: '100%',
														marginBottom: '1rem'
													}}
													value={values.videoUrl}
												/>
											</Grid>
											<Grid item xs={12}>
												<Field
													as={TextField}
													label="Descrição"
													name="description"
													error={touched.description && Boolean(errors.description)}
													helperText={touched.description && errors.description}
													onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
														const value = e.target.value;
														setFieldValue('description', value);
													}}
													multiline
													rows={4}
													style={{
														width: '100%',
														marginBottom: '1rem'
													}}
													value={values.description}
												/>
											</Grid>
											<Grid item xs={12}
											>
												<Field
												style={{
													width: '100%',
													marginBottom: '1rem'
												}}
													as={Select}
													label="Grupo Muscular"
													name="muscleGroupId"
													options={muscleGroupOptions}
													error={touched.muscleGroupId && Boolean(errors.muscleGroupId)}
													helperText={touched.muscleGroupId && errors.muscleGroupId}
													onChange={(selectedOption: any) => {
														setFieldValue('muscleGroupId', selectedOption.value);
													}}
													value={muscleGroupOptions.find(
														(option) => option.value === values.muscleGroupId
													)}
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
		</>
	);
};

export default ExerciseForm;
