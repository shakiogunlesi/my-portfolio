
import * as Dialog from '@radix-ui/react-dialog';
import { styled } from '@stitches/react';

const Overlay = styled(Dialog.Overlay, {
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  position: 'fixed',
  inset: 0,
});

const Content = styled(Dialog.Content, {
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '0 10px 38px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.04)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
});

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="btn">Open Dialog</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Dialog Title</Dialog.Title>
        <Dialog.Description>This is the dialog description.</Dialog.Description>
        <Dialog.Close asChild>
          <button className="btn">Close</button>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
