
export interface CloseMyAccountDisclaimerProps  {
  isSouthAustralia: boolean;
};

 export const CloseMyAccountDisclaimer = ({ isSouthAustralia }: CloseMyAccountDisclaimerProps) => {
  const selfExcludeName = isSouthAustralia ? 'Bar yourself' : 'self-exclude';

  return (
    <small className="disclaimer" data-test-id="disclaimer">
      <span>
        <strong>NOTE:</strong> Alternatively, you can permanently {selfExcludeName} from company,
        preventing you from opening a new account in future. This option is available under the
        Play section below.
      </span>
    </small>
  );
};