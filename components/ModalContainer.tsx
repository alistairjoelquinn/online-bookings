interface Props {
  closeModal: (val: boolean) => void;
  children?: React.ReactNode;
  clearState?: () => void;
}

export default function ModalContainer({
  children,
  closeModal,
  clearState,
}: Props) {
  return (
    <>
      <div
        className="fixed inset-0 z-30 animate-shroud bg-shroud opacity-70"
        onClick={() => {
          clearState?.();
          closeModal(false);
        }}
      />
      <div className="fixed left-1/2 top-1/2 z-40 flex w-80 -translate-x-1/2 -translate-y-1/2 animate-reveal flex-col items-center rounded-lg border-2 border-purple-400 bg-white px-8 py-10 opacity-100 dark:bg-gray-900 sm:w-auto">
        {children}
      </div>
    </>
  );
}
