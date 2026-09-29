import React, { useState } from "react";
import { X, ArrowRight, CheckCircle2, Lock, Mail, User, Sparkles } from "lucide-react";
import BorderBeam from "../ui/BorderBeam";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialMode?: "login" | "signup";
  projectName: string;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialMode = "signup",
  projectName,
}) => {
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-neutral-900/40 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-2xl border border-neutral-200 bg-white p-6 md:p-8 shadow-2xl overflow-hidden">
        <BorderBeam size={220} duration={10} colorFrom="#2563eb" colorTo="#06b6d4" />

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-neutral-400 hover:text-neutral-800 hover:bg-neutral-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-3">
            <div className="mx-auto w-12 h-12 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 font-heading">¡Bienvenido a {projectName}!</h3>
            <p className="text-xs text-neutral-500">
              {mode === "signup" ? "Tu cuenta ha sido creada." : "Inicio de sesión correcto."} Redirigiendo al panel...
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-medium">
                <Sparkles className="w-3.5 h-3.5" /> Acceso a tu Cuenta
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 font-heading">
                {mode === "signup" ? `Únete a ${projectName}` : `Bienvenido de vuelta`}
              </h3>
              <p className="text-xs text-neutral-500">
                {mode === "signup"
                  ? "Crea tu cuenta en menos de 1 minuto."
                  : "Ingresa tus credenciales para acceder a tus calendarios."}
              </p>
            </div>

            {/* Social Login with Google */}
            <div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(true);
                  setTimeout(() => { setSubmitted(false); onClose(); }, 1500);
                }}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 px-4 rounded-xl border border-neutral-200 bg-white hover:bg-neutral-50 text-xs text-neutral-700 font-medium transition-colors shadow-xs"
              >
                <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#EA4335"
                    d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.4l3.7 2.9C6.5 7.4 9 5 12 5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5.1 3.7-8.8z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.6 14.7c-.2-.7-.4-1.5-.4-2.7s.1-2 .4-2.7L1.9 6.4C.7 8.8 0 10.8 0 12s.7 3.2 1.9 5.6l3.7-2.9z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2.4-6.4-5.3L1.9 16C3.7 19.8 7.5 23 12 23z"
                  />
                </svg>
                <span>Continuar con Google</span>
              </button>
            </div>

            <div className="relative flex items-center justify-center">
              <div className="border-t border-neutral-200 w-full" />
              <span className="absolute bg-white px-2 text-[10px] uppercase font-mono text-neutral-400">
                O con tu email
              </span>
            </div>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">
              {mode === "signup" && (
                <div>
                  <label className="block text-xs font-medium text-neutral-700 mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Tu nombre completo"
                      className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="agencia@tuempresa.com"
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-700 mb-1">
                  Contraseña
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-2.5 w-4 h-4 text-neutral-400" />
                  <input
                    type="password"
                    required
                    placeholder="••••••••••••"
                    className="w-full text-xs pl-9 pr-3 py-2.5 rounded-xl bg-neutral-50 border border-neutral-200 text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>{mode === "signup" ? "Crear Cuenta de Agencia" : "Iniciar Sesión"}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            <div className="text-center text-xs text-neutral-500">
              {mode === "signup" ? (
                <>
                  ¿Ya tienes cuenta de agencia?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Iniciar sesión
                  </button>
                </>
              ) : (
                <>
                  ¿Aún no tienes cuenta?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    Pruébalo gratis
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
