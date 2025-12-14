import { useState } from "react";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    // VALIDACIONES
    if (!email || !password || !confirmPass) {
      setMessage("❌ Todos los campos son obligatorios.");
      return;
    }

    if (password.length < 6) {
      setMessage("❌ La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    if (password !== confirmPass) {
      setMessage("❌ Las contraseñas no coinciden.");
      return;
    }

    // TODO CORRECTO
    setMessage("✅ Registro exitoso 🎉");
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2 className="text-center mb-4">Registro</h2>

      <form onSubmit={handleRegister} className="card p-4 shadow">

        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* CONFIRMAR PASSWORD */}
        <div className="mb-3">
          <label className="form-label">Confirmar contraseña</label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setConfirmPass(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Registrarme
        </button>
      </form>

      {/* MENSAJE */}
      {message && (
        <p className="mt-3 text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default RegisterPage;
