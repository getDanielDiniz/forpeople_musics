import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FilteredStation } from "../../../../Types/FilteresStation";
import IHandleFavoriteList from "../../../../Types/params/IHandleFavoriteLists";
import { useDispatch } from "react-redux";
import { updateFavoriteList } from "../../../../Libs/Redux/slices/stationsSlice";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import schema from "./validator";
import { toggleEditMode } from "../../../../Libs/Redux/slices/configsSlice";

/**
 * 
 * @param {FilteredStation}station - Estação que vai ser atualizada, passada automaticamente pelo elemento pai
 * @returns - Formulário que a partir do submit é atualizada a estação editada e consecutivamente a lista de favoritos
 */
export const EditContent = ({ station }: { station: FilteredStation }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  //Dispara evento de atualizar a estação e de fechar o edit mode
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    const payload: IHandleFavoriteList = {
      operation: "update",
      station: {
        ...station,
        ...data,
      },
    };
    dispatch(updateFavoriteList(payload));
    dispatch(toggleEditMode({state:false}));
  };

  //Iteração no array de erros para toast
  if (errors) {
    Object.values(errors).forEach((error) => {
      if (error?.message) {
        toast.error(error.message);
      }
    });
  }

  return (
    <form
      className="col-md-10 col-8 flex-fill d-flex flex-column gap-1"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        defaultValue={station.name}
        {...register("name", { required: true })}
      />
      <div className="d-flex gap-2">
        <input
          defaultValue={station.country ? station.country : station.countrycode}
          {...register("country")}
        />
        <input
          defaultValue={station.state ? station.state : ""}
          {...register("state")}
        />
      </div>
      <input
        defaultValue={station.tags ? station.tags : ""}
        {...register("tags")}
        placeholder="Escreva aqui o estilo de música que a rádio toca"
      />
      <div className="d-flex gap-2">
        <button onClick={() => dispatch(toggleEditMode({state:false}))}>
          Cancelar Edição
        </button>
        <button type="submit">Salvar edição</button>
      </div>
    </form>
  );
};
