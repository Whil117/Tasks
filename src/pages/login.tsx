import { css } from '@emotion/react'
import { ButtonForm } from '@Styles/pages'
import {
	AddTodoFormError,
	AddTodoFormInput,
	AddTodoFormLabelText,
	AddTodoFormWrapper,
} from '@Styles/pages/todo/addtodo'
import { Form, Formik } from 'formik'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

interface IProps {}

const Login: FC<IProps> = props => {
	// const user = useSelector((ev: any) => ev.userReducer)
	const dispatch = useDispatch()
	return (
		<AddTodoFormWrapper
			customStyle={css`
				display: flex;
				width: 100%;
				justify-content: center;
				height: 100vh;
			`}
		>
			<AddTodoFormWrapper
				customStyle={css`
					display: flex;
					width: 100%;
					align-items: center;
					justify-content: center;
					/* height: 100vh; */
				`}
			>
				<div>
					<h1>Welcome to back</h1>
					<p>Welcome back! Please enter your details</p>
					<Formik
						initialValues={{ email: '', password: '' }}
						validate={values => {
							let errors: { [key: string]: string } = {}
							if (!values.email) {
								errors.email = 'Email is Required'
							}
							if (!values.password) {
								errors.password = 'Password is Required'
							}
							return errors
						}}
						onSubmit={event => {
							dispatch({
								type: 'SIGNIN',
								payload: {
									email: event.email,
									password: event.password,
								},
							})
						}}
					>
						{({ touched, errors }) => (
							<Form>
								<AddTodoFormWrapper
									customStyle={css`
										display: flex;
										flex-direction: column;
										margin: 20px 0;
									`}
								>
									<AddTodoFormLabelText
										htmlFor='email'
										customStyle={css`
											margin: 10px 0;
										`}
									>
										Email
									</AddTodoFormLabelText>
									<AddTodoFormInput type='email' name='email' id='email' />
									{touched.email && errors.email && (
										<AddTodoFormError>{errors.email}</AddTodoFormError>
									)}
								</AddTodoFormWrapper>
								<AddTodoFormWrapper
									customStyle={css`
										display: flex;
										flex-direction: column;
										margin: 20px 0;
									`}
								>
									<AddTodoFormLabelText
										htmlFor='password'
										customStyle={css`
											margin: 10px 0;
										`}
									>
										Password
									</AddTodoFormLabelText>
									<AddTodoFormInput type='password' name='password' id='password' />
									{touched.password && errors.password && (
										<AddTodoFormError>{errors.password}</AddTodoFormError>
									)}
								</AddTodoFormWrapper>
								<ButtonForm
									customStyle={css`
										border: none;
										align-items: center;
										justify-content: center;
										width: 100%;
										color: white;
										background: #3d3d3d;
										border-radius: 5px;
										padding: 12px 19px;
									`}
									type='submit'
								>
									Sign in
								</ButtonForm>
							</Form>
						)}
					</Formik>
				</div>
			</AddTodoFormWrapper>

			<div>
				<img src='/images/background.png' alt='' style={{ height: '100%' }} />
			</div>
		</AddTodoFormWrapper>
	)
}

export default Login
