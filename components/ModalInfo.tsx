import ModalContainer from 'components/ModalContainer';

interface Props {
  closeModal: (val: boolean) => void;
}

export default function ModalInfo({ closeModal }: Props) {
  return (
    <ModalContainer closeModal={closeModal}>
      <div className="flex flex-col justify-evenly text-sm md:text-base">
        <p className="modal pb-6">
          Select a date to see my availability. When you select a date the full
          week will be displayed. The currently selected date is always outlined
          in yellow.
        </p>
        <div className="flex flex-col-reverse items-center justify-start pb-2 sm:flex-row md:pb-4 md:pl-8">
          <div className="mx-4 h-8 w-8 rounded-full bg-green-300" />
          <p className="modal mb-2 sm:mb-auto">
            Available times are highlighted in green
          </p>
        </div>
        <div className="flex flex-col-reverse items-center justify-start pb-4 sm:flex-row md:pl-8">
          <div className="mx-4 h-8 w-8 rounded-full bg-purple-200" />
          <p className="modal mb-2 sm:mb-auto">
            Booked slots are blocked out in purple
          </p>
        </div>
        <p className="modal pb-6">
          Once you have found a suitable time click on the plus icon, and enter
          in the remaining details.
        </p>
        <p className="modal">
          Once complete, your appointment details will be displayed.
        </p>
        <p className="modal pt-4 font-bold">
          N.b. All times are adjusted and displayed according to your local
          timezone.
        </p>
      </div>
    </ModalContainer>
  );
}
