interface ResetButtonProps {
  onClick: () => void;
}

const ResetButton = ({ onClick }: ResetButtonProps) => (
  <button type="button" className="btn btn-ghost w-24" onClick={onClick}>
    リセット
  </button>
);

export { ResetButton };
