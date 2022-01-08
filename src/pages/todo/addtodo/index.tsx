import SvgDynamic from '@Atoms/SvgDynamic'
import { css } from '@emotion/react'
import {
	AddTodoFormError,
	AddTodoFormImagePreview,
	AddTodoFormInput,
	AddTodoFormInputImage,
	AddTodoFormLabel,
	AddTodoFormLabelText,
	AddTodoFormSubmit,
	AddTodoFormTextarea,
	AddTodoFormWrapper,
} from '@Styles/pages/todo/addtodo'
import makeRandomID from '@Utils/id_random'
import { Formik } from 'formik'
import { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const AddTodo: FC = () => {
	const [image, setImage] = useState<string | ArrayBuffer | null>('')
	const dispatch = useDispatch()
	const notify = () => toast('Task added!')

	const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files && e.target.files[0]
		const reader = new FileReader()
		reader.readAsDataURL(file as Blob)
		reader.onloadend = event => {
			if (event.target) {
				setImage(event.target.result)
			}
		}
	}

	return (
		<AddTodoFormWrapper
			customStyle={css`
				align-items: center;
				display: flex;
				justify-content: center;
				height: 100vh;
				width: 100vw;
				flex-direction: column;
			`}
		>
			<h1>Add new task</h1>
			<Formik
				initialValues={{
					date: '',
					title: '',
					description: '',
					image: '',
				}}
				validate={values => {
					let errors: { [key: string]: string } = {}

					///valid date
					if (!values.date) {
						errors.date = 'Date is Required'
					}
					///valid title
					if (!values.title) {
						errors.title = 'Title is Required'
					}

					///valid description
					if (!values.description) {
						errors.description = 'Description is Required'
					}

					///valid image
					if (!values.image) {
						errors.image = 'Image is Required'
					}
					return errors
				}}
				onSubmit={(event, { resetForm }) => {
					dispatch({
						type: 'ADD_TODO',
						payload: {
							id: makeRandomID(10),
							date: event.date,
							title: event.title,
							description: event.description,
							image: image,
						},
					})
					notify()
					resetForm()
					setImage('')
				}}
			>
				{({
					handleSubmit,
					errors,
					values,
					handleChange,
					handleBlur,
					touched,
					setFieldValue,
				}) => (
					<form onSubmit={handleSubmit}>
						<AddTodoFormWrapper
							customStyle={css`
								display: flex;
								flex-direction: column;
								margin: 20px 0;
							`}
						>
							<AddTodoFormLabelText htmlFor='date'>Date</AddTodoFormLabelText>
							<AddTodoFormInput type='date' name='date' id='date' placeholder='Date' />
							{errors.date && touched.date && (
								<AddTodoFormError>{errors.date}</AddTodoFormError>
							)}
						</AddTodoFormWrapper>
						<AddTodoFormWrapper
							customStyle={css`
								display: flex;
								flex-direction: column;
								margin: 20px 0;
							`}
						>
							<AddTodoFormLabelText htmlFor='title'>Title</AddTodoFormLabelText>
							<AddTodoFormInput
								type='text'
								name='title'
								id='title'
								placeholder='Title'
								width='409px'
							/>
							{errors.title && touched.title && (
								<AddTodoFormError>{errors.title}</AddTodoFormError>
							)}
						</AddTodoFormWrapper>
						<AddTodoFormWrapper
							customStyle={css`
								display: flex;
								flex-direction: column;
								margin: 20px 0;
							`}
						>
							<AddTodoFormLabelText htmlFor='description'>
								Description
							</AddTodoFormLabelText>
							<AddTodoFormTextarea
								name='description'
								id='description'
								placeholder='Description'
								cols={30}
								rows={10}
								value={values.description}
								onChange={handleChange}
								onBlur={handleBlur}
							></AddTodoFormTextarea>
							{errors.description && touched.description && (
								<AddTodoFormError>{errors.description}</AddTodoFormError>
							)}
						</AddTodoFormWrapper>
						<AddTodoFormWrapper
							customStyle={css`
								display: flex;
								flex-direction: column;
								margin: 20px 0;
							`}
						>
							<AddTodoFormLabelText htmlFor='image'>Image</AddTodoFormLabelText>
							<AddTodoFormWrapper
								customStyle={css`
									display: flex;
									justify-content: space-between;
								`}
							>
								<AddTodoFormLabel htmlFor='image'>
									<SvgDynamic href='/icons/addtodo' />
								</AddTodoFormLabel>
								<AddTodoFormInputImage
									type='file'
									name='image'
									id='image'
									style={{ display: 'none' }}
									onChange={event => {
										setFieldValue(
											'image',
											event.currentTarget.files && event.currentTarget.files[0]
										)
										handleImage(event)
									}}
									onBlur={handleBlur}
								/>
								{image && (
									<AddTodoFormImagePreview image={image}></AddTodoFormImagePreview>
								)}
							</AddTodoFormWrapper>
							{errors.image && touched.image && (
								<AddTodoFormError>{errors.image}</AddTodoFormError>
							)}
						</AddTodoFormWrapper>
						<AddTodoFormSubmit type='submit'>Add New Task</AddTodoFormSubmit>
					</form>
				)}
			</Formik>
		</AddTodoFormWrapper>
	)
}

export default AddTodo
