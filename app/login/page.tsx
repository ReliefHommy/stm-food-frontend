import LoginForm from './login'

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-semibold mb-4">Vendor Login</h1>
      <LoginForm />
    </div>
  )
}
