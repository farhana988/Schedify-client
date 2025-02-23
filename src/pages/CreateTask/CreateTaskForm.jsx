/* eslint-disable react/prop-types */

const CreateTaskForm = ({ register, handleSubmit, errors, onSubmit }) => {
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <div>
          <label className="block font-semibold">Title</label>
          <input
            type="text"
            {...register("title", {
              required: "Title is required",
              maxLength: { value: 50, message: "Max length exceeded" },
            })}
            className="w-full p-3 border rounded-lg "
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              maxLength: { value: 200, message: "Max length exceeded" },
            })}
            className="w-full p-3 border rounded-lg "
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        <button
          type="submit"
          className=" bg-blue-600 text-white py-2 rounded cursor-pointer"
        >
          Create Task
        </button>
      </form>
    </div>
  );
};

export default CreateTaskForm;
