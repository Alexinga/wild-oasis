import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
  // const [isOpenModal, setIsOpenModal] = useState(false);
  // function handleModal() {
  //   setIsOpenModal(!isOpenModal);
  // }
  // return (
  //   <div>
  //     <Button onClick={handleModal}>Add new Cabin</Button>
  //     {isOpenModal && (
  //       <Modal onHandleModal={handleModal}>
  //         <CreateCabinForm onCloseModal={handleModal} />
  //       </Modal>
  //     )}
  //   </div>
  // );
}

export default AddCabin;
