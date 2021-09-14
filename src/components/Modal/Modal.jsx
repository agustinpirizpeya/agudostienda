import React from "react";
import reactDom from "react-dom";
import { Icon, Modal, Checkbox, Form } from "semantic-ui-react";
import IconFormCart from "../../assets/icons/form-cart-icon.svg";
import ButtonStyled from "../Button/Button";

function ModalStyled(props) {
  const [firstOpen, setFirstOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false);
  const [formState, setFormState] = React.useState(props.cartForm);

  const handleConfirmOrder = () => {
    debugger;
    props.sendOrder();
    setSecondOpen(true);
  };

  React.useEffect(() => {
    if (props.onFormChange) props.onFormChange(formState);
  }, [formState]);

  return (
    <>
      <button
        onClick={() => setFirstOpen(true)}
        disabled={props.disabled}
        class="ui primary button btnStyled"
      >
        {props.textPrimaryButton}
      </button>

      <Modal
        onClose={() => setFirstOpen(false)}
        onOpen={() => setFirstOpen(true)}
        open={firstOpen}
      >
        <Modal.Header>{props.modalPrimaryTitle}</Modal.Header>
        <Modal.Content image>
          <div className="image">
            <img src={IconFormCart}></img>
          </div>
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>{props.formFirstName}</label>
                <input
                  onChange={({ target }) => {
                    setFormState({
                      ...formState,
                      name: target.value,
                    });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>{props.formLastName}</label>
                <input
                  onChange={({ target }) => {
                    setFormState({
                      ...formState,
                      lastName: target.value,
                    });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <label>{props.formEmail}</label>
                <input
                  onChange={({ target }) => {
                    setFormState({
                      ...formState,
                      email: target.value,
                    });
                  }}
                />
              </Form.Field>
              <Form.Field>
                <Checkbox label="Acepto los términos y condiciones" />
              </Form.Field>
            </Form>
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions>
          <button
            onClick={handleConfirmOrder}
            disabled={props.disabled}
            class="ui primary button btnStyled"
          >
            <Icon name="right chevron" />
            {props.textSecondaryButton}
          </button>
        </Modal.Actions>

        <Modal
          onClose={() => setSecondOpen(false)}
          open={secondOpen}
          size="small"
        >
          <Modal.Header>{props.modalSecondaryTitle}</Modal.Header>
          <Modal.Content>
            <p>
              {props.modalSecondarySubtitle}
              {props.cartId}
            </p>
          </Modal.Content>
          <Modal.Actions>
            <button
              con="check"
              content="All Done"
              onClick={() => setSecondOpen(false)}
              disabled={props.disabled}
              class="ui primary button btnStyled"
            >
              {props.textTerciaryButton}
            </button>
          </Modal.Actions>
        </Modal>
      </Modal>
    </>
  );
}

export default ModalStyled;
