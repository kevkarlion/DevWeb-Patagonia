import React, { useState } from "react";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const validateForm = () => {
    const errors: any = {};
    if (!formData.name || formData.name.length < 3) {
      errors.name = "El nombre debe tener al menos 3 caracteres.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "Por favor, ingresa un correo electrónico válido.";
    }
    if (!formData.message || formData.message.length < 10) {
      errors.message = "El mensaje debe tener al menos 10 caracteres.";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({ ...formErrors, [name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Mensaje enviado correctamente.");
        setFormData({ name: "", email: "", message: "" });

        const scrollPosition = window.pageYOffset;
        setTimeout(() => {
          window.scrollTo(0, scrollPosition);
        }, 100);
      } else {
        throw new Error("Error enviando el mensaje");
      }
    } catch (error) {
      setErrorMessage("Ocurrió un error al enviar el formulario.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-gray-100 py-24 dark:bg-dark"
      id="contacto"
      style={{ scrollMarginTop: "80px" }}
    >
      <div className="w-full max-w-2xl rounded-lg bg-white p-8 shadow-lg dark:bg-darkTerciary">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800 dark:text-white">
          Envíanos tu consulta
        </h2>
        
        <p className="mb-6 text-center text-gray-600 dark:text-gray-300">
          Estamos aquí para ayudarte. Si tienes alguna consulta sobre nuestros servicios, deseas colaborar o simplemente quieres más información, no dudes en contactarnos. Estaremos encantados de asistirte en lo que necesites.
        </p>

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
                className={`mt-2 w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  formErrors.name ? "border-red-500" : "border-gray-300"
                } focus:ring-blue-500`}
                placeholder="Tu nombre"
                required
              />
              {formErrors.name && (
                <p className="text-red-500">{formErrors.name}</p>
              )}
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
                className={`mt-2 w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                } focus:ring-blue-500`}
                placeholder="Tu email"
                required
              />
              {formErrors.email && (
                <p className="text-red-500">{formErrors.email}</p>
              )}
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
              className={`mt-2 w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                formErrors.message ? "border-red-500" : "border-gray-300"
              } focus:ring-blue-500`}
              rows={5}
              placeholder="Tu mensaje"
              required
            ></textarea>
            {formErrors.message && (
              <p className="text-red-500">{formErrors.message}</p>
            )}
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`mt-4 w-full rounded-md bg-blue-500 p-2 text-white focus:outline-none ${
                isSubmitting
                  ? "cursor-not-allowed opacity-50"
                  : "hover:bg-blue-600"
              }`}
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
