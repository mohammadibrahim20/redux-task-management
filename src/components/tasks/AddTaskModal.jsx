import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/tasksSlice";
import Modal from "../ui/modal";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onCancel = () => {
    reset();
    setIsOpen(false);
  };
  const onSubmit = (data) => {
    dispatch(addTask(data));
    reset();
    setIsOpen(false);
  };
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"Programing Hero"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <label htmlFor="title">Title</label>
          <input
            className="w-full rounded-md"
            type="text"
            {...register("title")}
            id="title"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="description">Description</label>
          <input
            className="w-full rounded-md"
            type="text"
            {...register("description")}
            id="description"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="date">Deadline</label>
          <input
            className="w-full rounded-md"
            type="date"
            {...register("date")}
            id="description"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="assignTo">Assign to</label>
          <select
            className="w-full rounded-md"
            name="assignTo"
            {...register("assignTo")}
            id="assignTo"
          >
            <option value="Mahabu">Mahabu</option>
            <option value="abu">abu</option>
            <option value="shahabu">shahabu</option>
            <option value="babu">babu</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="priority">priority</label>
          <select
            className="w-full rounded-md"
            name="priority"
            {...register("priority")}
            id="priority"
          >
            <option value="high">high</option>
            <option value="medium">medium</option>
            <option value="low">low</option>
          </select>
        </div>
        <div className="flex mt-5 gap-3 justify-end">
          <button className="btn btn-primary" name="submit" type="submit">
            Submit
          </button>
          {/* <button
            type="cancel"
            className="btn btn-danger"
            onClick={() => onCancel()}
          >
            Cencel
          </button> */}
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
