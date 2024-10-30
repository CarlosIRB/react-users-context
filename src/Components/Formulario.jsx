import { useForm } from "react-hook-form";
import axios from "axios";
import Swal from "sweetalert2";

const Formulario = () => {
  const {
    register,
    formState: { errors },
    watch,
    handleSubmit,
  } = useForm();

  const addUser = async () => {
    const newUser = {
      name: watch("name"),
      job: watch("job"),
    };
    const res = await axios.post("https:/reqres.in/api/users", newUser);
    console.log(res.data);
    const successMessage = `
        <p><strong>Nombre:</strong> ${res.data.name}</p>
        <p><strong>Ocupación:</strong> ${res.data.job}</p>
        <p><strong>Fecha:</strong> ${res.data.createdAt}</p>

      `;

    Swal.fire({
      title: "Agregado",
      html: successMessage,
      icon: "success",
    });
  };

  const modifyUser = async () => {
    const user = {
      name: watch("name"),
      job: watch("job"),
    };
    const res = await axios.put("https:/reqres.in/api/users/2", user);
    console.log(res.data);
    const successMessage = `
        <p><strong>Nombre:</strong> ${res.data.name}</p>
        <p><strong>Ocupación:</strong> ${res.data.job}</p>
        <p><strong>Fecha:</strong> ${res.data.updatedAt}</p>
      `;

    Swal.fire({
      title: "Modificado",
      html: successMessage,
      icon: "info",
    });
  };

  return (
    <div>
      <form className="flex justify-content-center">
        <div className="form-group">
          <label>Name:</label>
          <input
            className="form-control"
            type="text"
            {...register("name", { required: true, maxLength: 10 })}
          />
          {errors.name?.type === "required" && (
            <p className="text-danger">Es un campo requerido</p>
          )}
          {errors.name?.type === "maxLength" && (
            <p className="text-danger">Maximo 10 letras</p>
          )}
        </div>
        <div className="form-group">
          <label>Job</label>
          <input
            className="form-control"
            type="text"
            {...register("job", { required: true, maxLength: 15 })}
          />
          {errors.job?.type === "required" && (
            <p className="text-danger">Es un campo requerido</p>
          )}
          {errors.job?.type === "maxLength" && (
            <p className="text-danger">Maximo 15 letras</p>
          )}
        </div>
        <div className="d-flex justify-content-center gap-4 my-4">
          <input
            type="button"
            onClick={handleSubmit(addUser)}
            value="Add"
            className="btn btn-success"
          />

          <input
            type="button"
            onClick={handleSubmit(modifyUser)}
            value="Modify"
            className="btn btn-info"
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
