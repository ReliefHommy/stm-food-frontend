import RegisterForm from './register'

export default function RegisterPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <p className="text-2xl font-semibold mb-4">Create an account</p>
      <RegisterForm />
    </div>
  )
}
