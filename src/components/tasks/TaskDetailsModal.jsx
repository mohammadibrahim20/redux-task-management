import { useSelector } from "react-redux";
import Modal from "../ui/modal";

const TaskDetailsModal = ({ isOpen, setIsOpen, taskId:id }) => {
  console.log(id);
  const { tasks } = useSelector((state) => state.tasksSlice);
  const task = tasks.find((item) => item.id === id);
  console.log(task);
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={task?.title}>
      {task?.description}
    </Modal>
  );
};

export default TaskDetailsModal;
