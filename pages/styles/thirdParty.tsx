import { useState } from "react";
import { Dialog } from "@reach/dialog";
import Title from "../../components/title";

import styles from "../../styles/Hello.module.css";
import "@reach/dialog/styles.css";

function DialogModal() {
  const [showDialog, setShowDialog] = useState(false);
  const open = () => setShowDialog(true);
  const close = () => setShowDialog(false);

  return (
    <div className={styles.hello}>
      <Title title={"Hello Dialog"} sub_title={"/styles/thirdParty"} />

      <button className={"btn btn-dark"} onClick={open}>
        Open Dialog
      </button>

      <Dialog isOpen={showDialog} onDismiss={close}>
        <p>Hello there. I am a dialog</p>
        <button className={"btn btn-dark"} onClick={close}>
          Close
        </button>
      </Dialog>
    </div>
  );
}

export default DialogModal;
