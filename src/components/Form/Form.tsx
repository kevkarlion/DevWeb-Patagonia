import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Para manejar el estado de envío
  const [successMessage, setSuccessMessage] = useState(""); // Para mostrar mensajes de éxito
  const [errorMessage, setErrorMessage] = useState(""); // Para mostrar mensajes de error

  // Especificamos el tipo del evento
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita la recarga de la página
    setIsSubmitting(true); // Muestra estado de carga

    try {
      const response = await fetch('/api/sendEmail', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Enviamos los datos del formulario como JSON
      });
      console.log(response.ok)
      if (response.ok) {
        setSuccessMessage("Mensaje enviado correctamente."); // Mensaje de éxito
        setFormData({ name: "", email: "", message: "" }); // Resetea el formulario
      } else {
        throw new Error("Error enviando el mensaje");
      }
    } catch (error) {
      setErrorMessage("Ocurrió un error al enviar el formulario."); // Mensaje de error
    } finally {
      setIsSubmitting(false); // Desactiva el estado de carga
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4 dark:bg-dark">
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-darkTerciary">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Envianos tu consulta
        </h2>

        {/* Mostrar mensaje de éxito o error */}
        {successMessage && (
          <p className="mb-4 text-center text-green-500">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mb-4 text-center text-red-500">{errorMessage}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block font-semibold text-gray-700 dark:text-white"
              >
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block font-semibold text-gray-700 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tu email"
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700 dark:text-white"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-2 w-full rounded-md border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={5}
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full rounded-md bg-blue-500 p-2 text-white focus:outline-none ${isSubmitting ? "cursor-not-allowed opacity-50" : "hover:bg-blue-600"}`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
